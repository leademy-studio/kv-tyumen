<?php namespace App\Classes;

class RepairPage
{
    /** Shared visual content may inherit from /repairs; SEO and FAQ always belong to the page. */
    public static function content($entry, $services): array
    {
        $content = [
            'cr_title' => $entry->title,
            'cr_meta_title' => $entry->meta_title ?: $entry->title,
            'cr_meta_description' => $entry->meta_description ?: '',
        ];
        $shared = [
            'cr_background_image', 'cr_section2_title', 'cr_section2_subtitle',
            'cr_section2_body', 'cr_steps_title', 'cr_steps_background', 'cr_steps',
            'cr_steps_cta_label', 'cr_portfolio_title', 'cr_cta_title', 'cr_cta_subtitle',
        ];
        for ($i = 1; $i <= 5; $i++) {
            $shared[] = "cr_card{$i}_image";
            $shared[] = "cr_card{$i}_caption";
        }
        foreach ($shared as $field) {
            $value = $entry->$field;
            $empty = $value instanceof \Illuminate\Support\Collection
                ? $value->isEmpty() : ($value === null || $value === '' || $value === []);
            $content[$field] = $empty ? $services?->$field : $value;
        }
        foreach (['cr_seo_title', 'cr_seo_blocks', 'cr_faq_title', 'cr_faq'] as $field) {
            $content[$field] = $entry->$field;
        }
        return $content;
    }

    public static function portfolioData(): array
    {
        $section = 'Site\\CaseStudy';
        // Include drafts so we can apply our own publish filters and avoid Tailor scoping them out
        $cases = \Tailor\Models\EntryRecord::inSection($section)->withDrafts()
            ->where('is_enabled', 1)
            ->where(function ($q) {
                $q->whereNull('published_at')->orWhere('published_at', '<=', now());
            })
            ->where(function ($q) {
                $q->whereNull('expired_at')->orWhere('expired_at', '>=', now());
            })
            ->orderByRaw('sort_order is null')
            ->orderBy('sort_order', 'asc')
            ->orderBy('published_at', 'desc')
            ->get()
            ->unique('slug')
            ->values();

        // The repairs page has its own Figma selection; keep the CMS portfolio order intact.
        $featured = [
            ['title' => 'Муравленко', 'image' => 'muravlenko', 'slugs' => ['muravlenko', 'myravlenko']],
            ['title' => 'Березяки', 'image' => 'berezyaki', 'slugs' => ['berezyaki', 'berezjaki']],
            ['title' => 'Перевалово', 'image' => 'perevalovo', 'slugs' => ['perevalovo']],
            ['title' => 'Падерина', 'image' => 'paderina', 'slugs' => ['paderino', 'paderina']],
            ['title' => 'Айвазовский', 'image' => 'ayvazovskiy', 'slugs' => ['ajvazovskij', 'ayvazovskiy']],
            ['title' => 'Суходолье', 'image' => 'suhodolye', 'slugs' => ['suhodole', 'suhodolye']],
        ];
        $cards = [];
        $featuredIds = [];
        foreach ($featured as $item) {
            $entry = $cases->first(function ($case) use ($item) {
                return in_array($case->slug, $item['slugs'], true);
            });
            $cards[] = [
                'title' => $item['title'],
                'slug' => $entry ? $entry->slug : null,
                'designImage' => $item['image'],
            ];
            if ($entry) {
                $featuredIds[] = $entry->id;
            }
        }
        foreach ($cases as $entry) {
            if (!in_array($entry->id, $featuredIds, true)) {
                $cards[] = ['title' => $entry->title, 'slug' => $entry->slug, 'main_image' => $entry->main_image];
            }
        }
        return ['cases' => $cases, 'portfolioCards' => $cards];
    }
}
