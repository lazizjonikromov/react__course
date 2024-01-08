import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PostLesson = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.post("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            setPost(response.data);
        })
        .catch(err => {
            console.error("Error!");
        })
    }, [])

    function createPost() {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "Uzbekistan",
            body: "This is post method!"
        })
        .then((response) => {
            setPost(response.data);
            console.log(response);
        })
    }

    if(!post) return "Loading..."

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={createPost}>Create Post</button>
        </>
    );
};

export default PostLesson;