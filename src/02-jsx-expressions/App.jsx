function App(){
    const name = "Mohan";
    const age = 21;

    return(
        <div>
            <h1>Hello {name}</h1>
            <p>My age is {age}</p>
            <p>Next year I will be {age + 1}</p>
        </div>
    );
}

export default App;