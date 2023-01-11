import Heading from "../components/Heading";
import ContactInfo from "../components/ContactInfo";

interface IContact{
    contact: any
}

const Contact =({contact}: IContact)=>{
    return <>
        <Heading text={'Jack'} />
        <ContactInfo contact={contact}/>
    </>
}
export default Contact