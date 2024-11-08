import {
  FiBell,
  FiCamera,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLogOut,
  FiUser,
} from "react-icons/fi";
import { useState } from "react";

const Head = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <div className="top-0 left-0 right-0 flex justify-end items-center p-4 fixed bg-white bg-opacity-50 backdrop-blur-sm">
        <div className="text-blue-600 cursor-pointer">Deposit</div>
        <FiGlobe className="text-blue-600 cursor-pointer ml-4 w-8" />
        <FiBell className="text-blue-600 cursor-pointer ml-4 w-8" />
        <div className="relative">
          <FiUser
            className="text-blue-600 cursor-pointer ml-4 w-8"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-xs z-50">
              <div className="pt-2 pl-2 font-bold">Umang Hitendra Shah</div>
              <div className="pl-2" style={{ fontSize: "12px" }}>
                UID: 2659752
              </div>
              <div className="p-2 cursor-pointer flex items-center">
                <FiDownload className="mr-2" /> Download
              </div>
              <div className="p-2 cursor-pointer flex items-center">
                <FiCheckCircle className="mr-2" /> Verification
              </div>
              <div className="p-2 cursor-pointer flex items-center">
                <FiCamera className="mr-2" /> Facial Authentication (optional)
              </div>
              <div className="p-2 cursor-pointer flex items-center">
                <FiLogOut className="mr-2" /> Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
