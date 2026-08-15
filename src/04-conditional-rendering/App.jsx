function App(){
    const isLoggedIn = true;

    return(
        <div>
            <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>
        </div>
    );
}

export default App;