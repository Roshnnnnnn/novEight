import { useState } from "react";
import { GB as GBFlag } from "country-flag-icons/react/3x2";
import Side from "../sidebar/Side";
import Head from "../sidebar/Head";
import { US as USFlag } from "country-flag-icons/react/3x2";
import { EU as EUFlag } from "country-flag-icons/react/3x2";
import Swap from "../../assets/img/swap.png";
import swapfree from "../../assets/img/swapstandard.png";
import standard from "../../assets/img/standard.png";
import raw from "../../assets/img/raw.png";
import trading from "../../assets/img/trading.png";
import pamm from "../../assets/img/pamm.png";
import perpetual from "../../assets/img/perpetual.png";
import { Link } from "react-router-dom";
import Phone from "../../assets/img/download_phone.webp";

const Account = () => {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [activeAccount, setActiveAccount] = useState("live");
  const [accountType, setAccountType] = useState("");
  const [activeLeverage, setActiveLeverage] = useState("100 : 1");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [selectedBalance, setSelectedBalance] = useState("$1000");

  const openAccountModal = () => setIsAccountModalOpen(true);
  const closeAccountModal = () => setIsAccountModalOpen(false);

  const openTradeModal = () => setIsTradeModalOpen(true);
  const closeTradeModal = () => setIsTradeModalOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const accounts = [
    {
      id: "51602557",
      type: "MT5",
      status: "Active",
      balance: 0.0,
      credits: 0.0,
      currency: "USD",
      leverage: "500:1",
      server: "Standard STP",
      platform: "NovotrendInternational-Live 4",
    },
    {
      id: "51627838",
      type: "MT5",
      status: "Active",
      balance: 0.0,
      credits: 0.0,
      currency: "USD",
      leverage: "500:1",
      server: "Standard STP",
      platform: "NovotrendInternational-Live 4",
    },
    {
      id: "1461486",
      type: "MT5",
      status: "Inactive",
      balance: "-",
      credits: "-",
      server: "Standard STP",
      platform: "NovotrendInternational-Live",
    },
  ];

  // Function to handle clicks outside the modal
  const handleOverlayClick = (e) => {
    if (e.target.className.includes("overlay")) {
      closeModal();
    }
  };

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-[-50] m-2 rounded-lg mt-16">
          {/* Top Navigation - Made Responsive */}
          <div className="flex justify-between mb-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                className="border rounded-md px-4 py-1 text-xs bg-white shadow-md"
                id="accountTypeSelector"
                onChange={handleAccountTypeChange}
              >
                <option>Live Account</option>
                <option>Demo Account</option>
              </select>

              <select
                className="border rounded-md px-4 py-1 text-xs bg-white shadow-md"
                id="statusSelector"
              >
                <option>All</option>
                <option>Active</option>
                <option>Rejected</option>
                <option>Processing</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
              <select
                className="border rounded-md px-4 py-2 text-xs bg-white shadow-md"
                id="platformSelector"
              >
                <option disabled>Trading Platforms</option>
                <option>All</option>
                <option>MT4</option>
                <option>MT5</option>
                <option>Copy Trading</option>
              </select>
            </div>
            <div className="flex gap-4 w-full sm:w-auto justify-end text-xs">
              <button
                onClick={openModal}
                className="bg-white text-red-500 px-4 py-2 rounded-md flex items-center justify-center"
              >
                <span className="mr-2">+</span>
                Open Account
              </button>
              <button className="p-2 border rounded-md">
                <span>⋮</span>
              </button>
            </div>
          </div>

          {/* Account Cards - Adjusted size and spacing */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 justify-center items-center">
            {accounts.map((account) => (
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
                    {account.status}
                  </span>
                </div>

                {/* Balance Display - Updated with country flag */}
                <div className="flex items-center  mb-1">
                  <GBFlag className="w-3 h-3 mr-1" />
                  <span className="text-xs font-medium">{account.balance}</span>
                  <span className="ml-1 text-xs text-gray-500">
                    {account.currency}
                  </span>
                </div>

                {/* Credits & Balance */}
                <div className="flex gap-2 mb-1 text-xs my-2">
                  <div>
                    <span className="text-gray-500 font-bold">Credits: </span>
                    <span className="font-bold">{account.credits}</span>
                    <span className="ml-1 text-red-500">!</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Balance: </span>
                    <span>{account.balance}</span>
                  </div>
                  <div className="flex gap-1 justify-end text-gray-600 pl-[9rem]">
                    <button className="px-2 py-1 border rounded text-xs hover:bg-gray-200">
                      <Link to={"/depositFunds"}>Deposit</Link>
                    </button>
                    <button
                      className="px-2 py-1 border rounded text-xs hover:bg-gray-200"
                      onClick={openTradeModal}
                    >
                      Trade
                    </button>
                    <button className="p-1 border rounded hover:bg-gray-200">
                      ⚙️
                    </button>
                  </div>
                </div>
                <div className="flex">
                  {/* Account Details */}
                  <div
                    className="flex flex-wrap gap-1 my-2 text-xs text-gray-500 mb-1"
                    style={{ fontSize: "12px" }}
                  >
                    {account.leverage && <span>{account.leverage}</span>}
                    {account.server && <span>• {account.server}</span>}
                    {account.platform && <span>• {account.platform}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trade Modal */}
          {isTradeModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center overlay bg-black bg-opacity-50">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[40rem] sm:w-[35rem] max-h-[80vh] overflow-hidden hide-scrollbar">
                <h2 className="text-lg font-semibold mb-4">Trade</h2>
                {/* Add your trade content here */}
                <button
                  onClick={closeTradeModal}
                  className="border rounded p-2 w-full text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Account Modal */}
          {isAccountModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center overlay bg-black bg-opacity-50"
              onClick={closeAccountModal}
            >
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[40rem] sm:w-[35rem] max-h-[80vh] overflow-hidden hide-scrollbar">
                <h2 className="text-lg font-semibold mb-4">Open Account</h2>

                <button
                  onClick={closeAccountModal}
                  className="border rounded p-2 w-full text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center overlay bg-black bg-opacity-50"
              onClick={handleOverlayClick}
            >
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[40rem] sm:w-[35rem] max-h-[80vh] overflow-hidden hide-scrollbar">
                <h2 className="text-lg pl-4 font-semibold mb-4 sticky top-0 bg-white z-10">
                  Open Account
                </h2>
                <div className="overflow-y-auto p-4 max-h-[70vh] hide-scrollbar">
                  {/* Form Elements */}
                  <div className="flex justify-between mb-4 text-xs gap-x-4">
                    <button
                      className={`border rounded p-2 w-full text-center ${
                        activeAccount === "live"
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500"
                      }`}
                      onClick={() => setActiveAccount("live")}
                    >
                      Live Account
                    </button>
                    <button
                      className={`border rounded p-2 w-full text-center ${
                        activeAccount === "demo"
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500"
                      }`}
                      onClick={() => setActiveAccount("demo")}
                    >
                      Demo Account
                    </button>
                  </div>
                  <form>
                    <label className="block mb-1 text-xs">
                      Choose A Trading Platform
                    </label>
                    <select className="border pl-4 rounded-md w-full mb-2 text-xs h-10">
                      <option className="pl-4 py-2">
                        Recommended-MetaTrader 5
                      </option>
                      <option className="pl-4 py-2">
                        Recommended-MetaTrader 5
                      </option>
                      <option className="pl-4 py-2">
                        Recommended-MetaTrader 5
                      </option>
                      <option className="pl-4 py-2">
                        Recommended-MetaTrader 5
                      </option>
                      {/* Other options... */}
                    </select>
                    <label className="block mb-1 text-xs">
                      Choose An Account Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2">
                      {[
                        { name: "Standard", img: standard },
                        { name: "RAW", img: raw },
                        { name: "SWAP-FREE", img: swapfree },
                        { name: "TradingView", img: trading },
                        { name: "PAMM", img: pamm },
                        { name: "Perpetual", img: perpetual },
                        { name: "Swap", img: Swap },
                      ].map(({ name, img }) => (
                        <button
                          key={name}
                          type="button"
                          className={`rounded border  w-full text-xs font-semibold flex items-center justify-center ${
                            accountType === name
                              ? "bg-[#FCEEE9] text-[#FCEEE9] border border-orange-500"
                              : "bg-white text-[#2C3E50] border border-[#FCEEE9]"
                          }`}
                          onClick={() => {
                            setAccountType(name);
                          }}
                        >
                          <img
                            src={img}
                            alt={name}
                            className="h-10 w-[7rem] object-contain "
                          />
                        </button>
                      ))}
                    </div>
                    <label className="block mb-1 text-xs">
                      Choose An Account Currency
                    </label>
                    <div className="flex gap-2 mb-2">
                      <button
                        type="button"
                        className={`border rounded p-2 w-full text-xs flex items-center ${
                          selectedCurrency === "USD"
                            ? "border-orange-500 bg-orange-50"
                            : ""
                        }`}
                        onClick={() => setSelectedCurrency("USD")}
                      >
                        <USFlag className="w-4 h-4 mr-1" /> USD
                      </button>
                      <button
                        type="button"
                        className={`border rounded p-2 w-full text-xs flex items-center ${
                          selectedCurrency === "GBP"
                            ? "border-orange-500 bg-orange-100"
                            : ""
                        }`}
                        onClick={() => setSelectedCurrency("GBP")}
                      >
                        <GBFlag className="w-4 h-4 mr-1" /> GBP
                      </button>
                      <button
                        type="button"
                        className={`border rounded p-2 w-full text-xs flex items-center ${
                          selectedCurrency === "EUR"
                            ? "border-orange-500 bg-orange-100"
                            : ""
                        }`}
                        onClick={() => setSelectedCurrency("EUR")}
                      >
                        <EUFlag className="w-4 h-4 mr-1" /> EUR
                      </button>
                      {/* Add other currencies with flags... */}
                    </div>
                    <label className="block mb-1 text-xs">
                      Choose Leverage
                    </label>
                    <div className="flex gap-2 mb-2 ">
                      {[
                        "100 : 1",
                        "200 : 1",
                        "300 : 1",
                        "400 : 1",
                        "500 : 1",
                      ].map((leverage) => (
                        <button
                          key={leverage}
                          type="button"
                          className={`rounded p-2 w-full text-xs ${
                            activeLeverage === leverage
                              ? "border border-orange-500 bg-orange-100 text-orange-500"
                              : "bg-[#F6F8F8] text-[#2C3E50]"
                          }`}
                          onClick={() => setActiveLeverage(leverage)}
                        >
                          {leverage}
                        </button>
                      ))}
                    </div>
                    <label className="block mb-1 text-xs">
                      Account Balance
                    </label>
                    <div className="flex gap-2 mb-2">
                      {["$1000", "$2500", "$5k"].map((balance) => (
                        <button
                          key={balance}
                          type="button"
                          className={`border rounded p-2 w-full text-xs ${
                            selectedBalance === balance
                              ? "border border-orange-500 bg-orange-100 text-orange-500"
                              : "bg-[#F6F8F8] text-[#2C3E50]"
                          }`}
                          onClick={() => setSelectedBalance(balance)}
                        >
                          {balance}
                        </button>
                      ))}
                      {/* Add other balances... */}
                    </div>
                    <label className="block mb-1 text-xs">
                      Additional Notes
                    </label>
                    <input
                      placeholder="Eg. IB/MAM/Server Location"
                      className="border-2 pl-4 rounded-md w-full mb-2 text-xs h-10 focus:outline-none"
                    />

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
                    {/* Terms and Conditions */}
                    <div className="mt-4 text-xs">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                          className="mr-2"
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
