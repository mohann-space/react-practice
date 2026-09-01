import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return(
        <div>
            <h1>Theme: {theme}</h1>

            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

export default App;