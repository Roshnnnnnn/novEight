import React, { useState } from "react";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";

const MT5 = () => {
  const [fromAccount, setFromAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const accounts = ["Select Account", "Select Account 1", "Select Account 2"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ fromAccount, amount, note });
  };

  const handleFromChange = (e) => {
    setFromAccount(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const getToAccountOptions = () => {
    return accounts.filter((account) => account !== fromAccount);
  };

  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 flex flex-col items-center justify-center mx-auto relative z-10  rounded text-center shadow-lg border border-gray-300 p-4">
          <div className="mb-4 w-[40%]">
            <label className="block text-xs font-medium text-gray-700 text-left">
              From
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md text-xs shadow-sm focus:ring focus:ring-opacity-50">
              <option>516025557 - $0.00 USD - Hedge STP</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4 w-[40%]">
            <label className="block text-xs font-medium text-gray-700 text-left">
              To
            </label>
            <select className="mt-1 block w-full border text-xs border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50">
              <option>516278838 - $0.00 USD - Hedge STP</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4 w-[40%]">
            <label className="block text-xs font-medium text-gray-700 text-left">
              Amount
            </label>
            <input
              type="text"
              // value={amount}
              // onChange={handleAmountChange}
              placeholder="Enter Amount"
              className="w-full p-2 text-xs text-gray-700 font-light border-b border-gray-300 focus:outline-none focus:border-gray-500"
              min="0"
              style={{ MozAppearance: "textfield", appearance: "none" }}
            />
            <div className="mt-4">
              <button className="w-full w-[40%] bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 shadow-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MT5;
