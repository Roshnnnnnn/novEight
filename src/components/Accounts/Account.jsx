import { GB as GBFlag } from "country-flag-icons/react/3x2";
import Side from "../sidebar/Side";
import Head from "../sidebar/Head";

const Account = () => {
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
      platform: "VantageInternational-Live 4",
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
      platform: "VantageInternational-Live 4",
    },
    {
      id: "1461486",
      type: "MT5",
      status: "Inactive",
      balance: "-",
      credits: "-",
      server: "Standard STP",
      platform: "VantageInternational-Live",
    },
  ];

  return (
    <div className="flex">
      <Side />
      <div className=" w-[70%] lg:w-[70%] xl:w-[70%] mx-auto relative z-10 m-2 rounded mt-4">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded mt-20">
          {/* Top Navigation - Made Responsive */}
          <div className="flex justify-between mb-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="border rounded-md px-4 py-1 text-xs bg-white shadow-md">
                <option>Live Account</option>
                <option>Demo Account</option>
              </select>
              <select className="border rounded-md px-4 py-1 text-xs bg-white shadow-md">
                <option>All</option>
                <option>Active</option>
                <option>Rejected</option>
                <option>Processing</option>
                <option>Pending</option>
                <option>Inactive</option>
              </select>
              <select className="border rounded-md px-4 py-2 text-xs bg-white shadow-md">
                <option disabled>Trading Platforms</option>
                <option>All</option>
                <option>MT4</option>
                <option>MT5</option>
                <option>Copy Trading</option>
              </select>
            </div>
            <div className="flex gap-4 w-full sm:w-auto justify-end text-xs">
              <button className="bg-white text-red-500 px-4 py-2 rounded-md flex items-center justify-center flex-1 sm:flex-none">
                <span className="mr-2">+</span>
                Open Account
              </button>
              <button className="p-2 border rounded-md">
                <span>⋮</span>
              </button>
            </div>
          </div>

          {/* Account Cards - Adjusted size and spacing */}
          <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="border my-4 rounded-lg p-2 bg-white w-[90%]"
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
                </div>

                {/* Account Details */}
                <div
                  className="flex flex-wrap gap-1 my-2 text-xs text-gray-500 mb-1"
                  style={{ fontSize: "12px" }}
                >
                  {account.leverage && <span>{account.leverage}</span>}
                  {account.server && <span>• {account.server}</span>}
                  {account.platform && <span>• {account.platform}</span>}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1 my-2">
                  <button className="px-2 py-1 border rounded text-xs hover:bg-gray-50">
                    Deposit
                  </button>
                  <button className="px-2 py-1 border rounded text-xs hover:bg-gray-50">
                    Trade
                  </button>
                  <button className="p-1 border rounded hover:bg-gray-50">
                    ⚙️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
