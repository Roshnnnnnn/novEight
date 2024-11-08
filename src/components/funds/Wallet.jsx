import { useState } from "react";
import Side from "../sidebar/Side";
import Head from "../sidebar/Head";

const Wallet = () => {
  const [amount, setAmount] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ amount, selectedAccount, note });
  };

  return (
    <div className="flex">
      <Side />
      <div className=" w-[70%] lg:w-[70%] xl:w-[70%] mx-auto relative z-10 m-2 rounded mt-24">
        <Head />
        <div className="flex flex-col items-center justify-center mx-auto relative z-10 m-2 rounded text-center shadow-lg border border-gray-300 p-4">
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

export default Wallet;
