import React, { useContext } from 'react';
import { ThemeContext } from '../../components/context/ThemeContext';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`theme-${theme}`}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/todo'>todo</NavLink>
            <NavLink to='/shop'>shop</NavLink>
            <NavLink to='/users'>Users</NavLink>
            {theme === 'light' ? <LightbulbCircleIcon onClick={toggleTheme} /> : <LightbulbIcon onClick={toggleTheme} />}
        </header>
    );
}

export default Header;
