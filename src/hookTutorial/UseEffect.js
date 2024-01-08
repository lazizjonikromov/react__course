import React, { useEffect, useState } from 'react';

const UseEffect = () => {

    const [count, setCount] = useState(0);

    const [infosType, setInfosType] = useState('posts');

    // useEffect(() => {
    //     document.title = `Siz ${count} marta bosdingiz`;
    //     console.log(count);
    // }, [])

    // FETCH API GET UseEffect

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${infosType}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])

    return (
        <>
            {/* <p>Siz {count} marta bosdingiz</p>
            <button onClick={() => setCount(count + 1)}>Click here</button> */}

            <button onClick={() => setInfosType('users')}>Users</button>
            <button onClick={() => setInfosType('comments')}>Comments</button>
            <button onClick={() => setInfosType('todos')}>Todos</button>

        </>
    );
};

export default UseEffect;