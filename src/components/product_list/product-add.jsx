import React, { useState } from 'react';

const ProductAdd = ({ addProd }) => {

    const [title, setTitle] = useState('');     //State input

    const [titleError, setTitleError] = useState(null); // состояние для ошибки

    const clickHandler = () => {

        if (title.trim().length === 0) {
            setTitleError('Поле пусто');
            return;
        }
        addProd(title);
        setTitle('');
        setTitleError(null);
    }




    return (
        <div className='prodAdd'>
            <input type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {if(e.code === "Enter") clickHandler()}}
            />
            <button onClick={clickHandler}>Add</button>
            {titleError && <div>{titleError}</div>}
        </div>
    );
}

export default ProductAdd;
