import React, { useEffect, useReducer, useState } from 'react';
import "./product-list.css"
import ProductAdd from './product-add';
import ProductFilter from './product-filter';
import ProductItem from './product-item';
import products from './productsStartData';
import { nanoid } from 'nanoid';
import ModalWindow from './modalWindow';
import { ProductReducer } from './product-reducer';
import ProductsSort from './productsSort'







const ProductList = () => {

    const [prods2, dispatch] = useReducer(ProductReducer, []);


    let someVar = "ProductList";
    const filterMap = {
        "All": () => true,
        "Done": (task) => task.done,
        "To Do": (task) => !task.done,
    }
    const [sort, setSort] = useState('');



    const [prod, setProds] = useState([]); //функции по изменению состояния должны прописываться там, где есть состояние
    useEffect(() => {
        setProds(JSON.parse(localStorage.getItem("products")) || products);
        dispatch({
            type: 'create'
        });
    }, []);
    const [filter, setFilterProds] = useState('All');


    const addProd = (title) => {
        setProds([...prod, {
            id: nanoid,
            title,
            done: false
        }]);
    }




    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(prod))
    }, [prod])


    const removeProd = (id) => {
        setProds(prod.filter(product => product.id !== id));
    }

    const toggleDone = (id) => {
        const newProds = prod.map((task) => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        })
        setProds(newProds);
    }

    const updateProd = (id, title) => {
        const newProds = prod.map((task) => {
            if (task.id === id) {
                return { ...task, title };
            }
            return task;
        })
        setProds(newProds);
    }


    const [modalActive, setModalActive] = useState(false);  // модальное окно
    const [children, setModalChildren] = useState(null);

    return (


        <div className='container'>

            <h1 style={{ color: 'dodgerblue' }}>{someVar}</h1>
            <div className='product-list'>
                <ProductAdd addProd={addProd} />
                <ProductFilter setFilterProds={setFilterProds} filterMap={filterMap} activeFilter={filter} />
                <div>
                    <ProductsSort setSort={setSort} />
                    {
                        prod.sort((a, b) => sort === "cheap" ? a.price - b.price : sort === "expencive" ? b.price - a.price : sort === "nameUp" && a.title > b.title ? 1 : -1)
                            .filter(filterMap[filter]).map((task) => (
                                <><ProductItem {...task} key={task.id} removeProd={removeProd} setModalChildren={setModalChildren} setModalActive={setModalActive} toggleDone={toggleDone} updateProd={updateProd} /><hr key={nanoid()} /></>))
                    }

                </div>
            </div>
            <ModalWindow active={modalActive} setActive={setModalActive} children={setModalChildren}>{children}</ModalWindow>
        </div >


    );
}

export default ProductList;





