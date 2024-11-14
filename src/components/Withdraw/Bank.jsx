import axios from "axios";
import Head from "../sidebar/Head";
import Navbar from "../sidebar/Navbar";
import Side from "../sidebar/Side";
import { useEffect, useState } from "react";

const API_BASE_URL = "https://api.novotrend.co/api";
const BANK_TRANSFER = `${API_BASE_URL}/withdraw_funds_add_wallet_bal.php`;
const BANK = `${API_BASE_URL}/get_accept_bank.php`;

const Bank = () => {
  const [formValues, setFormValues] = useState({
    amount: "",
    bankname: "",
    accholder: "",
    accno: "",
    ifsc: "",
    remark: "",
    transaction_id: "",
  });
  const token = localStorage.getItem("userToken");
  const [bank, setBank] = useState("");

  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        const response = await axios.post(BANK, { token });
        const bankData = response.data.data.response;
        setBank(bankData);
      } catch (error) {
        console.error("Failed to fetch bank details", error);
      }
    };

    fetchBankDetails();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormValues({
      amount: "",
      remark: "",
      transaction_id: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formValues,
      type: "addwithdrawbank",
      token: token,
    };

    try {
      const response = await axios.post(BANK_TRANSFER, data);

      console.log(response);

      if (response.status === 200) {
        console.log("Form submitted logfully!");
        resetForm();
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred: " + error.message);
    }
  };
  return (
    <div className="flex bg-[#F6F8F8] ">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <Navbar />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50]">
          <div className="bg-white shadow-lg p-8 rounded-xl">
            <h1 className="text-xl font-bold mb-4">Bank 🏦</h1>
            <p className="mb-4 text-xs font-semibold">
              How to fund your account with Bank
            </p>
            <ol className="list-decimal list-inside mb-4 text-xs">
              <li>Enter the amount</li>
              <li>Enter the transaction id</li>
              <li>Attach the transaction proof</li>
            </ol>
            <p className="text-xs my-2">
              Please note that the transaction description that appears on your
              card statement will vary depending on the financial gateway used.
              If you have any concerns about the transaction's description,
              please contact support@Novotrend.com
            </p>
            <div className="py-4">
              <h1>Bank Form</h1>
              <img src="" alt="" />
            </div>
            <form className="grid grid-cols-2 gap-4">
              <div className="mb-4 text-xs">
                <label className="block mb-1" htmlFor="amount">
                  * Amount
                </label>
                <input
                  className="w-full p-2 border rounded"
                  placeholder="Enter Amount"
                  value={formValues.amount}
                  onChange={handleChange}
                  maxLength={5}
                  required
                  type="text"
                  id="amount"
                  name="amount"
                />
              </div>
              <div className="mb-4 text-xs">
                <label className="block mb-1" htmlFor="amount">
                  * Transaction Id
                </label>
                <input
                  type="text"
                  id="transaction_id"
                  name="transaction_id"
                  placeholder="Enter Address  ID"
                  value={formValues.transaction_id}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4 text-xs">
                <label className="block mb-1" htmlFor="notes">
                  * Important notes
                </label>
                <input
                  id="remark"
                  name="remark"
                  rows="3"
                  className="w-full p-2 border rounded"
                  placeholder="Enter Any Notes"
                  value={formValues.remark}
                  onChange={handleChange}
                  required
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
                  {/* <p className="mb-1">{depositAmount || "-"}</p> */}
                </div>
                <div className="flex justify-between">
                  <p className="mb-1">Deposit Repost:</p>
                  <p> -</p>
                </div>
                <div className="flex justify-between">
                  <p className="mb-1">Net Deposit Amount: </p>
                  {/* <p>{depositAmount || "-"}</p> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-orange-500 text-white p-1 px-2 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
