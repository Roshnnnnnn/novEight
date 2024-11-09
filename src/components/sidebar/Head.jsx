import {
  FiBell,
  FiCamera,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLogOut,
} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Head = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleNotificationClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".absolute");
      if (dropdown && !dropdown.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="">
      <div className="top-0 left-0 right-0 flex justify-end items-center p-4 fixed bg-white bg-opacity-50 backdrop-blur-sm">
        <Link to="/depositFunds">
          <div className="text-teal-900 cursor-pointer border rounded-3xl p-2">
            Deposit
          </div>
        </Link>
        <FiGlobe className="text-teal-900 cursor-pointer ml-4 w-8" />
        <FiBell
          className="text-teal-900 cursor-pointer ml-4 w-8"
          onClick={handleNotificationClick}
        />
        <div className="relative">
          <CgProfile
            className="text-teal-900 cursor-pointer ml-4 w-8"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 p-2 w-60 bg-white shadow-lg rounded-md text-xs z-50">
              <div className="pt-2 pl-2 text-sm font-bold">
                Umang Hitendra Shah
              </div>
              <div className="pl-2" style={{ fontSize: "12px" }}>
                UID: 2659752
              </div>
              <div className="p-2 cursor-pointer flex items-center leading-6">
                <FiDownload className="mr-2" /> Download
              </div>
              <div className="p-2 cursor-pointer flex items-center">
                <FiCheckCircle className="mr-2" /> Verification
              </div>
              <div className="p-2 cursor-pointer flex items-center">
                <FiCamera className="mr-2" /> Facial Authentication (optional)
              </div>
              <div className="p-2 cursor-pointer flex items-center">
                <FiLogOut className="mr-2" /> Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-lg w-[35rem] h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center">
              <h2 className="font-bold ">
                Prepare for 2024 U.S. Election Market Volatility
              </h2>
            </div>
            <p className="text-xs my-2">Dear Client,</p>
            <p className="text-xs my-2">
              With the U.S. election approaching on 5 November 2024, we want to
              help you navigate potential market changes during this period of
              heightened volatility.
            </p>
            <p className="text-xs my-2">Please keep the following in mind:</p>
            <ul className="text-xs my-2">
              <li>1. Manage Volatility & Liquidity</li>
              <p className="text-xs" style={{ fontSize: "14px" }}>
                The election is expected to bring significant market movements
                and possible changes in liquidity, which could affect trading
                costs. We recommend monitoring your positions closely and
                ensuring sufficient margin coverage.
              </p>
              <li>2. Potential Trading Opportunities</li>
              <p className="text-xs" style={{ fontSize: "14px" }}>
                Major events like this can create substantial trading
                opportunities. Consider adding funds to maintain flexibility so
                you can take advantage of potential price movements.
              </p>
              <li>3. Stable Trading Conditions</li>
              <p className="text-xs" style={{ fontSize: "14px" }}>
                Vantage remains committed to providing stable and competitive
                spreads, particularly on gold, Bitcoin, and oil, to support your
                trading needs during volatile periods.
              </p>
            </ul>
            <p className="text-xs py-2" style={{ fontSize: "14px" }}>
              Please note that leverage may be adjusted based on market
              conditions.
            </p>
            <p className="pt-2 " style={{ fontSize: "14px" }}>
              * Decreased leverage will increase the margin required to open or
              maintain positions. During extreme market conditions, this
              adjustment can help control risk for traders, reduce the
              likelihood of excessive liquidations, and mitigate the impact of
              potential illiquidity and wider spreads.
            </p>
            <p style={{ fontSize: "14px" }}>
              Clients are advised to closely monitor their accounts and take
              proper action in advance including adding funds on time.
            </p>
            <p className="pt-2 " style={{ fontSize: "14px" }}>
              At Vantage, our team is committed to keeping you informed of
              changing conditions to support you in navigating the upcoming
              election and any potential market fluctuations it may bring.
            </p>
            <p className="pt-2 " style={{ fontSize: "14px" }}>
              Should you have any questions, please do not hesitate to contact
              our team at support@vantagemarkets.com.
            </p>
            <p style={{ fontSize: "14px" }}>Kind regards,</p>
            <p style={{ fontSize: "14px" }}>Novotrend</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Head;
