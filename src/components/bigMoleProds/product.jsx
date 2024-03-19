import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PagenotFound from '../pageNotFound/pagenotFound';

const Product = () => {

    const { id } = useParams();

    const [prod, setProd] = useState([]);

    const navigate = useNavigate();
    const [statePromise, setstatePromise] = useState('idle');

    useEffect(() => {
        getProd();
    }, [id]);


    const getProd = async () => {
        try {
            setstatePromise("pending");
            const response = await axios('https://fakestoreapi.com/products');
            const res = response.data.filter(prod => prod.category === id);
            setstatePromise("fulfilled");

            setProd(res);

        }
        catch (error) {
            setstatePromise("rejected");
        }
    }
    if (statePromise === 'pending') {
        return "Loading.."
    }
    if (statePromise === 'rejected') {
        return <PagenotFound />
    }
    return (
        <div>
            {prod.map((prod) =>
                <div key={prod.id}>
                    <h1>{prod.title}</h1>
                    <img src={prod.image} width='50px' />
                </div>)}
        </div>
    );
}

export default Product;
