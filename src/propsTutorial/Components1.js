import React from 'react';

const Components1 = (props) => {
    return (
        <>
            <h1>Hello, {props.name}</h1>
            <h2>He is {props.age} years old</h2>
        </>
    );
};

export default Components1;