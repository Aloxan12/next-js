import {Product} from "@/services/types/Products";
import cls from './ProductItem.module.scss'

interface ProductItemProps {
    product: Product;
}

export default function ProductItem({product}: ProductItemProps) {

    return (
        <div className={cls.productItem}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>Категория: <b>{product.category}</b></p>
            <p>Описание: {product.description}</p>
        </div>
    );
}