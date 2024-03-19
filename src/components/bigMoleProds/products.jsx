import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        getProducts();

    }, []);

    const getProducts = async () => {
        const response = await axios('https://fakestoreapi.com/products');
        console.log(response);


        const res = new Set(response.data.map(prod => prod.category));
        setProducts([...res]);
    }
    // { users.map((user => <div key={user.id}><NavLink to={`/users/${user.id}`}>{user.name}</NavLink></div>)) }
    //     </div >

    return (
        <>
            <div>
                <h2>Products</h2>
                {products.map((prod => <div key={prod}><NavLink to={`/shop/${prod}`}>{prod}</NavLink></div>))}

            </div>
            <Outlet />
        </>
    );
}

export default Products;
