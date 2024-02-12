import React from "react";
import user from "../img/Ellipse 114@2x.png";
import capture from "../img/Group 1585.svg";

const Account = () => {
  return (
    <div className="bg-[#F7F8F9] w-full rounded-lg shadow-md p-6">
      <div className="bg-white w-[375px] h-[68px] -m-6">
        <h2 className="text-[18px] p-4 pt-6">Account Setting</h2>
      </div>
      <div className="flex mt-14">
        {/* Images */}
        <div>
          <img className="w-[76px]" src={user} alt="Avatar" />
          <img className="relative bottom-6 left-14" src={capture} alt="capture" />
        </div>
        {/* Name and Email */}
        <div className="my-3 mx-2">
          <div className="text-xl font-medium ">Marry Doe</div>
          <div className="text-gray-600 font-medium">Marry@Gmail.Com</div>
        </div>
      </div>
      <div className="mt-2 ">
        <p className="text-sm w-[337px] leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </p>
      </div>
      <div className="border-t border-dotted border-[#CBCBCB] mt-3"></div>
    </div>
  );
};

export default Account;
