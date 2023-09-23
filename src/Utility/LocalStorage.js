const getAppliedJobs = () => {
     const getJobs = localStorage.getItem('Applied-Jobs');
     if(getJobs){
          return JSON.parse(getJobs)
     }
     return [];
} 

const setAppliedJobs = id => {
     const getLocalStorageId = getAppliedJobs();
     const exists = getLocalStorageId.find(jobs => jobs === id);
     if(!exists){
          getLocalStorageId.push(id);
          localStorage.setItem('Applied-Jobs', JSON.stringify(getLocalStorageId));
     }
}

export {setAppliedJobs,getAppliedJobs};