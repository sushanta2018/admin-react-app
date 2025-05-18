export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    },
    discount: number;
    discountedPrice: number;
    quantity: number;
};

export interface RegisterUser {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
    userName: string;
    password: string;
    phone: number;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    
}    