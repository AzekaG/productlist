import React , {useState} from 'react';
import { ThemeContext } from '../context/ThemeContext';
///все дочерние компоненты попадают в поле пропс в поле чилдрен
const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState("light");
    //вместо того , чтобы передавать setTheme можно передать функцию , которая при отработке будет переключать состояние 
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
   
    
    return (
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
