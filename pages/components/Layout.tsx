import Header from "./Header";
import Footer from "./Footer";

interface ILayout{
    children: JSX.Element
}

const Layout = ({children}:ILayout)=>(
     <>
         <Header />
         {children}
         <Footer />
    </>
)

export default Layout