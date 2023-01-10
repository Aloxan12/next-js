import React from 'react';
import Heading from "./components/Heading";

const Error = () => {
    return (
        <div>
            <Heading text={'404'} />
            <Heading tag={'h2'} text={'Page not found'} />
        </div>
    );
};

export default Error;