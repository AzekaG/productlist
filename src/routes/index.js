import { createBrowserRouter } from "react-router-dom";
import ProductList from "../components/product_list/product-list";
import App from "../App";
import PagenotFound from "../components/pageNotFound/pagenotFound";
import FavoriteProvider from "../components/providers/favoriteProvider";
import Users from '../components/users/Users';
import User from "../components/users/User";
import Products from "../components/bigMoleProds/products";
import Product from "../components/bigMoleProds/product";



//маршрутизация
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PagenotFound />,
        children: [
            {
                path: '/todo',
                element: <FavoriteProvider>
                    <ProductList />
                </FavoriteProvider>
            },
            {
                path: '/shop',
                element: <Products />,
                children: [
                    {
                        path: ':id',
                        element: <Product />
                    }
                ]
            },
            {
                path: '/users',
                element: <Users />,
                children: [
                    {
                        path: ':id',   /*параметры маршрута */
                        element: <User />
                    }
                ]
            },

        ]
    }

])