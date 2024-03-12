import React, { useEffect, useReducer, useState, useContext } from 'react';
import "./product-list.css"
import ProductAdd from './product-add';
import ProductFilter from './product-filter';
import ProductItem from './product-item';
import products from './productsStartData';
import { nanoid } from 'nanoid';
import ModalWindow from './modalWindow';
import { ProductReducer } from './product-reducer';
import ProductsSort from './productsSort'
import { ThemeContext } from '../../components/context/ThemeContext';
import classNames from 'classnames';
import { FavoriteContext } from '../context/FavoriteContext';
import ProductFavorite from './product-favorite';



//закончили на том, что сделали сердечки , они реагируют на клик. Осталось создавать новый массив и загружать в локал сторэдж и выгружать по клику.



const ProductList = () => {

    const [prod, dispatch] = useReducer(ProductReducer, products); //диспатч вызывает нам редьюсер ( указываем в первом параметре, во втором значение дефолтное)
    const [sort, setSort] = useState('');   //сортировка
    const [filter, setFilterProds] = useState('All');   //фильтрация
    const [modalActive, setModalActive] = useState(false);  // модальное окно
    const [children, setModalChildren] = useState(null); //модальное окно



    const { favoriteProducts } = useContext(FavoriteContext);




    const { theme, toggleTheme } = useContext(ThemeContext);   //тема
    let someVar = "ProductList";
    const filterMap = {
        "All": () => true,
        "Done": (task) => task.done,
        "To Do": (task) => !task.done,
    }





    useEffect(() => {
        dispatch({
            action: 'restore',
            payload: JSON.parse(localStorage.getItem("products")) || prod
        })
    }, []);


    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(prod))
    }, [prod])




    const addProd = (title) => {
        dispatch({
            type: 'create',
            payload: title
        });
    }
    const removeProd = (id) => {
        dispatch({
            type: 'remove',
            payload: id,
        });
    }

    const toggleDone = (id) => {
        dispatch({
            type: 'changeDone',
            payload: id
        });

    }
    const updateProd = (id, title) => {
        dispatch({
            type: 'update',
            payload: { id, title }
        });

    }
    const showFavorite = () => {

        console.log("showFavorite");
        localStorage.setItem("productsALL", JSON.stringify(prod));

        dispatch({
            type: 'restore',
            payload: favoriteProducts
        })

    }
    const showAll = () => {
        console.log("showAll");
        const prods = JSON.parse(localStorage.getItem("productsALL"));
        dispatch({
            type: 'restore',
            payload: prods
        })

    }
    const sortFunction = {
        cheap: (a, b) => a.price - b.price,
        expencive: (a, b) => b.price - a.price,
        nameUp: (a, b) => a.title > b.title ? 1 : -1,
        nameDown: (a, b) => a.title > b.title ? -1 : 1,

    }



    return (
        <div className={classNames(`theme-${theme}`, 'container')}>

            <h1 style={{ color: 'dodgerblue' }}>{someVar}</h1>
            <div className='product-list'>
                <ProductAdd addProd={addProd} />
                <ProductFavorite favorites={favoriteProducts} showFavorite={showFavorite} showAll={showAll} />
                <ProductFilter setFilterProds={setFilterProds} filterMap={filterMap} activeFilter={filter} />
                <div>
                    <ProductsSort setSort={setSort} />
                    {
                        prod.sort(sortFunction[sort])
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





