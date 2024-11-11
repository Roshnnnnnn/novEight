import Head from "../sidebar/Head";
import Side from "../sidebar/Side";

const TransferFunds = () => {
  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-[-50] m-2 rounded-lg mt-16 flex flex-col items-center justify-center mx-auto relative rounded-3xl text-center shadow-lg border border-gray-300 p-4">
          <div className="mb-4 w-[40%]">
            <label className="block text-xs font-medium text-gray-700 text-left">
              From
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded text-sm shadow-sm pl-4 h-10">
              <option>516025557 - $0.00 USD - Hedge STP</option>
              <option>516025557 - $0.00 USD - Hedge STP</option>
              <option>516025557 - $0.00 USD - Hedge STP</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4 w-[40%]">
            <label className="block text-xs font-medium text-gray-700 text-left">
              To
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded text-sm shadow-sm pl-4 h-10">
              <option>516278838 - $0.00 USD - Hedge STP</option>
              <option>516278838 - $0.00 USD - Hedge STP</option>
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
        <div className="justify-start flex border p-4 bg-white rounded-3xl">
          <div className="mt-4 text-xs text-gray-500">
            <span>Please note:</span>
            <p className="mt-2">
              You are responsible for maintaining an account balance that will
              not trigger a margin call. If you have any current open positions,
              please ensure you maintain the required margin in your account.
              Funds transferred to accounts held in the same currency are
              processed instantly.
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
              requests submitted on weekends will only be processed after manual
              review and if you do not hold any open positions in the account,
              which the funds are transferred from. If you do hold open
              position(s), please submit the transfer request during weekdays.
            </p>
            <p className="mt-2">
              Please note that funds cannot be transferred between read-only
              accounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferFunds;
