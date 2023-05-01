import './App.css'
import ChildComponent from '../components/ChildComponent';
import {ThemeProvider} from '../components/ThemeContext';

export default function App() {
    return (
        <ThemeProvider>
            <ChildComponent/>
        </ThemeProvider>
    )
}