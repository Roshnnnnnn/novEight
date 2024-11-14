import { useEffect, useState } from "react";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import Navbar from "../sidebar/Navbar";
import axios from "axios";

const API_BASE_URL = "https://api.novotrend.co/api";
const ACCOUNT_LIST = `${API_BASE_URL}/mt5_accounts_list.php`;
const TRANSFER = `${API_BASE_URL}/mt5_to_wallet_api.php`;

const MT5 = () => {
  const [accounts, setAccounts] = useState([]);
  const [fromAccount, setFromAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(ACCOUNT_LIST, { token });
        console.log(response);
        if (response.data.data.response) {
          setAccounts(response.data.data.response);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        console.error("Failed to fetch accounts", err);
        console.error(
          err.message || "Failed to load accounts. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);

    console.log("Submitting data:", { fromAccount, parsedAmount, note });

    if (!fromAccount || !parsedAmount || !note) {
      console.error("Please fill all fields");
      return;
    }

    if (parsedAmount <= 0) {
      console.error("Amount must be a positive number");
      return;
    }

    const formData = {
      mt5accountselect: fromAccount,
      amount: parsedAmount,
      note,
      token,
    };

    console.log("Form data:", formData);

    try {
      const response = await axios.post(TRANSFER, formData);
      console.log(response);
      const result = response.data.data.result;
      if (result) {
        console.log(result);
        // Clear the form fields
        setFromAccount("");
        setAmount("");
        setNote("");
      } else {
        console.error("Transfer failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission error", err);
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(
          `Error: ${
            err.response.data.message || "An error occurred during the transfer"
          }`
        );
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response received from server. Please try again.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("An error occurred while setting up the request.");
      }
    }
  };

  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="lg:w-[60%] md:w-[90%] sm:w-[90%] mx-auto relative z-10 m-2 rounded lg:mt-16 md:mt-4 sm:mt-4">
        <Head />
        <Navbar />
        <div className="mx-auto relative z-[-50] m-2 rounded-lg  bg-white w-full shadow-lg border border-gray-300 p-4 ">
          <div className="mb-4 w-full ">
            <div className="flex flex-col justify-center lg:w-[40%] md:w-[80%] sm:w-[80%] mx-auto">
              <label className="block text-xs font-medium text-gray-700 text-left">
                From
              </label>
              <select
                name="mt5accountselectfrom"
                id="mt5accountselectfrom"
                value={fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded text-xs shadow-sm pl-4 h-10"
              >
                <option value="">Select Account</option>
                {accounts.map((account) => (
                  <option key={account.id} value={account.accno}>
                    {account.accno}
                  </option>
                ))}
              </select>
              <div className="mb-4 mt-4 w-full">
                <label className="block text-xs font-medium text-gray-700 text-left">
                  Amount
                </label>
                <input
                  type="text" // Changed to text
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*\.?\d*$/.test(value)) setAmount(value);
                  }}
                  required
                  placeholder="Enter Amount"
                  className="w-full p-2 text-xs text-gray-700 font-light border-b border-gray-300 focus:outline-none focus:border-gray-500"
                  min="0"
                  style={{ MozAppearance: "textfield", appearance: "none" }}
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block text-xs font-medium text-gray-700 text-left">
                  Note
                </label>
                <input
                  type="text"
                  id="note"
                  name="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  required
                  placeholder="Enter Amount"
                  className="w-full p-2 text-xs text-gray-700 font-light border-b border-gray-300 focus:outline-none focus:border-gray-500"
                  min="0"
                  style={{ MozAppearance: "textfield", appearance: "none" }}
                />
              </div>
              <div className="mt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full  bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 shadow-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="justify-start flex p-4 bg-white rounded-lg">
            <div className="mt-4 text-xs text-gray-500">
              <span>Please note:</span>
              <p className="mt-2">
                You are responsible for maintaining an account balance that will
                not trigger a margin call. If you have any current open
                positions, please ensure you maintain the required margin in
                your account. Funds transferred to accounts held in the same
                currency are processed instantly.
              </p>
              <p className="mt-2">
                If transferring funds between accounts held in different
                currencies, email{" "}
                <a href="mailto:support@Novotrendmarkets.com">
                  support@Novotrendmarkets.com
                </a>
              </p>
              <p className="mt-2">
                Funds transferred between accounts held in the same currency are
                processed instantly during weekdays. Transfer-between-account
                requests submitted on weekends will only be processed after
                manual review and if you do not hold any open positions in the
                account, which the funds are transferred from. If you do hold
                open position(s), please submit the transfer request during
                weekdays.
              </p>
              <p className="mt-2">
                Please note that funds cannot be transferred between read-only
                accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MT5;
