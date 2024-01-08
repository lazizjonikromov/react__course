import React, { useContext } from 'react';
import { Context } from './contextTut/Context';

const Display = () => {

    const personName = useContext(Context);

    return (
        <>
            {/* <Context.Consumer>
                {personName => <h1>{personName}</h1>}
            </Context.Consumer> */}

            <h1>{personName}</h1>
        </>
    );
};

export default Display;