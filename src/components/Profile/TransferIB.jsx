const TransferIB = () => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md ">
      <form>
        <div className="mb-4 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 items-center">
          <div>
            <label
              htmlFor="partnershipType"
              className="block  font-medium text-gray-700 mb-6"
            >
              * Partnership Type
            </label>
            <select
              id="partnershipType"
              className="mt-1  pl-4 block w-full border rounded-md shadow-sm h-12 focus:outline-none"
            >
              <option value="" disabled></option>
              <option value="">Select Partnership Type</option>
              <option value="">Select Partnership Type</option>
              <option value="">Select Partnership Type</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="newCPAID"
              className="block text-xs font-medium text-gray-700"
            >
              * New CPA ID (Affiliate Code) / IB Number (Rebate Account) /
              Promotion Invitation Code
            </label>
            <input
              id="newCPAID"
              type="text"
              className="mt-1 p-4 block w-full border rounded-md shadow-sm h-12 focus:outline-none"
              placeholder="Enter details"
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-4">
          <label className="block text-xs font-medium text-gray-700">
            Reason for Transfer
          </label>
          <textarea
            className="mt-1 p-4 block w-full border rounded-md shadow-sm h-24 focus:outline-none"
            rows="4"
            placeholder="Enter reason"
          />
        </div>

        <div className="mb-1">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-xs">
              I confirm that I have closed all open positions
            </span>
          </label>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox " />
            <span className="ml-2 text-xs ">
              I agree to transfer all my trading accounts to the new IB/CPA
            </span>
          </label>
        </div>

        <div className="flex justify-center ">
          <button className="w-40 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600">
            Submit
          </button>
        </div>
      </form>

      <div className="mt-4 text-xs text-gray-600">
        <p>Please note:</p>
        <ol className="list-decimal list-inside">
          <li>
            IB/CPA transfer requests are subject to review based on trading and
            deposit history.
          </li>
          <li>A client account can only be connected to one affiliate.</li>
          <li>Only one IB transfer is permitted per client.</li>
        </ol>
      </div>
    </div>
  );
};

export default TransferIB;
