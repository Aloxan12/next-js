import {MetadataRoute} from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
    const baseApiUrl = process.env.NEXT_PUBLIC_API_URL!;

    // ✅ Параллельные запросы
    const [
        products,
    ] = await Promise.all([
        fetch(`${baseApiUrl}/products`, {
            next: { revalidate: 3600 }, // Кеш на час
        }).then(r => r.json()),
    ]);

    return [
        { url: baseUrl, priority: 1 },

        // ✅ Site URL!
        ...generatePages('/products', Math.ceil(products.total / 10), baseUrl),
    ];
}

function generatePages(
    path: string,
    pages: number,
    baseUrl: string  // ✅ Пропс!
): MetadataRoute.Sitemap {
    return Array.from({ length: pages }, (_, i) => ({
        url: `${baseUrl}${path}?page=${i + 1}`, // ✅ Site URL!
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));
}