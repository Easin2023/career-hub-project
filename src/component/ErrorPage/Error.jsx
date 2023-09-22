import { NavLink } from "react-router-dom";

const Error = () => {
     return (
          <div className=" text-center">
               <h2 className="text-5xl font-bold mt-96">Oops!!!!!</h2>
               <NavLink to='/'>Go Back</NavLink>
          </div>
     );
};

export default Error;