import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import Error from "../component/ErrorPage/Error";
import Category from "../component/Category/Category";
import Featured from "../component/Featured/Featured";

     const Router = createBrowserRouter([
          {
               path: '/',
               element: <MainPage></MainPage>,
               errorElement: <Error></Error>,
               children: [
                    {
                         path: '/',
                         element:
                         <>
                         <Category></Category>
                         <Featured></Featured>
                         </>
                    },
               ]
          }
     ])

export default Router;