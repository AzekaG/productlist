import React, { useContext } from 'react';
import { ThemeContext } from '../../components/context/ThemeContext';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`theme-${theme}`}>
            <nav></nav>
            {theme === 'light' ? <LightbulbCircleIcon onClick={toggleTheme} /> : <LightbulbIcon onClick={toggleTheme}  />}
        </header>
    );
}

export default Header;
