import Head from "../../sidebar/Head";
import Side from "../../sidebar/Side";
import { FaEthereum } from "react-icons/fa";
import { TbBrandBinance } from "react-icons/tb";
import { SiPolymerproject } from "react-icons/si";
import { PiPolygonFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://api.novotrend.co/api";
const POLY = `${API_BASE_URL}/generate_wallet_polygon.php`;
const BINANCE = `${API_BASE_URL}/generate_wallet_binance.php`;
const TRON = `${API_BASE_URL}/generate_wallet_tron.php`;
const ETH = `${API_BASE_URL}/generate_wallet_ethereum.php`;

const CryptoCurrency = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("ETH");
  const [walletAddress, setWalletAddress] = useState("");
  const [qrCode, setQrCode] = useState("");

  const token = localStorage.getItem("userToken");

  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(crypto);
    fetchWalletAddress(crypto);
  };

  const fetchWalletAddress = async (crypto) => {
    let url;
    switch (crypto) {
      case "USDT-MATIC20":
        url = ETH;
        break;
      case "USD-TRC20":
        url = BINANCE;
        break;
      case "USDT-BEP20":
        url = POLY;
        break;
      case "USDT-ERC20":
        url = TRON;
        break;
      default:
        return;
    }

    try {
      const response = await axios.post(url, { token });
      console.log(response.data.data.response);
      setWalletAddress(response.data.data.response.walletaddress);
      setQrCode(response.data.data.response.walletscanima);
    } catch (error) {
      console.error("Error fetching wallet address:", error);
    }
  };

  const renderCryptoIcon = () => {
    switch (selectedCrypto) {
      case "USDT-MATIC20":
        return <FaEthereum className="mr-2" />;
      case "USD-TRC20":
        return <PiPolygonFill className="mr-2" />;
      case "USDT-BEP20":
        return <TbBrandBinance className="mr-2" />;
      case "USDT-ERC20":
        return <SiPolymerproject className="mr-2" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    fetchWalletAddress(selectedCrypto);
  }, []);

  console.log(walletAddress);
  return (
    <div className="flex bg-[#F6F8F8] ">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50]">
          <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Cryptocurrency Deposit</h2>
            <p className="mb-2">Please choose your preferred cryptocurrency</p>
            <div className="flex space-x-4 mb-6">
              <button
                className={`flex items-center px-4 py-2 ${
                  selectedCrypto === "USDT-MATIC20"
                    ? "bg-orange-500"
                    : "bg-gray-300"
                } text-white rounded-md`}
                onClick={() => handleCryptoSelect("USDT-MATIC20")}
              >
                <FaEthereum className="mr-2" /> USDT-MATIC20
              </button>
              <button
                className={`flex items-center px-4 py-2 ${
                  selectedCrypto === "USD-TRC20"
                    ? "bg-orange-500"
                    : "bg-gray-300"
                } text-white rounded-md`}
                onClick={() => handleCryptoSelect("USD-TRC20")}
              >
                <PiPolygonFill className="mr-2" /> USD-TRC20
              </button>
              <button
                className={`flex items-center px-4 py-2 ${
                  selectedCrypto === "USDT-BEP20"
                    ? "bg-orange-500"
                    : "bg-gray-300"
                } text-white rounded-md`}
                onClick={() => handleCryptoSelect("USDT-BEP20")}
              >
                <TbBrandBinance className="mr-2" /> USDT-BEP20
              </button>
              <button
                className={`flex items-center px-4 py-2 ${
                  selectedCrypto === "USDT-ERC20"
                    ? "bg-orange-500"
                    : "bg-gray-300"
                } text-white rounded-md`}
                onClick={() => handleCryptoSelect("USDT-ERC20")}
              >
                <SiPolymerproject className="mr-2" /> USDT-ETH20
              </button>
            </div>

            <p className="mb-4 text-gray-700 flex items-center text-sm">
              {renderCryptoIcon()}
              How to fund your account with {selectedCrypto}
            </p>
            <p className="text-xs text-red-500 mb-4">
              Your sent payment reflect in your account will take some time
              about 3 to 10 minutes. This QR code or wallet will use only one
              time if you want to make another transaction please generate new
              QR.
            </p>
            <div className="">
              <h1 className="text-lg">Deposit Wallet</h1>
              <p className="text-xs">
                Please transfer USDT only to this wallet address. Other assets
                will not be acceptable with our system.
              </p>
              <div className="flex flex-col items-center justify-center h-full">
                {qrCode && (
                  <div className="mt-4">
                    <h3 className="text-lg ">Your QR Code:</h3>
                    <img src={qrCode} alt="QR Code" className="w-32 h-32" />
                  </div>
                )}
                {walletAddress && (
                  <div>
                    <input
                      type="text"
                      value={walletAddress}
                      readOnly
                      className="bg-gray-700 text-white text-center p-1 text-xs rounded-md w-[25rem] border-none"
                      aria-label="Wallet address"
                    />
                  </div>
                )}
                {walletAddress && (
                  <button
                    onClick={() => navigator.clipboard.writeText(walletAddress)}
                    className="mt-1 px-2 py-1 text-xs bg-orange-500 text-white rounded-md justify-center"
                  >
                    Copy
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrency;
