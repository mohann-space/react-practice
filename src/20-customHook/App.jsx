import useCounter from "./useCounter";

function App() {
    const { count, increase, decrease } = useCounter();

    return (
        <>
          <h2>Count: {count}</h2>

          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
        </>
    );
}

export default App;