import {ProductDetail} from "@/entities/Products";
import {PageParams} from "@/shared/types/PageParams";
import { Metadata } from "next";
import {productsService} from "@/services/products";

export async function generateMetadata({ searchParams }: PageParams): Promise<Metadata> {
    const params = await searchParams;

    return {
        title: `Product detail`,

        alternates: {
            canonical: `/products?id=${params.id}`,
        },
    };
}

export default async function ProductDetailPage({ params }: PageParams) {
    const resolvedParams = await params;
    const id: string = resolvedParams.id

    const products = await productsService.getProductDetail({id});

    return (
    <ProductDetail product={products} />
  );
}
