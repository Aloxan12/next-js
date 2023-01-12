import Link from "next/link";
import Heading from "../components/Heading";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        if (!data) {
            return {
                notFound: true
            }
        }
        return {
            props: {posts: data}
        }
    }catch {
        return {
            props: {posts: null}
        }
    }
}

export interface IPost{
    id: number
    userId: number
    title: string
    body: string
}

interface IPostsProps{
    posts: IPost[]
}

export const Posts = ({posts}: IPostsProps)=>{
    return <>
        <Heading text={'Posts list:'}/>
        <ul>
            {!!posts
                && posts
                    .map(({id, title}) =>(
                        <li key={id}>
                            <Link href={`/posts/${id}/`}>{title}</Link>
                        </li>
                    ))}
        </ul>
    </>
}

export default Posts