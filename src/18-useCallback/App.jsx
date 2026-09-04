import { useState, useCallback } from "react";
import Child from "./child";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button Clicked");
    }, []);

    return (
        <>
          <h2>{count}</h2>

          <button onClick={() => setCount(count + 1)}>
            Increase
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrease
          </button>

          <Child handleClick={handleClick} />
        </>
    );
}

export default App;