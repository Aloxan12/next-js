'use client'
import cls from './ProductList.module.scss'
import {Product, ProductsResponse} from "@/services/types/Products";
import ProductItem from "../ProductItem/ProductItem";
import {useCallback, useEffect, useRef, useState} from "react";
import {productsService} from "@/services/products";

interface ProductListProps {
    initProducts: ProductsResponse
}

export const ProductList = ({ initProducts }: ProductListProps) =>{
    const [productsData, setProductsData] = useState(initProducts);
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);

    const hasMore = productsData.products.length < productsData.total;


    const callback = useCallback((entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if(entry.isIntersecting && hasMore && !isLoading){
            setPage(prev => prev + 1);
            setLoading(true)
        }
    }, [hasMore, isLoading]);

    useEffect(() => {
        const observer = new IntersectionObserver(callback, {
            root: null,           // ✅ Viewport (по умолчанию)
            rootMargin: '0px',    // ✅ Маржа (за пределами)
            threshold: 0.1,       // ✅ 10% видимой области
        });

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => observer.disconnect();
    }, [callback]);


    useEffect(() => {
        if(page > 1){
            productsService.getProducts({limit: 10, page: page}).then((data)=>{
                setProductsData(prev =>({...prev, products: [...prev.products, ...data.products]}));
                setLoading(false)
            })
        }
    },[page])

    return (
        <div className={cls.productList}>
            <div className={cls.total}>Products ({productsData.total})</div>
            {productsData.products?.map((product: Product) => (
                <ProductItem key={product.id} product={product} />
            ))}
            <div>{isLoading ? 'loading...' : null}</div>
            <div ref={targetRef} />
        </div>
    );
}
