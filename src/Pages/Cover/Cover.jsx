const Cover = () => {
  return (
    <div className="flex items-center bg-sky-100">
      <div className="ml-60">
        <h1 className="text-5xl font-bold mb-6">One Step Closer To Your <span className="text-blue-500">Dream Job</span> </h1>
        <p>
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </small>
        </p>
        <button className="btn btn-primary mt-6">Get Started </button>
      </div>
      <div className="mr-40">
          <img className="w-full" src="https://i.ibb.co/Wcqss51/user.png" alt="" />
      </div>
    </div>
  );
};

export default Cover;
