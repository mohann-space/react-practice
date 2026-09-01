import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./15-useContext/UserContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
    </StrictMode>
);