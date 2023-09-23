import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const CategoryItem = ({ data }) => {
  const {
    id,
    logo,
    jobTitle,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = data;

  return (
    <div>
      <div className=" p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={logo}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {jobTitle}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {company_name} 
          </p>
          <div>
               <button className="btn btn-outline btn-info mr-3 mb-4">{job_type}</button>
               <button className="btn btn-outline btn-info">{remote_or_onsite}</button>
          </div>
          <div className="flex justify-between">
               <h1 className="mb-5  text-xl flex items-center"><MdOutlineLocationOn></MdOutlineLocationOn> {location}</h1>
               <h1 className="mb-5 text-xl flex items-center">
               {salary}
               </h1>
          </div>
          <Link
          to={`/viewDetail/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
