import Head from "../sidebar/Head";
import Side from "../sidebar/Side";

const AppleGooglePay = () => {
  return (
    <div className="flex">
      <Side />
      <div className=" w-[70%] lg:w-[70%] xl:w-[70%] mx-auto relative z-10 m-2 rounded mt-4">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded mt-20 p-4 bg-white shadow-md">
          <h1 className="text-xl font-bold mb-4">Apple Pay/Google Pay</h1>
          <p className="mb-4 text-xs font-semibold">
            How to fund your account with Apple Pay/Google Pay
          </p>
          <ol className="list-decimal list-inside mb-4 text-xs">
            <li>Complete the form below and press ‘Submit’</li>
            <li>After entering your card details, press ‘Submit’</li>
            <li>
              You will be redirected back to the client portal and your
              transaction will be finalized
            </li>
          </ol>
          <p className="text-xs my-2">
            Please note that the transaction description that appears on your
            card statement will vary depending on the financial gateway used. If
            you have any concerns about the transaction's description, please
            contact support@Novotrend.com
          </p>
          <div className="py-4">
            <h1>Apple Pay/Google Pay FORM</h1>
          </div>
          <form className="grid grid-cols-2 gap-4">
            <div className="mb-4 text-xs">
              <label className="block mb-1" htmlFor="accountNumber">
                * Account Number
              </label>
              <select id="accountNumber" className="w-full p-2 border rounded">
                <option>Select</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="mb-4 text-xs">
              <label className="block mb-1" htmlFor="amount">
                * Amount
              </label>
              <input
                type="number"
                id="amount"
                className="w-full p-2 border rounded"
                defaultValue="0"
              />
            </div>
            <div className="mb-4 text-xs">
              <label className="block mb-1" htmlFor="notes">
                Important notes
              </label>
              <input
                id="notes"
                className="w-full p-2 border rounded"
                rows="3"
              />
            </div>
          </form>
          <div className="flex mb-4 text-xs ">
            <div className="flex-1">
              <label className="block mb-1" htmlFor="voucher">
                Voucher
              </label>
              <select id="voucher" className="w-full p-2 border rounded">
                <option>Select a deposit rebate voucher</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="flex-1 ml-6 justify-center">
              <h2 className="font-bold mb-2">Deposit Summary</h2>
              <div className="flex justify-between">
                <p className="mb-1">Deposit Amount:</p>
                <p className="mb-1">0.00</p>
              </div>
              <div className="flex justify-between">
                <p className="mb-1">Deposit Repost:</p>
                <p> -</p>
              </div>
              <div className="flex justify-between">
                <p className="mb-1">Net Deposit Amount: </p>
                <p> 0.00</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 text-white p-1 px-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleGooglePay;
