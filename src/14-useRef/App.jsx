import { useRef } from "react";

function App() {
    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.focus();
    }

    return(
        <div>
            <h1>useRef Example</h1>

            <input
             ref={inputRef}
             type="text"
             placeholder="Enter Something"
            />

            <button onClick={handleFocus}>
                Focus Input
            </button>
        </div>
    );
}

export default App;