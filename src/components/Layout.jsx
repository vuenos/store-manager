import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div id="wrap">
      <Aside />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
export default Layout;