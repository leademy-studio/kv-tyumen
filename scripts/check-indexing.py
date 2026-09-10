#!/usr/bin/env python3
"""Read-only SEO acceptance checks. --local-edge tests an isolated Traefik on 18080/18443."""
import argparse
import concurrent.futures
import json
import re
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ORIGIN = 'https://kv-tyumen.ru'
NS = '{http://www.sitemaps.org/schemas/sitemap/0.9}'
parser = argparse.ArgumentParser()
parser.add_argument('--local-edge', action='store_true')
args = parser.parse_args()


def fetch(url, headers=(), method='GET'):
    with tempfile.TemporaryDirectory(prefix='kv-indexing-') as tmp:
        cmd = ['curl', '--silent', '--show-error', '--path-as-is', '--max-time', '30',
               '--noproxy', '*', '-X', method, '-D', tmp + '/headers', '-o', tmp + '/body']
        if args.local_edge:
            # The isolated local test proxy uses a self-signed certificate, never production.
            cmd += ['--insecure']
            for host in ['kv-tyumen.ru', 'www.kv-tyumen.ru']:
                cmd += ['--connect-to', f'{host}:80:127.0.0.1:18080',
                        '--connect-to', f'{host}:443:127.0.0.1:18443']
        for h in headers:
            cmd += ['-H', h]
        subprocess.run(cmd + [url], check=True, capture_output=True)
        raw = Path(tmp + '/headers').read_text()
        status = int(re.findall(r'HTTP/\S+ (\d+)', raw)[-1])
        fields = {k.lower(): v.strip() for k, v in re.findall(r'^([^:\n]+):([^\n]*)', raw, re.M)}
        return status, fields, Path(tmp + '/body').read_bytes()


class Head(HTMLParser):
    def __init__(self, body):
        super().__init__()
        self.canonicals, self.robots = [], []
        self.feed(body.decode('utf-8'))

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs.get('href'))
        if tag == 'meta' and attrs.get('name', '').lower() in ['robots', 'googlebot', 'yandex']:
            self.robots.append(attrs.get('content', '').lower())


status, headers, body = fetch(ORIGIN + '/sitemap.xml')
assert status == 200 and 'application/xml' in headers['content-type'], (status, headers)
root = ET.fromstring(body)
assert root.tag == NS + 'urlset'
urls = []
for node in root:
    assert node.tag == NS + 'url'
    assert [child.tag for child in node] == [NS + x for x in ['loc', 'changefreq', 'priority']]
    url, freq, priority = [child.text for child in node]
    part = urlsplit(url)
    assert part.scheme == 'https' and part.netloc == 'kv-tyumen.ru'
    assert not part.query and not part.fragment and url == url.lower()
    assert part.path == '/' or not part.path.endswith('/')
    assert freq in ['weekly', 'monthly', 'yearly'] and 0 <= float(priority) <= 1
    urls.append(url)
assert len(urls) == len(set(urls)) and ORIGIN + '/' in urls
assert ORIGIN + '/404' not in urls


def check_page(url):
    status, headers, body = fetch(url)
    head = Head(body)
    assert status == 200 and 'text/html' in headers['content-type'], (url, status)
    assert head.canonicals == [url], (url, head.canonicals)
    assert not any('noindex' in x for x in head.robots + [headers.get('x-robots-tag', '')]), url


with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    list(pool.map(check_page, urls))

redirects = 0
for scheme in ['http', 'https']:
    for host in ['kv-tyumen.ru', 'www.kv-tyumen.ru']:
        for path in ['/', '/portfolio', '/Portfolio/', '//PORTFOLIO///', '/PORTFOLIO//PADERINO/']:
            query = '?utm_source=YaNdEx&next=https%3A%2F%2FExample.COM%2FA&raw=https://Example.COM/A'
            url = f'{scheme}://{host}{path}{query}'
            clean = re.sub('/+', '/', path).lower().rstrip('/') or '/'
            expected = ORIGIN + clean + query
            status, headers, body = fetch(url)
            if url == expected:
                assert status == 200 and 'location' not in headers, (url, status, headers)
                assert Head(body).canonicals == [ORIGIN + clean]
            else:
                assert status == 301 and headers.get('location') == expected, (url, status, headers)
                # Every target is one of the clean 200 routes already checked above.
                assert ORIGIN + clean in urls
                redirects += 1

for scheme in ['http', 'https']:
    for host in ['kv-tyumen.ru', 'www.kv-tyumen.ru']:
        url = f'{scheme}://{host}/sitemap-store.xml'
        status, headers, _ = fetch(url)
        assert status == 301 and headers.get('location') == ORIGIN + '/sitemap.xml', (url, status, headers)
        redirects += 1

# Static file names and query values retain their original case, with one origin redirect.
static_path = '/themes/kv-vopros/assets/images/Vector.svg?Version=MiXeD&next=https://Example.COM/A'
status, _, static_body = fetch(ORIGIN + static_path)
assert status == 200 and static_body
for mirror in ['http://kv-tyumen.ru', 'http://www.kv-tyumen.ru', 'https://www.kv-tyumen.ru']:
    status, headers, _ = fetch(mirror + static_path)
    assert status == 301 and headers.get('location') == ORIGIN + static_path, (mirror, status, headers)
    redirects += 1

status, _, body = fetch(ORIGIN + '/robots.txt')
assert status == 200
robots = body.decode()
assert robots.count('Sitemap:') == 1 and 'Sitemap: ' + ORIGIN + '/sitemap.xml' in robots
assert 'sitemap-store' not in robots and not re.search(r'^Host:', robots, re.M)
yandex, others = robots.split('User-agent: *')
assert 'User-agent: Yandex' in yandex and 'Clean-param:' in yandex and 'Clean-param:' not in others
for block in [yandex, others]:
    for rule in ['/backend', '/admin', '/vendor/', '/updates/', '/temp/', '/storage/framework/',
                 '/storage/logs/', '/storage/cms/', '/storage/temp/']:
        assert 'Disallow: ' + rule in block
for path in ['/404', '/indexing-check-page-does-not-exist']:
    status, headers, body = fetch(ORIGIN + path)
    assert status == 404 and not Head(body).canonicals, (path, status)
    assert 'noindex' in headers.get('x-robots-tag', '')

# URL normalization must not interfere with backend case or AJAX handlers.
for path, extra in [('/ADMIN/CaseSensitive', []), ('/PORTFOLIO/', ['X-Requested-With: XMLHttpRequest']),
                    ('/PORTFOLIO/', ['X-OCTOBER-REQUEST-HANDLER: onUnusedIndexingCheck'])]:
    status, headers, _ = fetch(ORIGIN + path, extra)
    assert not (status == 301 and headers.get('location') == ORIGIN + path.lower().rstrip('/')), (path, headers)
print(json.dumps({'pages_200_self_canonical': len(urls), 'single_301_checks': redirects,
                  'robots': 'passed', '404_noindex': 'passed', 'ajax_system_exclusions': 'passed'}, ensure_ascii=False))
