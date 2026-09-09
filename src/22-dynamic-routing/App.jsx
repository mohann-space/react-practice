import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>
}
function User() {
    const { id } = useParams();

    return <h2>User ID: {id}</h2>;
}

function App(){
    return (
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/user/101">User 101</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/user/:id" element={<User />}/>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
