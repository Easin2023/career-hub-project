import { useEffect, useState } from "react";

const Category = () => {

     const [data, setData] = useState([]);

     useEffect(() => {
          fetch('data2.json')
          .then(res => res.json())
          .then(data => setData(data))
     }, [])

     return (
          <div className="">
               <h1 className="text-3xl font-bold text-center">Job Category List</h1>
               <p className="text-center mt-4"><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
               <div className="grid grid-cols-4 mx-40 gap-7 my-10">
                    {
                         data.map(Da => <div key={Da.id} className="p-6 rounded-md bg-slate-100">
                              <img className="mb-9 mt-3" src={Da.logo} alt="" />
                              <h2 className="text-4 font-bold ">{Da.job_name}</h2>
                              <p><small>{Da.Jobs_Available}  Jobs Available</small></p>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default Category;