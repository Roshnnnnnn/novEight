import Head from "../sidebar/Head";
import Side from "../sidebar/Side";

const BrokerToBrokerTransfer = () => {
  return (
    <div className="flex">
      <Side />
      <div className=" w-[70%] lg:w-[70%] xl:w-[70%] mx-auto relative z-10 m-2 rounded mt-4">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded mt-20 p-4 bg-white shadow-md">
          <h2 className="text-xl font-bold">BROKER TO BROKER</h2>
          <p className="py-2 text-xs">
            How to transfer funds from another broker to Vantage
          </p>
          <ol className="list-decimal ml-5 text-xs">
            <li>Download and complete the Broker to Broker Transfer Form</li>
            <li>
              Complete the online form below and send to Support@vantage.com
            </li>
            <li>
              Vantage will verify the form and provide you the detail of
              transfer
            </li>
            <li>
              Send the broker to broker detail to your previous broker to
              request the transfer
            </li>
            <li>Provide the transfer receipt to Vantage.</li>
          </ol>
          <form className="grid grid-cols-2 gap-4 mt-5 text-xs">
            <div className="mb-4">
              <label className="block mb-1" htmlFor="accountNumber">
                Account Number
              </label>
              <select id="accountNumber" className="border rounded w-full p-2">
                <option>51602557 - $0 USD - Hedge STP</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="amount">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                className="border rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="transferForm">
                Broker to Broker Transfer Form
              </label>
              <input
                type="file"
                id="transferForm"
                className="border rounded w-full p-2"
              />
              <div className="flex justify-center">
                <p
                  className="text-xs text-gray-500 mt-1"
                  style={{ fontSize: "11px" }}
                >
                  Supported file types: png, jpg, jpeg, bmp, pdf, doc, docx
                  <br />
                  Maximum upload file size: 5MB
                  <br />
                  Maximum file number: 1
                </p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1" htmlFor="notes">
                Important notes
              </label>
              <input
                id="notes"
                className="border rounded w-full p-2"
                rows="3"
              ></input>
            </div>
          </form>

          <p className="py-3 text-gray-500">
            Alternatively, you can email your transaction receipt to
            support@Novotrend.com at your earliest convenience
          </p>
          <div className="flex justify-center px-3">
            <button
              type="submit"
              className="bg-orange-500 text-white rounded p-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerToBrokerTransfer;
