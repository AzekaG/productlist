import React, { useContext, useState, useEffect } from 'react';
import classNames from 'classname';
import Favorite from '../favorite';
import { FavoriteContext } from '../context/FavoriteContext';

const ProductItem = (task) => {

    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title)
    const { toggleFavorite } = useContext(FavoriteContext);




    const normalTemplate = <span className={classNames({ 'task-done': task.done })} onClick={() => {
        setIsEdit(true)
    }}>{task.title}</span>;






    const saveTask = (e) => {
        if (newTitle.trim().length === 0) {
            setIsEdit(false);
            setNewTitle(task.title);
            return;
        }
        if (e.code === "Enter") {
            setIsEdit(false);
            task.updateProd(task.id, newTitle);
        }
    }
    const editTemplate = <input onKeyDown={saveTask} value={newTitle} onChange={(e) => {
        setNewTitle(e.target.value);
    }} />



    const setModalWindow = (task) => {

        task.setModalActive(true)
        task.setModalChildren(
            <>
                <span>Name : {task.title}</span><br />
                <span>Cost : {task.price}</span><br />
                <span>Description : {task.description}</span><br />
                <img src={task.img ? task.img : "https://cdn-icons-png.flaticon.com/256/447/447119.png"} style={{ width: "100px" }}></img>

            </>
        )
    }




    return (
        // className = { classNames({ bubbly_button: filter === activeFilter }, 'animate')}

        <div >
            <input type='checkbox' defaultChecked={task.done} onClick={() => task.toggleDone(task.id)} />
            {isEdit ? editTemplate : normalTemplate}
            <div onClick={()=>toggleFavorite(task)}><Favorite /></div>
            <button onClick={() => task.removeProd(task.id)}>delete</button>
            <button onClick={() => setModalWindow(task)}>description</button>
        </div>
    );
};

export default ProductItem;
