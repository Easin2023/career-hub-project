import { Outlet } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";

const MainPage = () => {
     return (
          <div>
              <div  className="container mx-auto">
              <Navbar></Navbar>
              <Outlet></Outlet>
              </div>
              <Footer></Footer>
          </div>
     );
};

export default MainPage;