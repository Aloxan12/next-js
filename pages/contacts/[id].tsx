import ContactInfo from "../components/ContactInfo";

export const getServerSideProps = async (context: any) => {
    const { id } = context.params
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
}

interface IContact{
    contact: IContact
}

const Contact =({contact}: IContact)=>{
    return <>
        <ContactInfo contact={contact}/>
    </>
}
export default Contact