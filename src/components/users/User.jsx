import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PagenotFound from '../pageNotFound/pagenotFound';

const User = () => {
    //возвращает параметры маршрута ( в адресной строке после ? )
    // const params = useParams();
    // console.log(params);

    const { id } = useParams();  //достаем айди из параметров в адресной строке

    const [user, setUser] = useState({});   //делаем  состояние обьекта , дефолт - пустой обьект

    //изменяем состояние юзера при именении айди , которое достаем из адресной строки 
    useEffect(() => {
        getUser();
    }, [id]);

    const navigate = useNavigate();
    const [statePromise, setstatePromise] = useState('idle'); //idle - первоначальное состояние, еще даже не начало выполняться состояние



    const getUser = async () => {
        try {
            setstatePromise("pending");     //состояние ответа  - ожидание
            const response = await axios("https://jsonplaceholder.typicode.com/users/" + id);
            setstatePromise("fulfilled");  // состояние ответа- все загружено
            setUser(response.data);
        }
        catch (error) {
            setstatePromise("rejected"); // состояние ошибки 
        }
    }


    if (statePromise === 'pending') {
        return "Loading.."
    }
    if (statePromise === 'rejected') {
        return <PagenotFound />
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <div>{user.email}</div>
            <div>{user.company?.name}</div>
        </div>
    );
}

export default User;
