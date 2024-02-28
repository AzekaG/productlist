import React, { useState } from 'react';
import "./product-list.css"
import ProductAdd from './product-add';
import ProductFilter from './product-filter';
import ProductItem from './product-item';
import products from './productsStartData';
import { nanoid } from 'nanoid';
import ModalWindow from './modalWindow';



const ProductList = () => {

    let someVar = "ProductList";


    const [prod, setProds] = useState(products); //функции по изменению состояния должны прописываться там, где есть состояние

    const addProd = (title) => {
        setProds([...prod, {
            id: nanoid,
            title,
            done: false
        }]);
    }

    const removeProd = (id) => {
        setProds(products.filter(product => product.id !== id));
    }


    const [modalActive, setModalActive] = useState(false);  // модальное окно
    const [children, setModalChildren] = useState(null);

    return (


        <div className='container'>
            <button className='open-btn' onClick={() => setModalActive(true)}>Open Modal Window</button>


            <h1 style={{ color: 'dodgerblue' }}>{someVar}</h1>
            <div className='product-list'>
                <ProductAdd addProd={addProd} />
                <ProductFilter />
                <div>
                    {
                        prod.map((task, index) => (
                            <><ProductItem {...task} key={task.id} removeProd={removeProd} setModalChildren={setModalChildren} setModalActive={setModalActive} /><hr /></>))
                    }

                </div>
            </div>
            <ModalWindow active={modalActive} setActive={setModalActive} children={setModalChildren}>{children}</ModalWindow>
        </div >


    );
}

export default ProductList;





