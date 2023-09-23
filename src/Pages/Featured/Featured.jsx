import { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryIitem";

const Featured = () => {
     const [featuredData, setFeaturedData] = useState([]);
     const [sliceData , setSliceData ] = useState(4);

     useEffect(() => {
          fetch('featured.json')
          .then(res => res.json())
          .then(data => setFeaturedData(data))
     }, [])

     // console.log(featuredData)

     return (
          <div>
               <h1 className="text-3xl font-bold text-center">Featured Jobs</h1>
               <p className="text-center mt-4"><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
               <div className="grid grid-cols-2 gap-6 mx-40 my-6">
                    {
                         featuredData.slice(0,sliceData).map( Da => <CategoryItem key={Da.id} data={Da}></CategoryItem>)
                    }
               </div>
               <div className={sliceData === featuredData.length && 'hidden' }>
                    <div className="text-center">
                    <button onClick={() => setSliceData(featuredData.length)} className=" my-8 btn btn-primary">Show All</button>
                    </div>
               </div>
          </div>
     );
};

export default Featured;