import { useState } from "react";
import Head from "../sidebar/Head";
import Navbar from "../sidebar/Navbar";
import Side from "../sidebar/Side";
import axios from "axios";

const API_BASE_URL = "https://api.novotrend.co/api";
const BASE_URL = `${API_BASE_URL}/deposit_funds_add_wallet_bal_cash.php`;

const Cash = () => {
  const [inputFields, setInputFields] = useState({
    amount: "",
    remark: "",
  });
  const token = localStorage.getItem("userToken");

  const handleInputFormSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      console.error("User token is missing.");
      return;
    }

    const data = {
      amount: inputFields.amount,
      remark: inputFields.remark,
      deposit_type: "Cash",
      token: token,
    };
    console.log("data", data);

    try {
      const response = await axios.post(BASE_URL, data);
      console.log(response);
      setInputFields({
        amount: "",
        remark: "",
      });
      console.log("Form Submitted Successfully !!");
    } catch (error) {
      console.error(error);
      console.error("Failed to submit the form.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount") {
      setInputFields({
        ...inputFields,
        [name]: value.replace(/\D/g, ""),
      });
    } else {
      setInputFields({
        ...inputFields,
        [name]: value,
      });
    }
  };

  return (
    <div>
      <div className="flex bg-[#F6F8F8] ">
        <Side />
        <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
          <Head />
          <Navbar />
          <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50]">
            <div className="bg-white shadow-lg p-8 rounded-xl">
              <h1 className="text-xl font-bold mb-4">CASH 💸 </h1>
              <p className="mb-4 text-xs font-semibold">
                How to fund your account with Apple Pay/Google Pay
              </p>
              <ol className="list-decimal list-inside mb-4 text-xs">
                <li>Complete the form below and press ‘Submit’</li>
                <li>After entering your card details, press ‘Submit’</li>
                <li>
                  You will be redirected back to the client portal and your
                  transaction will be finalized
                </li>
              </ol>
              <p className="text-xs my-2">
                Please note that the transaction description that appears on
                your card statement will vary depending on the financial gateway
                used. If you have any concerns about the transaction's
                description, please contact support@Novotrend.com
              </p>
              <div className="py-4">
                <h1>Apple Pay/Google Pay FORM</h1>
                <img src="" alt="" />
              </div>
              <form className="grid grid-cols-2 gap-4">
                <div className="mb-4 text-xs">
                  <label className="block mb-1" htmlFor="amount">
                    * Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    className="w-full p-2 border rounded"
                    maxLength={5}
                    required
                    value={inputFields.amount}
                    name="amount"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 text-xs">
                  <label className="block mb-1" htmlFor="notes">
                    Important notes
                  </label>
                  <input
                    id="notes"
                    name="remark"
                    className="w-full p-2 border rounded"
                    rows="3"
                    onChange={handleChange}
                    value={inputFields.remark}
                  />
                </div>
              </form>
              <div className="border-t border-gray-300 my-4" />
              <div className="flex mb-4 text-xs ">
                <div className="flex-1"></div>
                <div className="flex-1 ml-6 justify-center">
                  <h2 className="font-bold mb-2">Deposit Summary</h2>
                  <div className="flex justify-between">
                    <p className="mb-1">Deposit Amount:</p>
                    <p className="mb-1">0.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="mb-1">Deposit Repost:</p>
                    <p> -</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="mb-1">Net Deposit Amount: </p>
                    <p> 0.00</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white p-1 px-2 rounded"
                  onClick={handleInputFormSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cash;
