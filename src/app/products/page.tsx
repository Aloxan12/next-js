import {ProductList} from "@/entities/Products";
import {PageParams} from "@/shared/types/PageParams";
import { Metadata } from "next";
import {ProductFilters} from "@/services/types/Products";
import {productsService} from "@/services/products";

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
    const resolvedParams: ProductFilters = await searchParams;

    const filters: ProductFilters = {
        q: resolvedParams.q || '',
        page: resolvedParams?.page || 1,
        limit: resolvedParams?.limit || 10,
    };

    const products = await productsService.getProducts(filters);

    return (
    <div>
        <ProductList initProducts={products} />
    </div>
  );
}
