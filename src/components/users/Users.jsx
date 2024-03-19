import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Users = () => {

    //когда хотим получать данные с апи , то будем ето делать при загрузке етого компонента, поэтому используем юзэффект
    //и второй параметр [], что обозначает - единожды при загрузке. 

    //функция должна быть обязательно асинхронной, но так как юзеффект нельзя сделать ассинхронным , то : 
    const [users, setUsers] = useState([]);


    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
    }

    return (
        <><div>
            <h2>Users</h2>
            {users.map((user => <div key={user.id}><NavLink to={`/users/${user.id}`}>{user.name}</NavLink></div>))}
        </div>
            {/*аутлет выводит нам то , что находится в дочернем маршруте */}
            <Outlet/>
        </>
    );
}

export default Users;

// //запрос js - делаем запрос, fetch возвращает промис,после того как  получаем ответ
// //выполняем then , потом етот ответ читаем в json
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// //могли создат ьфункцию , сделав ее асинхронной и использовать фетвч вот так :

// const f = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const json = await response.json();
//     console.log(json);
// }
// f();


// //но чаще всего используют библиотеку аксиос. Нам не нужно указівать , что мі считіваем json,
// //потмоу что он автоматические его парсит , и ответ мы сразу получаем в свойстве дата этого обьекта.
//axios по умолчани отправляет get запрос

// const foo = async () => {
//     const response = await axios("https://jsonplaceholder.typicode.com/users");
//     console.log(response.data);
// }


