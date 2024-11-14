import { useState } from "react";
import Head from "../sidebar/Head";
import Navbar from "../sidebar/Navbar";
import Side from "../sidebar/Side";
import axios from "axios";

const API_BASE_URL = "https://api.novotrend.co/api";
const WITHDRAW = `${API_BASE_URL}/withdraws_funds_add_wallet_bal_cash.php`;
const OTP_REQUEST_URL = `${API_BASE_URL}/send_otp.php`;

const Cash = () => {
  const [amount, setAmount] = useState("");
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpInputDisabled, setOtpInputDisabled] = useState(true);
  const [otpButtonDisabled, setOtpButtonDisabled] = useState(false);
  const token = localStorage.getItem("userToken");

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);

      if (value && !otpVerified) {
        setOtpInputDisabled(false);
      }
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
      setOtpError("");
    }
  };

  const data = {
    amount: amount,
    otp: otp,
    token: token,
    otp_type: "withdraw_cash_otp",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !otp) {
      return;
    }

    try {
      const response = await axios.post(WITHDRAW, data);
      console.log(response);
      const status = response.data.data.status;

      if (status === 200) {
        setAmount("");
        setOtp("");
        setOtpVerified(true);
        setOtpError("");
        setOtpInputDisabled(true);
        console.log("Withdrawal successful!");
      } else if (status === 400) {
        console.error("An error occurred while processing your request.");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);

      console.error("An error occurred while processing your request.");
    }
  };

  const requestOtp = async () => {
    if (!amount) {
      return;
    }

    try {
      const response = await axios.post(OTP_REQUEST_URL, data);
      console.log(response);
      const status = response.data.data.status;
      if (status) {
        setOtpVerified(false);
        setOtpError("");
        setOtpInputDisabled(false);
        setOtpButtonDisabled(true);
        console.info("OTP sent successfully!");

        setTimeout(() => {
          setOtpButtonDisabled(false);
        }, 45000);
      } else {
        setOtpError(response.data.message || "Failed to send OTP");
        console.error(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Error:", error);
      setOtpError("An error occurred while sending OTP.");
      console.error("An error occurred while sending OTP.");
    }
  };

  return (
    <div>
      <div className="flex bg-[#F6F8F8] ">
        <Side />
        <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
          <Head />
          <Navbar />
          <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50]">
            <div className="bg-white shadow-lg p-8 rounded-xl">
              <h1 className="text-xl font-bold mb-4">CASH 💸 </h1>
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
                Please note that the transaction description that appears on
                your card statement will vary depending on the financial gateway
                used. If you have any concerns about the transaction's
                description, please contact support@Novotrend.com
              </p>
              <div className="py-4">
                <h1>CASH FORM</h1>
                <img src="" alt="" />
              </div>
              <form className="grid grid-cols-2 gap-x-4">
                <div className="mb-4 text-xs col-span-1">
                  <label className="block mb-1" htmlFor="amount">
                    * Amount
                  </label>
                  <input
                    type="number"
                    id="amount"
                    className="w-full p-2 border rounded"
                    maxLength={5}
                    required
                    name="amount"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
                <div className="mb-4 text-xs col-span-1">
                  <label className="block mb-1" htmlFor="notes">
                    Enter OTP
                  </label>
                  <input
                    id="notes"
                    name="remark"
                    className="w-full p-2 border rounded"
                    rows="3"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={handleOtpChange}
                    disabled={otpInputDisabled}
                  />
                </div>
                <div className="flex justify-center col-span-2">
                  <button
                    type="button"
                    onClick={requestOtp}
                    disabled={otpVerified || otpButtonDisabled}
                    className={`bg-orange-500 text-white p-1 px-2 text-xs rounded ${
                      otpButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    id="requestOtp"
                  >
                    Send OTP
                  </button>
                </div>
              </form>
              <div className="border-t border-gray-300 my-4" />
              <div className="flex mb-4 text-xs ">
                <div className="flex-1"></div>
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
                  className={`bg-orange-500 text-white p-1 px-2 text-xs rounded ${
                    !amount || !otp ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleSubmit}
                  disabled={!amount || !otp}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cash;
