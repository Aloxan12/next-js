import Link from 'next/link'
import styles from '../../styles/Navbar.module.scss'

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Contacts', path: '/contacts'},
]

const Navbar = () => (
    <nav className={styles.nav}>
        <div>Next navbar</div>
        <div className={styles.links}>
            {navigation.map(({id, title, path}) => (
                <Link href={path} key={id}>{title}</Link>
            ))}
        </div>
    </nav>
)

export default Navbar