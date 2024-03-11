import React, { useState } from 'react';




const sortParametrs = ["Sort by Name", "Sort by Price"];





const ProductsSort = ({ setSort }) => {

    return (
        <div>
            <select onChange={(e) => { setSort(e.target.value); console.log(e.target.value); }} className='category__select' name="" id="">
                <option value="" hidden />
                <option value="cheap">Сначала дешевле</option>
                <option value="expencive">Сначала дороже</option>
                <option value="nameUp">По имени вверх</option>
                <option value="nameDown">По имени вниз</option>
            </select>

        </div>
    );
}

export default ProductsSort;
