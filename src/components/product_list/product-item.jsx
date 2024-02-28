import React from 'react';

const ProductItem = (task) => {
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





        <div className="task-item">
            {/* <span>category: {task.category}</span>
            <span>{task.title}</span>
            <span>price: {task.price}</span>
            <img src={task.image} style={{ width: '100px' }} /> */}
            <input type='checkbox' defaultChecked={task.done} />
            <span>{task.title}</span>
            <button onClick={() => task.removeProd(task.id)}>delete</button>
            <button onClick={() => setModalWindow(task)}>description</button>
        </div>
    );
};

export default ProductItem;
