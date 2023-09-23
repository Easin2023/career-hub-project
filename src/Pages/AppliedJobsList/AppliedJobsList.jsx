import { useState } from "react";
import { getAppliedJobs } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";

const AppliedJobsList = () => {
     const jobs = useLoaderData();
     console.log(jobs)
     const getLocalStorage = getAppliedJobs();

     console.log(getAppliedJobs)

     return (
          <div>
                <div className="text-center py-28 mb-10 bg-sky-100">
               <h1 className="text-2xl font-bold">Applied Jobs</h1>  
             </div> 



          </div>
     );
};

export default AppliedJobsList;