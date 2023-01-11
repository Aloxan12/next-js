import Heading from "./Heading";
import styles from  '../../styles/Footer.module.scss'

const Footer = ()=>{
    return <div className={styles.footer}>
        <Heading text={'Created by Aloxan12'} tag={'h3'} />
    </div>
}

export default Footer