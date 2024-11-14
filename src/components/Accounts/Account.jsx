import { useEffect, useState } from "react";
import { GB as GBFlag } from "country-flag-icons/react/3x2";
import Side from "../sidebar/Side";
import Head from "../sidebar/Head";
import { Link } from "react-router-dom";
import Navbar from "../sidebar/Navbar";
import axios from "axios";

const API_BASE_URL = "https://api.novotrend.co/api";
const LIVE_ACCOUNT_LIST = `${API_BASE_URL}/open_live_account_list.php`;
const OPEN_LIVE_ACCOUNT = `${API_BASE_URL}/open_live_account_add.php`;
const LIST = `${API_BASE_URL}/list_group.php`;

const Account = () => {
  // State variables
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [activeAccount, setActiveAccount] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountList, setAccountList] = useState(null);
  const [activeLeverage, setActiveLeverage] = useState("");
  const [account, setAccounts] = useState([]);
  const token = localStorage.getItem("userToken");
  const [formData, setFormData] = useState({
    groupname: "",
    leverage: "",
    mainpassword: "",
    investorpassword: "",
    groupid: "",
  });

  // Function to fetch accounts
  const fetchAccounts = async () => {
    try {
      const response = await axios.post(LIVE_ACCOUNT_LIST, { token });
      if (response.data.data.status === 200) {
        const accountsData = response.data.data.response;
        setAccounts(Array.isArray(accountsData) ? accountsData : []);
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  // Function to fetch account types
  const fetchAccountTypes = async () => {
    try {
      const response = await axios.post(LIST, { token });
      if (response.data.data.status === 200) {
        setAccountList(response.data.data.response);
      }
    } catch (error) {
      console.error("Error fetching account types:", error);
    }
  };

  // useEffect hooks for fetching data
  useEffect(() => {
    fetchAccounts();
    fetchAccountTypes();
  }, [token]);

  // Function to handle account type change
  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  // Function to open a new account
  const handleOpenNewAccount = async () => {
    const selectedGroupId = accountList.find(
      (item) => item.groupname === activeAccount
    )?.groupid;

    const requestData = {
      selectgroup: selectedGroupId,
      accleverage: formData.leverage,
      mainpassword: formData.mainpassword,
      investorpassword: formData.investorpassword,
      token,
    };

    try {
      const response = await axios.post(OPEN_LIVE_ACCOUNT, requestData);
      if (response.data.data.status === 200) {
        await fetchAccounts(); // Refresh account list
      } else {
        console.error("Invalid group selected: " + response.data.data.message);
      }
    } catch (error) {
      console.error("Error opening new account:", error);
    } finally {
      // Reset form data
      setFormData({
        groupname: "",
        leverage: "",
        mainpassword: "",
        investorpassword: "",
        groupid: "",
      });
      setActiveAccount("");
      setActiveLeverage("");
      closeModal();
    }
  };

  const openTradeModal = () => setIsTradeModalOpen(true);
  const closeTradeModal = () => setIsTradeModalOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="lg:w-[60%] md:w-[90%] sm:w-[90%] mx-auto relative z-10 m-2 rounded lg:mt-16 md:mt-4">
        <Head />
        <Navbar />
        <div className="mx-auto relative z-[-50] m-2 rounded-lg  md:mt-4 h-[80vh]">
          <div className="flex justify-between gap-4 mb-4">
            <select
              className="border rounded-md px-4 py-1 text-xs bg-white shadow-md"
              id="accountTypeSelector"
              onChange={handleAccountTypeChange}
            >
              <option>Live Account</option>
              <option>Demo Account</option>
            </select>

            <div className="flex gap-4 w-full sm:w-auto justify-end text-xs mt-2 sm:mt-0">
              <button
                onClick={openModal}
                className="bg-white text-red-500 px-4 py-2 rounded-md flex items-center justify-center"
              >
                <span className="mr-2">+</span>
                Open Account
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-4 text-xs gap-y-2 justify-center items-center">
            {account.map((account) => (
              <div
                key={account.id}
                className="border my-1 p-4 rounded-lg p-2 bg-white w-full"
              >
                {/* Account Header */}
                <div className="flex justify-between items-center mb-1 relative">
                  <div className="flex items-center">
                    <span className="text-gray-500 text-xs">
                      {account.type}
                    </span>
                    <span className="ml-1 text-xs">{account.id}</span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      account.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {account.account_type}
                  </span>
                </div>

                <div className="flex items-center mb-1">
                  <GBFlag className="w-3 h-3 mr-1" />
                  <span className="text-xs font-medium">
                    {account.balance} USD
                  </span>
                  <span className="ml-1 text-xs text-gray-500">
                    {account.currency}
                  </span>
                </div>

                <div className=" gap-2 mb-1 text-xs my-2 ">
                  <div className="flex items-center">
                    <span className="text-gray-500 font-bold text-xs">
                      Account:{" "}
                    </span>
                    <span className=" text-xs">{account.accno}</span>
                    <span className="mx-1 text-red-500 text-xs">|</span>
                    <span className="text-gray-500 text-xs">Balance: </span>
                    <span className="text-xs">{account.balance} USD</span>
                  </div>
                </div>

                <div className=" flex flex-col md:flex-row sm:flex-row justify-between text-gray-600 gap-x-2">
                  <div
                    className="flex flex-wrap gap-1 my-2 text-xs text-gray-500 mb-1"
                    style={{ fontSize: "12px" }}
                  >
                    Leverages:{" "}
                    {account.leverages && <span>{account.leverages}</span>}
                  </div>
                  <div className="gap-2">
                    <button className="px-2 py-1 border rounded text-xs hover:bg-gray-200 w-full sm:w-auto mb-2">
                      <Link to={"/depositFunds"}>Deposit</Link>
                    </button>
                    <button
                      className="px-2 py-1 border rounded text-xs hover:bg-gray-200 w-full sm:w-auto mb-2"
                      onClick={openTradeModal}
                    >
                      Trade
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isTradeModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center overlay bg-black bg-opacity-50">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[40rem] sm:w-[35rem] max-h-[80vh] overflow-hidden hide-scrollbar">
                <h2 className="text-lg font-semibold mb-4">Download APP</h2>
                <p className="text-sm mb-4">Start The Copy Trading Journey</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Select the ideal strategy</li>
                  <li>Allocate money and start copying</li>
                  <li>Rest assured and check the investment performance</li>
                </ul>
                <div className="flex justify-around mb-4">
                  <button className="border rounded p-2 w-full text-xs">
                    Download On The App Store
                  </button>
                  <button className="border rounded p-2 w-full text-xs">
                    Get It On Google Play
                  </button>
                  <button className="border rounded p-2 w-full text-xs">
                    Download On The Android
                  </button>
                </div>
                <div className="flex justify-center">
                  <img
                    src="path/to/qr-code.png"
                    alt="QR Code"
                    className="w-24 h-24"
                  />
                </div>
                <button
                  onClick={closeTradeModal}
                  className="border rounded p-2 w-full text-xs mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center overlay bg-black bg-opacity-50">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[40rem] sm:w-[35rem] max-h-[80vh] overflow-hidden hide-scrollbar">
                <h2 className="text-lg pl-4 font-semibold mb-4 sticky top-0 bg-white z-10">
                  Open Account
                </h2>
                <div className="overflow-y-auto p-4 max-h-[70vh] hide-scrollbar">
                  <div className="flex justify-between mb-4 text-xs gap-x-4">
                    {accountList.map((item, index) => (
                      <button
                        key={index}
                        className={`border rounded p-2 w-full text-center ${
                          activeAccount === item.groupname
                            ? "bg-orange-500 text-white"
                            : "bg-white text-orange-500"
                        }`}
                        onClick={() => {
                          setActiveAccount(item.groupname);
                        }}
                      >
                        {item.groupname}
                      </button>
                    ))}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleOpenNewAccount();
                    }}
                  >
                    <label className="block mb-1 text-xs">Main Password</label>
                    <input
                      type="password"
                      placeholder="Enter Main Password"
                      className="border-2 pl-4 rounded-md w-full mb-2 text-xs h-10 focus:outline-none"
                      value={formData.mainpassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mainpassword: e.target.value,
                        })
                      }
                      required
                    />

                    <label className="block mb-1 text-xs">
                      Investor Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter Investor Password"
                      className="border-2 pl-4 rounded-md w-full mb-2 text-xs h-10 focus:outline-none"
                      value={formData.investorpassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          investorpassword: e.target.value,
                        })
                      }
                      required
                    />

                    <label className="block mb-1 text-xs">
                      Choose Leverage
                    </label>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 mb-2">
                      {[
                        "10",
                        "50",
                        "100",
                        "200",
                        "300",
                        "500",
                        "800",
                        "1000",
                      ].map((leverage) => (
                        <button
                          key={leverage}
                          type="button"
                          className={`rounded p-2 w-full text-xs ${
                            activeLeverage === leverage
                              ? "bg-orange-500 text-white border border-orange-500"
                              : "bg-[#F6F8F8] text-[#2C3E50]"
                          }`}
                          onClick={() => {
                            setActiveLeverage(leverage);
                            setFormData({
                              ...formData,
                              leverage: leverage,
                            });
                            console.log("Selected Leverage: " + leverage);
                          }}
                          required
                        >
                          {leverage}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 text-xs">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                          className="mr-2"
                          required
                        />
                        By ticking this box:
                      </label>
                      <ol className="list-decimal ml-4">
                        <li>
                          I acknowledge I have read and understood the{" "}
                          <a href="#" className="text-blue-500">
                            Risk Warning Notice
                          </a>
                          .
                        </li>
                        <li>
                          I acknowledge that I have read, understood and accept
                          the{" "}
                          <a href="#" className="text-blue-500">
                            Novotrend Client Agreement
                          </a>
                          .
                        </li>
                        <li>
                          I understand that Novotrend will not provide me with
                          any investment advice.
                        </li>
                        <li>
                          I also confirm that I have read, understood and agree
                          to be bound by Novotrend{" "}
                          <a href="#" className="text-blue-500">
                            Privacy Policy
                          </a>
                          .
                        </li>
                        <li>
                          I understand that personal information submitted as
                          part of this application...
                        </li>
                        <li>
                          I confirm that the information provided by me and
                          inserted in this form is correct...
                        </li>
                        <li>
                          I confirm that I have acted in my own name as
                          specified in this application...
                        </li>
                        <li>
                          I agree to be bound by Novotrend’s{" "}
                          <a href="#" className="text-blue-500">
                            deposits and withdrawals policy
                          </a>
                          .
                        </li>
                        <li>
                          I have read, understood and agreed to be bound by
                          Novotrend’s deposits and withdrawals policy.
                        </li>
                        <li>
                          I confirm that my registration was made at my own
                          initiative and that no solicitation has been made by
                          Novotrend.
                        </li>
                      </ol>
                    </div>
                    <div className="flex justify-between mt-4 gap-x-4">
                      <button
                        type="submit"
                        className={`rounded p-2 w-full text-xs ${
                          isChecked
                            ? "bg-orange-500 text-white"
                            : "bg-orange-500 text-white"
                        }`}
                        disabled={!isChecked}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="border rounded p-2 w-full text-xs"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
