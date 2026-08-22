import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${name}`);
    };

    return (
        <div>
            <h1>React form</h1>

            <form onSubmit={handleSubmit}>
              <input 
                 type="text"
                 value={name}
                 placeholder="Enter your name"
                 onChange={(e) => setName(e.target.value)}
              />

              <br />

              <input 
                 type="email"
                 value={email}
                 placeholder="Enter your email"
                 onChange={(e) => setEmail(e.target.value)}
              />

              <br /><br />

              <button type="submit">Submit</button>
            </form>

            <br />

            <p>Your name: {name}</p>
            <p>Your email: {email}</p>
        </div>
    );
}

export default App;