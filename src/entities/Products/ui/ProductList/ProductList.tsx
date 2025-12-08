import cls from './ProductList.module.scss'
import {Product, ProductFilters} from "@/services/types/Products";
import {productsService} from "@/services/products";
import ProductItem from "../ProductItem/ProductItem";

interface ProductListProps {
    searchParams: ProductFilters ;
}

export default async function ProductList({ searchParams }: ProductListProps) {
    const filters: ProductFilters = {
        q: searchParams.q || '',
        page: searchParams?.page || 1,
        limit: searchParams?.limit || 10,
    };

    const products = await productsService.getProducts(filters);


    return (
        <div className={cls.productList}>
            <div className={cls.total}>Products ({products.total})</div>
            {products.products?.map((product: Product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}
