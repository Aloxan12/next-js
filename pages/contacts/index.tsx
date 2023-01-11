import Link from "next/link";
import Heading from "../components/Heading";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {contacts: data}
    }
}

interface IContact {
    id: number
    email: string
    name: string
}

interface IContacts {
    contacts: IContact[]
}

const Contacts = ({contacts}: IContacts) => {
    return <>
        <Heading text={'Contacts list:'}/>
        <ul>
            {!!contacts
                && contacts
                    .map(({id, email, name}) =>(
                        <li key={id}>
                            <Link href={`/contacts/${id}/`}>{name}</Link>
                        </li>
                    ))}
        </ul>
    </>
}
export default Contacts