import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'
import {useRouter} from "next/router";
import Image from "next/image";

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Contacts', path: '/contacts'},
]

const Navbar = () => {
    const { pathname } = useRouter()
    return <nav className={styles.nav}>
        <div className={styles.logo}>
            <Image width={20} height={20} src='/img.png' alt={'logo'}/>
        </div>
        <div className={styles.links}>
            {navigation.map(({id, title, path}) => (
                <Link href={path} key={id} className={pathname === path ? styles.active : '' }>{title}</Link>
            ))}
        </div>
    </nav>
}

export default Navbar