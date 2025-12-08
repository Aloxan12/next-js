export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface ProductFilters {
    q?: string;
    page?: number;
    limit?: number;
}