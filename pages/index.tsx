import Heading from "./components/Heading";
import styles from '../styles/Home.module.scss'
import Socials from "./components/Socials";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`)
    const data = await response.json()
    if (!data) {
      return {
        notFound: true
      }
    }
    return {
      props: {socials: data}
    }
  }catch {
    return {
      props: {socials: null}
    }
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