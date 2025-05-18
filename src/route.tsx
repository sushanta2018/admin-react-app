import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Product = lazy(() => import("./pages/product/ProductList"));
const ProductDetails = lazy(() => import("./pages/product/ProductDetails"));
const Login = lazy(() => import("./pages/auth/Login"));
const Registration = lazy(() => import("./pages/auth/Registration"));

const routes: RouteObject[] = [
    {
        path: "/product",
        element: <Product />,
    },
    {
        path: "/product/:id",
        element: <ProductDetails />
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Registration />,
    },
    {
        path: "*",
        element: <Product />,
    },
    
];

export default routes;