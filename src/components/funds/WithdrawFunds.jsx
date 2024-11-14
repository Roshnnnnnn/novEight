import { useState } from "react";
import Side from "../sidebar/Side";
import Head from "../sidebar/Head";
import Navbar from "../sidebar/Navbar";
import bitcoin from "../../assets/img/bitcoin.png";
import visa from "../../assets/img/visa.png";

import Bank from "../../assets/img/Bank.png";
import Cash from "../../assets/img/Cash.png";
import apple from "../../assets/img/apple.png";
import stic from "../../assets/img/stucpay.png";
import bit from "../../assets/img/bitwit.png";
import broker from "../../assets/img/broker.png";
import skrill from "../../assets/img/skrill.png";
import volet from "../../assets/img/volet.webp";
import International from "../../assets/img/international.png";
import { Link } from "react-router-dom";

const WithdrawFunds = () => {
  const paymentMethods = [
    {
      title: "Cryptocurrency Withdraw",
      fee: "$0 FEE",
      timing: "Instant",
      link: "/withdrawFunds/crypto",
      icon: (
        <img
          src={bitcoin}
          alt="Cryptocurrency"
          style={{ width: "50px", height: "auto" }}
        />
      ),
      promotion: true,
    },
    {
      title: "Bank Withdraw",
      fee: "$0 FEE",
      timing: "3 Working Days",
      link: "/withdrawFunds/bank",
      icon: (
        <img
          src={Bank}
          alt="Cryptocurrency"
          style={{ width: "50px", height: "auto" }}
        />
      ),
      promotion: true,
    },
    {
      title: "Cash Withdraw",
      fee: "$0 FEE",
      timing: "3 Working Days",
      link: "/withdrawFunds/cash",
      icon: (
        <img
          src={Cash}
          alt="Cryptocurrency"
          style={{ width: "50px", height: "auto" }}
        />
      ),
      promotion: true,
    },
    {
      title: "Credit/Debit Card",
      fee: "$0 FEE",
      timing: "24/7 INSTANT",
      link: "/visaPaymentDeposit",
      icon: (
        <img
          src={visa}
          alt="Credit/Debit Card"
          style={{ width: "150px", height: "auto" }}
        />
      ),
    },
    {
      title: "Apple Pay/Google Pay",
      fee: "$0 FEE",
      timing: "24/7 INSTANT",
      link: "/appleGooglePay",
      icon: (
        <img
          src={apple}
          alt="Apple Pay/Google Pay"
          style={{ width: "100px", height: "auto" }}
        />
      ),
    },
    {
      title: "Broker to Broker Transfer",
      fee: "$0* FEE",
      timing: "3-5 BUSINESS DAY/S",
      link: "/brokerToBrokerTransfer",
      icon: (
        <img
          src={broker}
          alt="Broker to Broker Transfer"
          style={{ width: "40px", height: "auto" }}
        />
      ),
    },
    {
      title: "Volet",
      fee: "$0 FEE",
      timing: "24/7 INSTANT",
      link: "/cps/Volet",
      icon: (
        <img
          src={volet}
          alt="Volet"
          style={{ width: "80px", height: "auto" }}
        />
      ),
    },
    {
      title: "International Bank Transfer",
      fee: "$0 FEE",
      timing: "2-5 Business day/s",
      icon: (
        <img
          src={International}
          alt="VoInternationallet"
          style={{ width: "40px", height: "auto" }}
        />
      ),
    },
    {
      title: "Bitwallet Deposit",
      fee: "$0 FEE",
      timing: "24/7 INSTANT",
      link: "/cps/Bitwallet",
      icon: (
        <img
          src={bit}
          alt="Bitwallet"
          style={{ width: "100px", height: "auto" }}
        />
      ),
    },
    {
      title: "Skrill",
      fee: "$0 FEE",
      timing: "24/7 INSTANT",
      link: "/cps/Skrill",
      icon: (
        <img
          src={skrill}
          alt="Skrill"
          style={{ width: "50px", height: "auto" }}
        />
      ),
    },
    {
      title: "Sticpay",
      fee: "$0 FEE",
      timing: "24/7 INSTANT",
      link: "/cps/Sticpay",
      icon: (
        <img
          src={stic}
          alt="Sticpay"
          style={{ width: "40px", height: "auto" }}
        />
      ),
    },
    // Add other payment methods as needed
  ];

  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    setAmount(numericValue);

    if (numericValue === "0" || numericValue === "") {
      setError("");
    } else {
      setError("");
    }
  };

  const handleContinue = () => {
    if (amount > 0) {
      alert("Continuing with withdrawal");
    }
  };

  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="lg:w-[60%] md:w-[90%] sm:w-[90%] mx-auto relative z-10 m-2 rounded lg:mt-16 md:mt-4 sm:mt-4">
        <Head />
        <Navbar />
        <div className="mx-auto relative m-2 rounded-lg cursor-pointer lg:mt-16 md:mt-10 sm:mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 z-[50] lg:w-full md:w-[18rem]">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {method.link ? (
                  <Link to={method.link}>
                    <div className="flex flex-col items-center">
                      <div className="h-10 object-contain mb-2">
                        {method.icon}
                      </div>
                      <h3 className="font-medium text-gray-800 mb-3 text-sm">
                        {method.title}
                      </h3>
                      <div className="flex items-center justify-center w-full text-gray-600 mb-3">
                        <span style={{ fontSize: "11px" }}>{method.fee}</span>
                        <span className="mx-1">|</span>
                        <span style={{ fontSize: "11px" }}>
                          {method.timing}
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="h-10 object-contain mb-2">
                      {method.icon}
                    </div>
                    <h3 className="font-medium text-gray-800 mb-3 text-sm">
                      {method.title}
                    </h3>
                    <div className="flex items-center justify-center w-full text-gray-600 mb-3">
                      <span style={{ fontSize: "11px" }}>{method.fee}</span>
                      <span className="mx-1">|</span>
                      <span style={{ fontSize: "11px" }}>{method.timing}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawFunds;
