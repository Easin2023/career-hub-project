import { useEffect, useState } from "react";
import { getAppliedJobs } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";

const AppliedJobsList = () => {
  const jobs = useLoaderData();

  const [applied, setJobApplied] = useState([]);
  const [display, setDisplay] = useState([]);


  const handleClick = filter => {
     if(filter === 'all'){
          setDisplay(applied);
     }
     else if(filter === 'remote'){
          const remote = applied.filter(jobs => jobs.remote_or_onsite === 'Remote')
          setDisplay(remote);
     }
     else if(filter === 'onsite'){
          const Onsite = applied.filter(jobs => jobs.remote_or_onsite === 'Onsite')
          setDisplay(Onsite);
     }
  }

  // console.log(jobs)
  useEffect(() => {
    const getLocalStorage = getAppliedJobs();

    const appliedJobsList = [];
    if (getLocalStorage.length > 0) {
      for (const id of getLocalStorage) {
        const appliedJobs = jobs.find((job) => job.id === id);
        appliedJobsList.push(appliedJobs);
      }
    }
    setJobApplied(appliedJobsList);
    setDisplay(appliedJobsList);
  }, [jobs]);
  console.log(applied);

  // console.log(getLocalStorage)

  return (
    <div>
      <div className="text-center py-28 mb-10 bg-sky-100">
        <h1 className="text-2xl font-bold">Applied Jobs</h1>
      </div>
      <div>
        <details className="dropdown mb-32">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="cursor-pointer" onClick={() => handleClick('all')}>All</li>
            <li className="cursor-pointer" onClick={() => handleClick('remote')}>Remote</li>
            <li className="cursor-pointer" onClick={() => handleClick('onsite')}>Onsite</li>
          </ul>
        </details>
      </div>
      <div>
        {display.map((apply) => (
          <div key={apply.id}>
            <div className="flex justify-between  mx-32 mb-20 bg-slate-100 p-10 rounded-xl">
              <div>
                <img
                  className="p-10 rounded-lg bg-slate-200"
                  src={apply.logo}
                  alt=""
                />
              </div>
              <div>
                <h1>{apply.company_name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobsList;
