import {ProductList} from "@/entities/Products";
import {PageParams} from "@/shared/types/PageParams";
import { Metadata } from "next";

export async function generateMetadata({ searchParams }: PageParams): Promise<Metadata> {
    const params = await searchParams;
    const page = Number(params.page) || 1;

    return {
        title: `Products${page > 1 ? ` - Page ${page}` : ''}`,

        alternates: {
            canonical: `/products?page=${page}`,
        },
    };
}

export default async function Products({ searchParams }: PageParams) {
    const resolvedParams = await searchParams;
    return (
    <div>
        <ProductList searchParams={resolvedParams} />
    </div>
  );
}
