import React, { useState } from 'react';

const ProductFavorite = ({ favorites, showFavorite, showAll }) => {
    const [active, setActive] = useState(false);
    console.log(active);
    return (
        <div>
            <button onClick={() => {
                setActive(!active);
                active ? showAll() : showFavorite();

            }}>Избранное {'('}  {favorites.length}  {')'}</button>

        </div>
    );
}

export default ProductFavorite;
