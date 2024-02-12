import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="w-full p-8">
        <div className="text-2xl font-bold w-8/12 mb-2">Sign in to your PopX account</div>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          {/* First Name */}
          <div className="space-y-1">
            <label className="text-xs text-[#6C25FF] bg-[#F7F8F9] inline-block font-medium relative top-4 mx-3 px-1">
              Full Name<span className="text-red-600">*</span>
            </label>
            <input
              className="border border-t-inherit text-sm rounded-lg block w-full p-2.5 px-4 bg-[#F7F8F9]"
              type="text"
              defaultValue="Marry Doe"
            />
          </div>
          {/* Phone number */}
          <div className="space-y-1">
            <label className="text-xs text-[#6C25FF] bg-[#F7F8F9] inline-block font-medium relative top-4 mx-3 px-1">
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              className="border border-t-inherit text-sm rounded-lg block w-full p-2.5 px-4 bg-[#F7F8F9]"
              type="text"
              defaultValue="Marry Doe"
            />
          </div>
          {/* Email */}
          <div className="space-y-1">
            <label className="text-xs text-[#6C25FF] bg-[#F7F8F9] inline-block font-medium relative top-4 mx-3 px-1">
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              className="border border-t-inherit text-sm rounded-lg block w-full p-2.5 px-4 bg-[#F7F8F9]"
              type="email"
              defaultValue="Marry Doe"
            />
          </div>
          {/* Password */}
          <div className="space-y-1">
            <label className="text-xs text-[#6C25FF] bg-[#F7F8F9] inline-block font-medium relative top-4 mx-3 px-1">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              className="border border-t-inherit text-sm rounded-lg block w-full p-2.5 px-4 bg-[#F7F8F9]"
              type="text"
              defaultValue="Marry Doe"
            />
          </div>
          {/* Comapany Name */}
          <div className="space-y-1">
            <label className="text-xs text-[#6C25FF] bg-[#F7F8F9] inline-block font-medium relative top-4 mx-3 px-1">
              Company Name<span className="text-red-600">*</span>
            </label>
            <input
              className="border border-t-inherit text-sm rounded-lg block w-full p-2.5 px-4 bg-[#F7F8F9]"
              type="text"
              defaultValue="Marry Doe"
            />
          </div>

          {/* Agency Radio Button  */}
          <div className="mx-2 mt-2">
            <p className="text-xs text-[#6C25FF] inline-block  font-medium">
              Are you an Agency?<span className="text-red-600">*</span>
            </p>
            <div className="flex gap-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  value="Yes"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  value="No"
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Sign Up button */}
          <button
            className="text-white font-bold py-2 px-4 mt-[150px] rounded bg-[#6C25FF] "
            type="submit">
            <Link to="/account">Create Account</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
