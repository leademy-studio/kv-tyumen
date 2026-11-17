<?php namespace App\Classes;

/** One connected graph for the homepage and every published repair landing page. */
class RepairSchema
{
    public static function forPage($page, ?string $canonical, $mainPage, $services, $entry, $pricing): ?string
    {
        if (!$canonical || !in_array($page->url, ['/', '/repairs', '/repairs/:slug'], true)) {
            return null;
        }
        $home = $page->url === '/';
        $child = $page->url === '/repairs/:slug';
        $source = $home ? $mainPage : ($child ? $entry : $services);
        if (!$source) {
            return null;
        }
        $prefix = (!$home && !$child) ? 'cr_' : '';
        $title = $home ? $source->meta_title : ($child
            ? ($source->meta_title ?: $source->title)
            : ($source->cr_meta_title ?: 'Пакетный ремонт — Квартирный вопрос, Тюмень'));
        $heading = $home ? $source->hero_subtitle : ($child ? $source->title : ($source->cr_title ?: 'Пакетный ремонт'));
        $name = self::value($source, $prefix . 'service_name') ?: $heading;
        $breadcrumbs = [];
        if (!$home) {
            $breadcrumbs[] = ['name' => 'Главная', 'url' => SiteUrl::canonical('/')];
            if ($child) {
                $breadcrumbs[] = ['name' => 'Пакетный ремонт', 'url' => SiteUrl::canonical('/repairs')];
            }
            $breadcrumbs[] = ['name' => $page->title, 'url' => $canonical];
        }
        $faq = $home ? (self::text($source->faq_title) !== '' ? $source->faq_items : []) : $source->cr_faq;
        return self::encode(self::build([
            'url' => $canonical,
            'title' => $title,
            'service_name' => $name,
            'service_type' => self::value($source, $prefix . 'service_type') ?: $name,
            'service_description' => self::value($source, $prefix . 'service_description'),
            'home' => $home,
            'breadcrumbs' => $breadcrumbs,
            'faq' => $faq,
        ], $pricing, config('repair_schema.company')));
    }

