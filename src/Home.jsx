import "./Back.css";
const Home = () => {
  return (
    <div className="back-image mt-4">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h4 className="text-blue-700 text-center mb-4 text-5xl">I Grow By Helping People In Need</h4>
        <div className="flex items-center">
          <div className="form-control">
            <input type="text" placeholder="Search Here..." className="input input-bordered w-24 md:w-auto" />
          </div>
          <button className="btn btn-neutral">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default Home;


