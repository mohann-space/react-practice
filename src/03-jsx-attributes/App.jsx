function App(){
    const imageUrl = "https://example.com/image.jpg";
    const name = "Mohan";

    return(
        <div>
            <h1 className="title">{name}</h1>
            <img src={imageUrl} alt="Profile" />
        </div>
    );
}

export default App;