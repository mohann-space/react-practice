import { useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <h1>My App</h1>

            {isLoggedIn ? (
                <div>
                    <h2>Welcome, Mohan!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Please Login</h2>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}

export default App;