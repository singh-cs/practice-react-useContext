import  { useContext } from "react";
import { ThemeContext, ToggleThemeContext } from "./ThemeContext";
// import  ThemeProvider  from "./ThemeContext"
// import { useTheme, useThemeToggle } from "./ThemeContext";



export default function ChildComponent(){
    // const darkTheme = useTheme();
    // const toggleTheme = useThemeToggle()
    const darkTheme = useContext(ThemeContext);
    const toggleTheme = useContext(ToggleThemeContext)
    const themeStyles = {
        backgroundColor: !darkTheme? '#333' : '#CCC',
        color: !darkTheme ? '#CCC' : '#333',
        userSelect : 'none',
        padding: '2rem',
        cursor: 'pointer'
    }
    return(
        <>
            <div style={themeStyles} onClick={toggleTheme}>
                <div>hi, my name is Robin</div>
                <p>Theme is {!darkTheme ? 'dark' : 'light'}</p>
            </div>
        </>
    )
}