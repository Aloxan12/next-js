import React from 'react';
import Heading from './Heading';
import {IPost} from "../posts";

interface IPostInfo{
    post: IPost
}

const PostInfo = ({post}: IPostInfo) => {
    const {title, body} = post || {}

    if(!post){
        return <Heading tag={'h3'} text={'Empty post'} />
    }

    return (
        <>
            <Heading tag={'h3'} text={title} />
            <div>
                {body}
            </div>
        </>
    );
};

export default PostInfo;