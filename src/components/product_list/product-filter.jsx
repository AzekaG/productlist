import classNames from 'classnames';
import React, { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

const ProductFilter = ({ setFilterProds, filterMap, activeFilter }) => {

    const filterKeys = Object.keys(filterMap);

    return (
        <div>
            {
                filterKeys.map(filter =>
                    <button
                        onClick={(e) => { setFilterProds(filter); }}
                        className={classNames({ bubbly_button: filter === activeFilter }, 'animate')}
                        key={filter}
                    >{filter}</button>
                )}



        </div>
    );
}

export default ProductFilter;
