import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./21-react-router/App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
            <App />
    </StrictMode>
);