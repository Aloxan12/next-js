import React from 'react';
import {GetStaticPaths, GetStaticProps} from 'next'
import {IPost} from "./index";
import PostInfo from "../components/PostInfo";
import Head from "next/head";

export const getStaticPaths:GetStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map(({id}:{id: number})=>({
        params: {id: id.toString()}
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps:GetStaticProps = async (context) => {
    const { id } = context.params || {}
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
    return <>
        <Head>
            <title>Post</title>
        </Head>
        <PostInfo post={post} />
    </>
}

export default Post