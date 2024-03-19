import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    //выводим не <App/> а поутерПровайдер , а в нем мы указываем маршруты , какие страницы у анс будут описыватся в
    <RouterProvider router={router}></RouterProvider>


);


reportWebVitals();
