import React, {useEffect} from 'react';
import Heading from "./components/Heading";
import {useRouter} from "next/router";

const Error = () => {
    const {push} = useRouter()

    useEffect(()=>{
        setTimeout(()=>
            push('/')
        ,5000)
    },[])

    return (
        <div>
            <Heading text={'404'} />
            <Heading tag={'h2'} text={'Page not found'} />
        </div>
    );
};

export default Error;