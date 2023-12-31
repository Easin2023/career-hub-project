import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import Error from "../component/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import ViewDetail from "../Pages/ViewFDetail/ViewDetail";
import AppliedJobsList from "../Pages/AppliedJobsList/AppliedJobsList";

     const Router = createBrowserRouter([
          {
               path: '/',
               element: <MainPage></MainPage>,
               errorElement: <Error></Error>,
               children: [
                    {
                         path: '/',
                         element: <Home></Home>
                    },
                    {
                         path: '/viewDetail/:id',
                         element: <ViewDetail></ViewDetail>,
                         loader: () => fetch('../../public/featured.json')
                    },
                    {
                         path: '/applied',
                         element: <AppliedJobsList></AppliedJobsList>,
                         loader: () => fetch('../../public/featured.json'),
                    } 
               ]
          }
     ])

export default Router;