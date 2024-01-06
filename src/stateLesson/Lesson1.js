import React from 'react';

class lesson1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Laziz",
            age: 17,
            job: "Frontend Developer",
            date: new Date()
        };
    }

    render() {
        return (
            <>
                <h1>My name is {this.state.name}</h1>
                <p>He is {this.state.age}</p>
                <p>He is {this.state.job}</p>

                <h2>Date is {this.state.date.toLocaleDateString()}.</h2>
                <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
            </>
        );
    }
}

export default lesson1;
