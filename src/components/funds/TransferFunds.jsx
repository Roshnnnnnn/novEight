import { useEffect, useState } from "react";
import Head from "../sidebar/Head";
import Navbar from "../sidebar/Navbar";
import Side from "../sidebar/Side";
import axios from "axios";

const API_BASE_URL = "https://api.novotrend.co/api";
const ACCOUNT_LIST = `${API_BASE_URL}/mt5_accounts_list.php`;
const TRANSFER = `${API_BASE_URL}/mt5_to_mt5_tranfer_api.php`;

const truncateOption = (option) => {
  const words = option.split(" ");
  return window.innerWidth <= 768 && words.length > 15
    ? words.slice(0, 15).join(" ") + "..."
    : option;
};

const TransferFunds = () => {
  const [accounts, setAccounts] = useState([]);
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(ACCOUNT_LIST, { token });
        console.log(response);
        setAccounts(response.data.data.response || []);
      } catch (err) {
        console.error("Failed to fetch accounts", err);
        setError("Failed to load accounts");
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!fromAccount || !toAccount || !amount || !note) {
      setError("Please fill all fields");
      return;
    }

    if (fromAccount === toAccount) {
      setError("Cannot transfer to the same account");
      return;
    }

    if (parseFloat(amount) <= 0) {
      setError("Amount must be greater than 0");
      return;
    }

    const formData = {
      senderid: fromAccount,
      receiverid: toAccount,
      amount,
      note,
      token,
    };

    try {
      const response = await axios.post(TRANSFER, formData);
      console.log(response);
      if (response.data.status === "success") {
        // Handle success (e.g., show a success message, reset form, etc.)
        console.log("Transfer successful");
        // Reset form fields
        setFromAccount("");
        setToAccount("");
        setAmount("");
        setNote("");
      } else {
        setError(response.data.message || "Transfer failed");
      }
    } catch (err) {
      console.error("Submission error", err);
      setError("An error occurred during the transfer");
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
                {accounts && accounts.length > 0 ? (
                  accounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.accno}
                    </option>
                  ))
                ) : (
                  <option value="">No accounts available</option>
                )}
              </select>

              <div className="mb-4 w-full">
                <label className="block text-xs font-medium text-gray-700 text-left">
                  To
                </label>
                <select
                  value={toAccount}
                  onChange={(e) => setToAccount(e.target.value)}
                  name="mt5accountselect"
                  id="mt5accountselect"
                  className="mt-1 block w-full border border-gray-300 rounded text-xs shadow-sm pl-4 h-10"
                >
                  <option value="">Select Account</option>
                  {accounts && accounts.length > 0 ? (
                    accounts
                      .filter((account) => account.id !== fromAccount)
                      .map((account) => (
                        <option key={account.id} value={account.id}>
                          {account.accno}
                        </option>
                      ))
                  ) : (
                    <option value="">No accounts available</option>
                  )}
                </select>
              </div>
              <div className="mb-4 w-full">
                <label className="block text-xs font-medium text-gray-700 text-left">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
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

export default TransferFunds;
