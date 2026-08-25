import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <div>
            <h1>Registration Form</h1>

            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"/>

                <br />

                <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"/>

                <br />

                <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"/>

                <br />

                <button type="submit">Register</button>

            </form>

            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
        </div>
    );
}

export default App;