import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAppliedJobs } from "../../Utility/LocalStorage";




const ViewDetail = () => {
     const useData = useLoaderData();

     const {id} = useParams()

     const init = parseInt(id)
     
     const findData = useData.find(use => use.id === init)
     
     const {job_description,job_responsibility} = findData;
     
     const applyJobs = () => {
          setAppliedJobs(init)
          toast('Apply success Full')
     }


     return (
          <div>
             <div className="text-center py-28 mb-10 bg-sky-100">
               <h1 className="text-2xl font-bold">Job Details</h1>  
             </div>
              <div className="grid gap-5 grid-cols-4 mx-32">
               <div className=" col-span-3 bg-slate-200 p-4 rounded-xl mb-20">
                    <h1 className="text-xl font-semibold">Job Description</h1>
                    <p><small>{job_description}
                    {job_description}
                    {job_description}</small></p>
                    <h1 className="text-xl font-semibold mt-6">Job Responsibility</h1>
                    <p><small>{job_responsibility}{job_responsibility}{job_responsibility}</small></p>

               </div>
               <div className=" col-span-1">
                    <h2>hallo vai</h2>
                    <button onClick={applyJobs} className="btn btn-primary w-full">Apply Now</button>
                    <ToastContainer></ToastContainer>
               </div>
               </div> 
          </div>
     );
};

export default ViewDetail;