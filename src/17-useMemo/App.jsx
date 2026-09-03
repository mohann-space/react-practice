import { useMemo, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);

    const square = useMemo(() => {
        console.log("Calculating...");
        return number * number;
        
    }, [number]);

    return (
        <div>
            <h2>Square: {square}</h2>

            <button onClick={() => setNumber(number + 1)}>
                Change Number
            </button>

            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>
    );
}

export default App;