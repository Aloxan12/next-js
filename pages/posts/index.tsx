import Link from "next/link";
import Heading from "../components/Heading";

export const getStaticProps = async () => {
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
        <Heading text={'Contacts list:'}/>
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