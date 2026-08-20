import { useState } from "react";

function App(){
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
     style={{
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
      minHeight: "100vh",
      padding: "20px",
     }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}

export default App;