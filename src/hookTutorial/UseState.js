import React, { useState } from 'react';

function UseState(){

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1)
    }

    function decrementCount() {
        setCount(count - 1)
    }

    return (
        <>
            <button onClick={incrementCount}>+</button>
            <span>{count}</span>
            <button onClick={decrementCount}>-</button>   
        </>
    );
};

export default UseState;