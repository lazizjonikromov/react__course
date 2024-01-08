import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PutLesson = () => {

    const [updatedAt , setUpdatedAt] = useState(null);

    useEffect(() => {
        axios.put('https://reqres.in/api/article/1')
            .then((response) => {
                setUpdatedAt(response.data.updatedAt);
                console.log(response);
            })
    }, [])

    return (
        <>
            <div className="card">
                <div className="header">
                    PUT REQUEST
                </div>
                <div className="body">
                    Returned update date: {updatedAt}
                </div>
            </div>
        </>
    );
};

export default PutLesson;