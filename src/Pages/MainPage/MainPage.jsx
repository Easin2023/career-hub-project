import { Outlet } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";

const MainPage = () => {
     return (
          <div>
               <Navbar></Navbar>
              <Outlet></Outlet>
              <Footer></Footer>
          </div>
     );
};

export default MainPage;