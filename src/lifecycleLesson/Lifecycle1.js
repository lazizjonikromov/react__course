import React from 'react';

class Lifecycle1 extends React.Component {

    constructor() {
        super();
        console.log("Constructor is working");
    }

    componentDidMount() {
        console.log("ComponentDidMount is working...");
    }

    componentWillMount() {
        console.log("componentWillMount is working...");
    }

    render() {
        console.log("Render is working...");
        return (
            <>
                
            </>
        );
    }
}

export default Lifecycle1;
