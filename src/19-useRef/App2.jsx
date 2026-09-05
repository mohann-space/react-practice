import { useState, useRef } from "react";

function App() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    renderCount.current++;

    return (
        <>
          <h2>Count: {count}</h2>

          <button onClick={() => setCount(count + 1)}>
            Increase
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrease
          </button>

          <p>Render Count: {renderCount.current}</p>
        </>
    );
}

export default App;