import Header from "./Header";
import Footer from "./Footer";
import styles from "../../styles/Layout.module.scss";

interface ILayout{
    children: JSX.Element
}

const Layout = ({children}:ILayout)=>(
     <div className={styles.mainLayout}>
         <Header />
             <div className={styles.children}>
                 {children}
             </div>
         <Footer />
    </div>
)

export default Layout