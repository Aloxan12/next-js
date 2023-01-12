import Heading from "./components/Heading";
import styles from '../styles/Home.module.scss'
import Socials from "./components/Socials";

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/socials')
  const data = await response.json()
  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {socials: data}
  }
}

export interface ISocials{
  id: number
  icons: string
  path: string
}

interface IHomeProps{
  socials:ISocials[]
}

export const Home = ({socials}: IHomeProps)=>{
  return <div className={styles.wrapper}>
    <Heading text={'Hello world!!'}/>
    <Socials socials={socials} />
  </div>
}

export default Home