import Link from "next/link";
import Heading from "../components/Heading";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
    try {
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
    }catch {
        return {
            props: {contacts: null}
        }
    }

}

export interface IContact {
    id: number
    email: string
    name: string
    address: {
        city: string
        street: string
        zipcode: string | number
        suite: string
    }
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
                    .map(({id, name}) =>(
                        <li key={id}>
                            <Link href={`/contacts/${id}/`}>{name}</Link>
                        </li>
                    ))}
        </ul>
    </>
}
export default Contacts