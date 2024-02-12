import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-[490px] p-8">
      {/* Heading And Lorem8 */}
      <div>
        <div className="text-2xl font-bold ">Welcome to PopX</div>
        <p className="text-gray-600 w-10/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>
      {/* Buttons div */}
      <div className="mt-6 flex flex-col gap-2">
        <button className="bg-[#6C25FF] text-white font-bold py-2 px-4 rounded">
          <Link to="/signup">Create Account</Link>
        </button>
        <button className="bg-[#6C25FF4B] font-bold py-2 px-4 rounded">
          <Link to="/login">Already Registered? Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
