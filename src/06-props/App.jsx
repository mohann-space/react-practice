function User({name, age}){
    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}

function App(){
    return <User name="Mohan" age={21}/>; 
}

export default App;