import {useState, createContext, useContext} from 'react'

export const ThemeContext = createContext();
export const ToggleThemeContext = createContext();

// export function useTheme(){
//     return useContext(ThemeContext)
// }

// export function useThemeToggle(){
//     return useContext(ToggleThemeContext)
// }


export function ThemeProvider({children}){
    const [darkTheme, setDarkTheme] = useState(false);
    function toggleTheme(){
        setDarkTheme(prev => !darkTheme)
    }
    return(
        <ThemeContext.Provider value={darkTheme}>
            <ToggleThemeContext.Provider value = {toggleTheme}>
                {children}
            </ToggleThemeContext.Provider>
        </ThemeContext.Provider>
    )   
}