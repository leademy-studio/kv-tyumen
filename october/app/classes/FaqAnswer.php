<?php namespace App\Classes;

use DOMDocument;
use DOMElement;
use DOMNode;
use DOMText;

class FaqAnswer
{
    private const TAGS = ['p', 'div', 'br', 'a', 'strong', 'b', 'em', 'i', 'u', 'ul', 'ol', 'li'];

    public static function html(?string $answer): string
    {
        $answer = trim((string) $answer);
        // Legacy textarea answers can contain literal angle brackets and newlines.
        if (!preg_match('~<(?:' . implode('|', self::TAGS) . ')(?=[\s/>])~i', $answer)) {
            return htmlspecialchars($answer, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        }

        $document = new DOMDocument();
        $document->loadHTML('<html><head><meta charset="utf-8"></head><body>' . $answer . '</body></html>',
            LIBXML_NONET | LIBXML_NOERROR | LIBXML_NOWARNING);
        return self::children($document->getElementsByTagName('body')->item(0));
    }

    public static function text(?string $answer): string
    {
        $html = str_replace(['<br>', '</p>', '</div>', '</li>'], "\n", self::html($answer));
        $text = html_entity_decode(strip_tags($html), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        return trim(str_replace("\u{00a0}", ' ', $text));
    }

    private static function children(DOMNode $parent): string
    {
        $html = '';
        foreach ($parent->childNodes as $node) {
            if ($node instanceof DOMText) {
                $html .= htmlspecialchars($node->nodeValue, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
                continue;
            }
            if (!$node instanceof DOMElement || in_array($node->tagName, ['script', 'style', 'template'], true)) {
                continue;
            }

            $tag = $node->tagName;
            $content = self::children($node);
            if ($tag === 'a') {
                $href = trim($node->getAttribute('href'));
                $scheme = parse_url($href, PHP_URL_SCHEME);
                if ($href === '' || preg_match('/[\x00-\x1F\x7F]/', $href)
                    || ($scheme !== null && !in_array(strtolower((string) $scheme), ['http', 'https', 'mailto', 'tel'], true))) {
                    $html .= $content;
                    continue;
                }
                $attrs = ' href="' . htmlspecialchars($href, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . '"';
                if ($node->getAttribute('target') === '_blank') {
                    $attrs .= ' target="_blank" rel="noopener noreferrer"';
                }
                $html .= "<a{$attrs}>{$content}</a>";
            } elseif ($tag === 'br') {
                $html .= '<br>';
            } elseif (in_array($tag, self::TAGS, true)) {
                $html .= "<{$tag}>{$content}</{$tag}>";
            } else {
                $html .= $content;
            }
        }
        return $html;
    }
}
