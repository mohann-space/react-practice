import { memo } from "react";

const Child = memo(({ handleClick}) => {
    console.log("Child rendered");

    return (
        <button onClick={handleClick}>
            Click
        </button>
    );
});

export default Child;