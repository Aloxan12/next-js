import {Product} from "@/services/types/Products";

interface ProductItemProps {
    product: Product;
}

export default function ProductItem({product}: ProductItemProps) {

    return (
        <div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
    );
}