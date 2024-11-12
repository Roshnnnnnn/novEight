import { useState } from "react";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import Navbar from "../sidebar/Navbar";

const WalletHistory = () => {
  const [fdate, setFdate] = useState("");
  const [edate, setEdate] = useState("");
  const [transactionType, setTransactionType] = useState("All");
  const [transactionStatus, setTransactionStatus] = useState("All");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = () => {
    if (!fdate || !edate) {
      setValidationError("Please select both 'From' and 'To' dates.");
      return;
    }

    setValidationError("");

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsFiltered(true);
    }, 1000);
  };

  const handleReset = () => {
    setFdate("");
    setEdate("");
    setTransactionType("All");
    setTransactionStatus("All");
    setIsFiltered(false);
    setValidationError("");
    setError("");
  };

  return (
    <div className="flex bg-[#F6F7F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded lg:mt-16 md:mt-4">
        <Head />
        <Navbar />
        <div className="mx-auto relative z-[-50] m-2 rounded-lg ">
          {/* Date Filter Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="form-group flex-1 md:flex-1">
                <label
                  htmlFor="from"
                  className="block text-xs font-medium text-gray-700"
                >
                  From
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full text-xs border-gray-300 rounded focus:outline-none"
                  id="from"
                  value={fdate}
                  onChange={(e) => setFdate(e.target.value)}
                  max={today}
                />
              </div>
              <div className="form-group flex-1 md:flex-1">
                <label
                  htmlFor="to"
                  className="block text-xs font-medium text-gray-700"
                >
                  To
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full text-xs border-gray-300 rounded focus:outline-none"
                  id="to"
                  value={edate}
                  onChange={(e) => setEdate(e.target.value)}
                  max={today}
                />
              </div>

              <div className="form-group flex-1 md:flex-1">
                <label
                  htmlFor="transaction-type-select"
                  className="block text-xs font-medium text-gray-900"
                >
                  Type
                </label>
                <select
                  className="mt-1 block w-full text-xs border-gray-300 rounded focus:outline-none"
                  id="transaction-type-select"
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                >
                  <option>All</option>
                  <option>Bank</option>
                  <option>Cash</option>
                  <option>Crypto</option>
                </select>
              </div>
              <div className="form-group flex-1 md:flex-1">
                <label
                  htmlFor="transaction-status-select"
                  className="block text-xs font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  className="mt-1 block w-full text-xs border-gray-300 rounded focus:outline-none"
                  id="transaction-status-select"
                  value={transactionStatus}
                  onChange={(e) => setTransactionStatus(e.target.value)}
                >
                  <option>All</option>
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </div>

              <div className="flex gap-2 mt-4 lg:mt-0 flex-wrap">
                <button
                  className="btn text-xs text-white bg-orange-600 hover:bg-orange-700 rounded-md px-4 shadow-md transition duration-200"
                  onClick={handleSubmit}
                  disabled={isSubmitButtonDisabled}
                >
                  Submit
                </button>
                {isFiltered && (
                  <button
                    className="btn text-xs text-black bg-gray-900 hover:bg-gray-700 rounded-md px-4 py-2 shadow-md transition duration-200"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                )}
              </div>
              {loading && (
                <p className="mt-2 text-xs text-gray-500">Loading...</p>
              )}
              {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
              {validationError && (
                <p className="mt-2 text-xs text-red-500">{validationError}</p>
              )}
            </div>
            <p className="my-4 text-xs">
              <strong>Deposit:</strong> 90
            </p>

            {/* Deposit Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border text-xs">Date</th>
                    <th className="border text-xs">Amount</th>
                    <th className="border text-xs">Payment Type</th>
                    <th className="border text-xs">Receipt</th>
                    <th className="border text-xs">Comment</th>
                    <th className="border text-xs">Status</th>
                    <th className="border text-xs">Remark</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 text-xs text-gray-500">
                      Invalid Date
                    </td>
                    <td className="px-4 py-4 text-xs text-gray-500">1000.00</td>
                    <td className="px-4 py-4 text-xs text-gray-500">cash</td>
                    <td className="px-4 py-4 text-xs text-gray-500">Receipt</td>
                    <td className="px-4 py-4 text-xs text-gray-500">
                      kr diya na
                    </td>
                    <td className="px-4 py-4 text-xs text-gray-500">
                      Approved
                    </td>
                    <td className="px-4 py-4 text-xs text-gray-500">
                      kr diya na
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;
