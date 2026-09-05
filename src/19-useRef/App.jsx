import { useRef } from "react";

function App() {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <>
          <input ref={inputRef} placeholder="Enter name" />

          <button onClick={handleFocus}>
            Focus input
          </button>
        </>
    );
}

export default App;