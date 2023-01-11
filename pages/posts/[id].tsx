import React from 'react';
import {IPost} from "./index";
import PostInfo from "../components/PostInfo";

export const getServerSideProps = async (context: any) => {
    const { id } = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {post: data}
    }
}

interface IPostProps{
    post: IPost
}

const Post = ({post}: IPostProps) => {
    return (
        <PostInfo post={post} />
    );
}

export default Post;