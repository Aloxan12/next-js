import ContactInfo from "../components/ContactInfo";
import {IContact} from "./index";
import {GetServerSideProps} from 'next'

export const getServerSideProps:GetServerSideProps = async (context) => {
    try {
        const { id } = context.params || {}
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        if (!data) {
            return {
                notFound: true
            }
        }
        return {
            props: {contact: data}
        }
    }catch {
        return {
            props: {contact: null}
        }
    }
}

interface IContactProps{
    contact: IContact
}

const Contact =({contact}: IContactProps)=>{
    return <>
        <ContactInfo contact={contact}/>
    </>
}
export default Contact