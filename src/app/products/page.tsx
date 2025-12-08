import {ProductList} from "@/entities/Products";
import {PageParams} from "@/shared/types/PageParams";
import { Metadata } from "next";

export async function generateMetadata({ searchParams }: ProductsProps): Promise<Metadata> {
    const params = await searchParams;
    const page = Number(params.page) || 1;

    return {
        title: `Products${page > 1 ? ` - Page ${page}` : ''}`,

        alternates: {
            canonical: `/products?page=${page}`,
        },
    };
}


interface ProductsProps extends PageParams{
}

export default async function Products({ searchParams }: ProductsProps) {
    const resolvedParams = await searchParams;
    return (
    <div>
        <ProductList searchParams={resolvedParams} />
    </div>
  );
}
