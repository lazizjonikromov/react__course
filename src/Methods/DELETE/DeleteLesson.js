import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DeleteLesson = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                setPost(response.data);
            })
    }, []);

    function delPost() {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then(() => {
                alert("Post deleted!")
                setPost(null);
            })
    }

    if(!post) return "No post!"

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={delPost}>Delete Post</button>
        </>
    );
};

export default DeleteLesson;