    public static function build(array $page, $pricing, array $company): array
    {
        $url = $page['url'];
        $organizationId = rtrim($company['url'], '/') . '/#organization';
        $serviceId = $url . (!empty($page['home']) ? '#repair-service' : '#service');
        $organization = ['@type' => 'GeneralContractor', '@id' => $organizationId];
        foreach (['name', 'url', 'logo', 'telephone', 'email'] as $field) {
            if (self::text($company[$field] ?? '') !== '') {
                $organization[$field] = self::text($company[$field]);
            }
        }
        $address = array_filter($company['address'] ?? [], fn ($value) => self::text($value) !== '');
        if ($address) {
            $organization['address'] = ['@type' => 'PostalAddress'] + $address;
        }
        $area = self::text($company['area_served'] ?? '');
        if ($area !== '') {
            $organization['areaServed'] = ['@type' => 'City', 'name' => $area];
        }
        $sameAs = array_values(array_filter($company['same_as'] ?? [], fn ($url) => filter_var($url, FILTER_VALIDATE_URL)));
        if ($sameAs) {
            $organization['sameAs'] = $sameAs;
        }
        $webpage = [
            '@type' => 'WebPage', '@id' => $url . '#webpage', 'url' => $url,
            'name' => self::text($page['title']), 'inLanguage' => 'ru-RU',
            'publisher' => ['@id' => $organizationId],
        ];
        $serviceName = self::text($page['service_name'] ?? '');
        $service = null;
        if ($serviceName !== '') {
            $webpage['mainEntity'] = ['@id' => $serviceId];
            $service = [
                '@type' => 'Service', '@id' => $serviceId, 'name' => $serviceName,
                'url' => $url, 'provider' => ['@id' => $organizationId],
            ];
            foreach (['service_type' => 'serviceType', 'service_description' => 'description'] as $from => $to) {
                if (self::text($page[$from] ?? '') !== '') {
                    $service[$to] = self::text($page[$from]);
                }
            }
            if ($area !== '') {
                $service['areaServed'] = ['@type' => 'City', 'name' => $area];
            }
            $offers = [];
            if (self::text(self::value($pricing, 'section_title')) !== '') {
                foreach (self::value($pricing, 'plans', []) ?: [] as $plan) {
                    $name = self::text(self::value($plan, 'title'));
                    $price = self::text(self::value($plan, 'price'));
                    if ($name === '' || $price === '') {
                        continue;
                    }
                    $offer = [
                        '@type' => 'Offer', 'name' => $name, 'url' => $url . '#pricing',
                        'itemOffered' => ['@type' => 'Service', 'name' => 'Ремонт квартиры — ' . $name],
                        'description' => 'Стоимость за квадратный метр по тарифу; итоговая смета рассчитывается для конкретной квартиры.',
                    ];
                    $amount = self::price($price);
                    if ($amount !== null) {
                        $offer['priceSpecification'] = [
                            '@type' => 'UnitPriceSpecification', 'price' => $amount,
                            'priceCurrency' => 'RUB', 'unitCode' => 'MTK', 'unitText' => 'м²',
                        ];
                    }
                    $offers[] = $offer;
                }
            }
            if ($offers) {
                $service['hasOfferCatalog'] = [
                    '@type' => 'OfferCatalog', 'name' => self::text(self::value($pricing, 'section_title')),
                    'itemListElement' => $offers,
                ];
            }
        }
        $breadcrumbs = [];
        foreach ($page['breadcrumbs'] ?? [] as $item) {
            if (self::text($item['name'] ?? '') !== '' && !empty($item['url'])) {
                $breadcrumbs[] = [
                    '@type' => 'ListItem', 'position' => count($breadcrumbs) + 1,
                    'name' => self::text($item['name']), 'item' => $item['url'],
                ];
            }
        }
        if ($breadcrumbs) {
            $webpage['breadcrumb'] = ['@id' => $url . '#breadcrumb'];
        }
        $graph = [$organization, $webpage];
        if ($service) {
            $graph[] = $service;
        }
        if ($breadcrumbs) {
            $graph[] = ['@type' => 'BreadcrumbList', '@id' => $url . '#breadcrumb', 'itemListElement' => $breadcrumbs];
        }
        $questions = [];
        foreach ($page['faq'] ?? [] as $item) {
            $question = self::text(self::value($item, 'question'));
            $answer = self::text(self::value($item, 'answer'));
            if ($question !== '' && $answer !== '') {
                $questions[] = ['@type' => 'Question', 'name' => $question,
                    'acceptedAnswer' => ['@type' => 'Answer', 'text' => $answer]];
            }
        }
        if ($questions) {
            $graph[] = ['@type' => 'FAQPage', '@id' => $url . '#faq',
                'isPartOf' => ['@id' => $url . '#webpage'], 'mainEntity' => $questions];
        }
        return ['@context' => 'https://schema.org', '@graph' => $graph];
    }

    public static function encode(array $graph): string
    {
        return json_encode($graph, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES |
            JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_THROW_ON_ERROR);
    }

    /** Never turn a range, "from" price or an arbitrary number in text into an exact price. */
    public static function price(string $value): int|float|null
    {
        $value = preg_replace('/[\s\x{00a0}\x{202f}]+/u', '', $value);
        if (!preg_match('~^(\d+(?:[.,]\d{1,2})?)(?:(?:₽|руб\.?|RUB)(?:/(?:м²|м2|м\^2))?)?$~iu', $value, $match)) {
            return null;
        }
        $price = (float) str_replace(',', '.', $match[1]);
        return $price > 0 ? ($price == (int) $price ? (int) $price : $price) : null;
    }

    private static function value($source, string $key, $default = '')
    {
        return is_array($source) ? ($source[$key] ?? $default) : ($source?->$key ?? $default);
    }

    private static function text($value): string
    {
        // These CMS fields are plain text and are escaped by the visible Twig blocks.
        return trim((string) $value);
    }
}
