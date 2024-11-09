import { useRef, useState } from "react";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import Indices from "../TechnicalAnalysis/Indices";
import Forex from "../TechnicalAnalysis/Forex";
import Commodities from "../TechnicalAnalysis/Commodities";
import ShareCFDs from "../TechnicalAnalysis/ShareCFDs";
import CryptoAnalysis from "../TechnicalAnalysis/Crypto";

const TechnicalAnalysis = () => {
  const [defaultAccount, setDefaultAccount] = useState(0);

  const TabButton = [
    {
      text: "Indices",
    },
    {
      text: "Forex",
    },
    {
      text: "Commodities",
    },
    {
      text: "Share CFDs",
    },
    {
      text: "Crypto",
    },
  ];

  const scrollContainerRef = useRef(null);
  const tabsRef = useRef(null);
  const tabRefs = useRef([]);

  const handleAccountType = (index) => {
    setDefaultAccount(index);
    if (scrollContainerRef.current && tabRefs.current[index]) {
      const container = scrollContainerRef.current;
      const button = tabRefs.current[index];
      const containerWidth = container.offsetWidth;
      const buttonWidth = button.offsetWidth;
      const buttonOffsetLeft = button.offsetLeft;

      // Adjusting the scroll calculation
      const scrollLeft =
        buttonOffsetLeft - containerWidth / 2 + buttonWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-10 bg-white p-8 m-2 rounded-lg mt-16 z-[-50]">
          <div className="flex gap-6">
            {TabButton.map((element, key) => (
              <div
                className="flex-shrink-0 relative"
                key={key}
                ref={(el) => (tabRefs.current[key] = el)}
              >
                <button
                  className={`${
                    key === defaultAccount
                      ? "is-active-tab btn font-bold bg-orange-500 border-b-2 border-orange-500 mb-1"
                      : "btn"
                  } text-black text-xs bg-white`}
                  onClick={() => handleAccountType(key)}
                >
                  {element.text}
                </button>
              </div>
            ))}
          </div>

          <div className="col-12 mt-2 d-flex tab-container">
            <div
              className="mt-4 rounded justify-content-center"
              style={{ width: "100%" }}
            >
              {defaultAccount === 0 ? (
                <Indices />
              ) : defaultAccount === 1 ? (
                <Forex />
              ) : defaultAccount === 2 ? (
                <Commodities />
              ) : defaultAccount === 3 ? (
                <ShareCFDs />
              ) : (
                <CryptoAnalysis />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalAnalysis;
