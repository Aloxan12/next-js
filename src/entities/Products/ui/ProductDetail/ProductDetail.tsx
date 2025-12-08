import {Product} from "@/services/types/Products";
import Link from "next/link";
import cls from "./ProductDetail.module.scss";

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({product}: ProductDetailProps) {

    return (
        <Link href={`/products/${product.id}`} passHref>
            <div className={cls.productItem}>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>Категория: <b>{product.category}</b></p>
                <p>Описание: {product.description}</p>
            </div>
        </Link>
    );
}