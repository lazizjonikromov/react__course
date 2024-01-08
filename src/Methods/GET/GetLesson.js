import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetLesson = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setUsers(res.data);
                console.log(res);
            })
            .catch(err => {
                console.error("Error!");
            })
    }, [])

    return (
        <>
            {users.map(user => (
                <div className="infos">
                    <h1>{user.name}</h1>
                    <h3>{user.phone}</h3>
                    <p>{user.username}</p>
                </div>
            ))}
        </>
    );
};

export default GetLesson;