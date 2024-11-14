import Head from "../../components/sidebar/Head";
import Side from "../../components/sidebar/Side";
import { FaEthereum } from "react-icons/fa";
import { TbBrandBinance } from "react-icons/tb";
import { SiPolymerproject } from "react-icons/si";
import { PiPolygonFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../sidebar/Navbar";

const API_BASE_URL = "https://api.novotrend.co/api";
const CRYPTO_URL = `${API_BASE_URL}/withdrwa_fund_withdraw_crypto_api.php`;
const OTP_REQUEST_URL = `${API_BASE_URL}/send_otp.php`;

const cryptocurrencies = [
  {
    type: "USDT-MATIC20",
    img: <FaEthereum />,
    chain: "eth",
  },
  {
    type: "USDT-TRC20",
    img: <PiPolygonFill />,
    chain: "tron",
  },
  {
    type: "USDT-BEP20",
    img: <TbBrandBinance />,
    chain: "bsc",
  },
  {
    type: "USDT-ETH20",
    img: <SiPolymerproject />,
    chain: "polygon",
  },
];

const CryptoCurrency = () => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState({ icon: null });
  const [activeCrypto, setActiveCrypto] = useState(null);
  const [chain, setChain] = useState(null);

  const token = localStorage.getItem("userToken");

  useEffect(() => {
    setAmount("");
    setAddress("");
    setOtp("");
    setError(null);
    setSuccess(null);
    setStatusCode(null);
  }, []);

  const sendOtp = async () => {
    const response = await axios.post(OTP_REQUEST_URL, {
      otp_type: "withdraw_cash_otp",
      token,
    });
    console.log("OTP Response:", response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setSuccess(null);
    setStatusCode(null);

    const token = localStorage.getItem("userToken");
    if (!token) {
      setError("User token not found. Please log in.");

      return;
    }

    console.log("Chain being sent:", chain);

    const rawData = {
      walletaddress: address,
      amount: amount,
      otp: otp,
      token: token,
      chain: chain,
    };

    console.log("Raw data being sent:", rawData);

    // const formData = new FormData();
    // formData.append("walletaddress", address);
    // formData.append("amount", amount);
    // formData.append("otp", otp);
    // formData.append("token", token);
    // formData.append("chain", chain);

    try {
      const response = await axios.post(CRYPTO_URL, rawData);
      console.log("API Response:", response);
      const result = response.data?.data?.result;
      const code = response.data?.data?.status;

      if (code === 200) {
        setSuccess(result);
        setStatusCode(code);
        setTimeout(() => {
          setSuccess(null);
          setAmount("");
          setAddress("");
          setOtp("");
        }, 5000);
      } else {
        setError(result || "An unexpected error occurred.");
        setStatusCode(code);
      }
    } catch (error) {
      console.error("API Error:", error);
      setError(
        error.response?.data?.message ||
          "An error occurred while submitting the form."
      );
      setStatusCode(error.response?.status || 200);
    }
  };

  const handleCryptoSelect = (crypto) => {
    const selected = cryptocurrencies.find((item) => item.type === crypto);
    setSelectedCrypto({
      icon: selected.img,
    });
    setActiveCrypto(crypto);
    setChain(selected.chain);
    console.log("Selected Chain:", selected.chain);
  };

  return (
    <div className="flex bg-[#F6F8F8] ">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <Navbar />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50]">
          <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Cryptocurrency Deposit</h2>
            <p className="mb-2">Please choose your preferred cryptocurrency</p>
            <div className="flex space-x-4 mb-6">
              {cryptocurrencies.map((crypto) => (
                <button
                  key={crypto.type}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    activeCrypto === crypto.type
                      ? "bg-orange-500"
                      : "bg-gray-400"
                  } text-white`}
                  onClick={() => handleCryptoSelect(crypto.type)}
                >
                  {crypto.img}
                  {crypto.type}
                </button>
              ))}
            </div>
            {selectedCrypto.icon && (
              <div className=" flex items-center">
                {/* <img src={selectedCrypto.icon} alt="Selected Crypto" /> */}
                {selectedCrypto.icon}{" "}
                <span className="ml-2">How to fund your account</span>
              </div>
            )}

            <p className="text-xs text-red-500 mb-4">
              Your sent payment reflect in your account will take some time
              about 3 to 10 minutes. This QR code or wallet will use only one
              time if you want to make another transaction please generate new
              QR.
            </p>
            <div className="">
              <div className="py-4">
                <h1 className="text-lg">Crypto Form</h1>
                <p className="text-xs">
                  Please transfer USDT only to this wallet address. Other assets
                  will not be acceptable with our system.
                </p>
                <img src="" alt="" />
              </div>
              <form className="grid grid-cols-2 gap-4">
                <div className="mb-4 text-xs">
                  <label className="block mb-1" htmlFor="amount">
                    * Amount
                  </label>
                  <input
                    className="w-full p-2 border rounded"
                    placeholder="Enter Amount"
                    type="number"
                    value={amount}
                    onChange={(e) =>
                      setAmount(e.target.value.replace(/\D/g, ""))
                    }
                    required
                    step="any"
                    maxLength={5}
                    id="amount"
                    name="amount"
                  />
                </div>
                <div className="mb-4 text-xs">
                  <label className="block mb-1" htmlFor="amount">
                    * Wallet Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Enter Transaction ID"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="mb-4 text-xs">
                  <label className="block mb-1" htmlFor="notes">
                    * OTP
                  </label>
                  <input
                    id="otp"
                    rows="3"
                    className="w-full p-2 border rounded"
                    type="text"
                    placeholder="Enter your OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-6 text-xs">
                  <button
                    onClick={sendOtp}
                    className="bg-orange-500 px-2 py-1 rounded text-white"
                  >
                    Send OTP
                  </button>
                </div>
              </form>
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="bg-orange-500 px-2 py-1 rounded text-white"
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

export default CryptoCurrency;
