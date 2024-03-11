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


function App() {




  return (

    <Piramids>

      <ThemeProvider>
        <Header />
        <FavoriteProvider>
          <ProductList />
        </FavoriteProvider>
      </ThemeProvider>

    </Piramids >
  );
}

export default App;
