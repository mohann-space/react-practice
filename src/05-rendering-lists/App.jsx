function App(){
    const fruits =["Apple","Banana","Mango","Orange","Grapes"];

    return(
        <div>
            <h1>My Fruits</h1>

            <ul>
                {fruits.map((fruit)=> (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;