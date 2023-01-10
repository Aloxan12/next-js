import Heading from "./components/Heading";
import styles from '../styles/Home.module.css'

export const Home = ()=>{
  return <div className={styles.wrapper}>
    <Heading text={'Hello world!!'}/>
  </div>
}

export default Home