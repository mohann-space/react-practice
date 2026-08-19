import { useState } from "react";

function App(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Nmae :", name);
        console.log("Email :", email);
    }

    return (
        <div>
            <h1>Registration Form</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name"
                 value={name}
                 onChange={(e)=> setName(e.target.value)}
                />

                <br /><br />

                <input type="email" placeholder="enter your email" 
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                />

                <br /><br />

                <button type="submit">Submit</button>
            </form>

            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
        </div>
    );
}

export default App;