import Heading from "../components/Heading";
import {useEffect, useState} from "react";

const getStaticProps = async ()=>{}

const Contacts =()=>{
    const [contacts, setContacts] = useState<any[]>([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setContacts(data)
        }
        fetchData()
    },[])

    return <>
        <Heading text={'Contacts list:'}/>
        <ul>
            {contacts.map(({id, email, name})=> <li key={id}><strong>{name}</strong>({email})</li>)}
        </ul>
    </>
}
export default Contacts