import React, { useState } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';
//в провайдере мы можем создавать состояния и функции, которые управляют состоянием
const FavoriteProvider = ({ children }) => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    const addToFavorite = (prod) => {
        setFavoriteProducts([...favoriteProducts, prod])

    };


    const removeFromFavorite = (prod) => {
        setFavoriteProducts(favoriteProducts.filter((favProd) => favProd.id !== prod.id));
    };


    const toggleFavorite = (prod) => {
        const findProd = favoriteProducts.find(favProd => favProd.id === prod.id);
        if (findProd) {
            removeFromFavorite(prod);
        }
        else {
            addToFavorite(prod);
        }
    }

    //provider - через value расшариваем обьект, в котором будет faboriteProds
    return (
        <FavoriteContext.Provider value={{ favoriteProducts, toggleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteProvider;
