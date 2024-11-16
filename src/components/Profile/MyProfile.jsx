import { FaCheckCircle, FaRegMoneyBillAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiTrademarkLine } from "react-icons/ri";
import { IoInformationCircle } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const API_BASE_URL = "https://api.novotrend.co/api";
const UPDATE_USER = `${API_BASE_URL}/update_user.php`;

const MyProfile = () => {
  const [userNames, setUserName] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.userInfo?.name) {
      let name = user.userInfo?.name;
      setUserName(name);
    }
  }, [user.userInfo?.name]);
  return (
    <div className="">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-sm font-semibold">{userNames}</h2>
          <p className="text-gray-600 ml-2" style={{ fontSize: "12px" }}>
            UID: 2659752
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 text-xs">Personal Account</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
          <div>
            <p className="text-gray-600 mb-4">
              Email Address: u***@outlook.com
            </p>
            <p className="text-gray-600">Phone Number: +971 ***735</p>
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              Country of residency: United Arab Emirates
            </p>
            <p className="text-gray-600">Date of Birth: 22/09/1978</p>
          </div>
        </div>
      </div>
      {/* <div className="mt-4 pt-4 border border-gray-300">
        <h3 className="text-sm text-orange-500 ml-4">Standard</h3>
        <div className="border-b mt-2 mb-4"></div>

        <div className="m-4">
          <div className=" flex justify-end">
            <span className="text-teal-500">Completed</span>
          </div>
          <h4 className="font-semibold">
            Level 1. Account Opening Verification
          </h4>
          <p style={{ fontSize: "12px" }}>
            Complete the account opening process to unlock deposit
            qualifications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
            <div>
              <h4 className="font-semibold my-2">Requirements</h4>
              <p className="flex items-center my-1">
                <span className="text-teal-500 mr-2">
                  <FaCheckCircle />
                </span>
                Personal Details
              </p>
              <p className="flex items-center my-1">
                <span className="text-teal-500 mr-2">
                  <FaCheckCircle />
                </span>
                Account Configuration
              </p>
            </div>
            <div>
              <h4 className="font-semibold my-2">Permissions</h4>
              <p className="flex items-center my-1">
                <span className="text-teal-900 mr-2">
                  <CgProfile />
                </span>
                Trading Account
              </p>
              <p className="flex items-center my-1">
                <span className="text-teal-900 mr-2">
                  <BsBank2 />
                </span>
                Deposit
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="m-4">
          <div className=" flex justify-end ">
            <span className="text-teal-500">Completed</span>
          </div>
          <h4 className="font-semibold">Level 2. ID Verification</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
            <div>
              <h4 className="font-semibold my-2">Requirements</h4>
              <p className="flex items-center my-1">
                <span className="text-teal-500 mr-2">
                  <FaCheckCircle />
                </span>
                ID Personal
              </p>
              <p className="flex items-center my-1">
                <span className="text-teal-500 mr-2">
                  <FaCheckCircle />
                </span>
                ID Photo
              </p>
            </div>
            <div>
              <h4 className="font-semibold my-2">Permissions</h4>
              <p className="flex items-center my-1">
                <span className="text-teal-900 mr-2">
                  <RiTrademarkLine />
                </span>
                Trade
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="m-4">
          <div className=" flex justify-end ">
            <span className="text-teal-900">Unverified</span>
          </div>
          <h4 className="font-semibold">Level 3. Address Verification</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
            <div>
              <h4 className="font-semibold my-2">Requirements</h4>
              <p className="flex items-center my-1">
                <span className="text-yellow-500 mr-2">
                  <IoInformationCircle />
                </span>
                Address Information
              </p>
              <p className="flex items-center my-1">
                <span className="text-yellow-500 mr-2">
                  <IoInformationCircle />
                </span>
                Proof of Address
              </p>
            </div>
            <div>
              <h4 className="font-semibold my-2">Permissions</h4>
              <p className="flex items-center my-1">
                <span className="text-teal-900 mr-2">
                  <FaRegMoneyBillAlt />
                </span>
                Withdrawal
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-orange-500 text-white w-[6rem] h-[2rem] rounded">
                Verify Now
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MyProfile;
