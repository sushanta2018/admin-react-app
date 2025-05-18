import { Product } from "../types/product";

const API_BASE_URL = 'https://fakestoreapi.com';

const getProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    const updatedProductData = data.map((product: Product) => {
        const discount = Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 41) + 10;
        // const storedDiscounts = JSON.parse(localStorage.getItem('productDiscounts') || '{}');

        // let discount = storedDiscounts[product.id];

        // if (discount === undefined) {
        //     discount = Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 41) + 10;
        //     storedDiscounts[product.id] = discount;
        //     localStorage.setItem('productDiscounts', JSON.stringify(storedDiscounts));
        // }
        return {
            ...product,
            quantity: 1,
            discount,
            discountedPrice: discount > 0
                ? parseFloat((product.price * (1 - discount / 100)).toFixed(2))
                : null,
        };
    });
    return updatedProductData;
};

const getProduct = async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return response.json();
};

export { 
    getProducts,
    getProduct
};