import React, { useState } from "react";

const SecurityManagement = () => {
  const [isEmailToggled, setIsEmailToggled] = useState(false); // State for email toggle
  const [isAuthenticatorToggled, setIsAuthenticatorToggled] = useState(false); // State for authenticator toggle

  const handleEmailToggle = () => {
    setIsEmailToggled(!isEmailToggled);
  };

  const handleAuthenticatorToggle = () => {
    setIsAuthenticatorToggled(!isAuthenticatorToggled);
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-lg m-2">
      <div className="flex justify-center">
        <div className="w-[24rem] ">
          <h1 className="p-4">Authentication Method</h1>
          <div className="p-2 bg-white shadow-md rounded-lg m-2 ">
            <div className="mb-4  pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-xs">Email Address</span>
                  <span
                    className="text-orange-500 ml-2"
                    style={{ fontSize: "12px" }}
                  >
                    Unverified
                  </span>
                  <p className="text-gray-600 " style={{ fontSize: "14px" }}>
                    u****@outlook.com
                  </p>
                </div>
                <button className=" border px-4 py-1 text-teal-900 rounded">
                  Verify
                </button>
              </div>
              <hr className="mt-4" />
              <div>
                <div className="flex justify-between items-center">
                  <p
                    className="text-xs text-gray-500 mt-2"
                    style={{ fontSize: "12px" }}
                  >
                    Login Location Change Email Notification
                  </p>
                  <div className="mt-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={isEmailToggled}
                        onChange={handleEmailToggle}
                      />
                      <div className="relative w-7 h-4 bg-orange-300 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold">Password</span>
                  <p className="text-gray-500" style={{ fontSize: "12px" }}>
                    Last update: 2024/02/09 18:17:20 GMT+05:30
                  </p>
                </div>
                <button className="border px-4 py-1 text-teal-900 rounded">
                  Modify
                </button>
              </div>
            </div>

            <div className="mb-4 pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-xs">
                    Security Authenticator App
                  </span>
                  <span
                    className="text-orange-500 ml-2"
                    style={{ fontSize: "12px" }}
                  >
                    Unverified
                  </span>
                  <p
                    className="text-gray-600 "
                    style={{ fontSize: "14px" }}
                  ></p>
                </div>
                <button className=" border px-4 py-1 text-teal-900 rounded">
                  Verify
                </button>
              </div>
              <hr className="mt-4" />
              <div>
                <div className="flex justify-between items-center">
                  <p
                    className="text-xs text-gray-500 mt-2"
                    style={{ fontSize: "12px" }}
                  >
                    Enable Login Authentication
                  </p>
                  <div className="mt-3">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        checked={isAuthenticatorToggled}
                        onChange={handleAuthenticatorToggle}
                      />
                      <div className="relative w-7 h-4 bg-orange-300 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={isToggled}
                  onChange={handleToggle}
                />
                <div className="relative w-7 h-4 bg-orange-300 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityManagement;
