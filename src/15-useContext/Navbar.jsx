import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
    const { user } = useContext(UserContext);

    return(
        <nav>
            <h2>My Website</h2>
            <p>Welcome, {user}</p>
        </nav>
    );
}

export default Navbar;