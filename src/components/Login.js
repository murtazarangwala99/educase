import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full p-8 rounded-xl shadow-lg">
      <div className="text-2xl font-bold w-8/12 mb-2">Sign in to your PopX account</div>
      <p className="w-11/12">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1">
          <label className="text-xs text-[#6C25FF] bg-[#F7F8F9] inline-block font-medium relative top-4 mx-5 px-1">
            Email Address
          </label>
          <input
            className="border border-t-inherit text-sm rounded-lg block w-full p-2.5 bg-[#F7F8F9]"
            type="email"
            placeholder="Enter email address"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-[#6C25FF] bg-[#F7F8F9] inline-block font-medium relative top-4 mx-5 px-1">
            Password
          </label>
          <input
            className="border border-t-inherit text-sm rounded-lg block w-full p-2.5 bg-[#F7F8F9]"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <button
          className="text-white font-bold py-2 px-4 mt-6 rounded bg-[#CBCBCB]"
          type="submit">
          <Link to="/account">Login</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
