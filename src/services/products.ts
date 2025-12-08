import { apiFetch } from '@/shared/api/api';
import {Product, ProductFilters, ProductsResponse} from './types/Products';

export const productsService = {
    getProducts: async (filters: ProductFilters): Promise<ProductsResponse> => {
        const params = new URLSearchParams({
            q: filters.q || '',
            limit: (filters.limit || 10).toString(),
            skip: (((filters.page || 1) * 10) - (filters.limit || 10)).toString(),
        });

        return apiFetch(`/products/search?${params}`);
    },

    getProductDetail: async (params: {id: string}): Promise<Product> => {
        return apiFetch(`/products/${params.id}`);
    },
};