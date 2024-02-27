import React from 'react';

const ProductItem = (task) => {

    return (
        <div className="task-item">
            <span>category: {task.category}</span>
            <span>{task.title}</span>
            <span>price: {task.price}</span>
            <img src={task.image} style={{ width: '100px' }} />
            <button>delete</button>
            <hr />
        </div>
    );
};

export default ProductItem;
