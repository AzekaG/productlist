import logo from './logo.svg';
import './App.css';
import ProductList from './components/product_list/product-list';
import { useContext, useState } from 'react';
import { ThemeContext } from './components/context/ThemeContext';
import Header from './components/product_list/Header';
import ThemeProvider from './components/providers/themeProvider';
import './pyramids/piramids.css'
import Piramids from './pyramids/piramids';
import FavoriteProvider from './components/providers/favoriteProvider';
import { Outlet } from 'react-router-dom';


function App() {




  return (

    <ThemeProvider>
      <Header />
      {/**аутлет - используем , чтобы вывести дочерние елементы ( в данном случае апп) */}
      <Outlet />
    </ThemeProvider>


  );
}

export default App;
