import { useEffect, useRef, useState } from "react";
import Forex from "./crypto/Forex";
import Crypto from "./crypto/Crypto";
import Shares from "./crypto/Shares";
import Indices from "./crypto/Indices";
import Metals from "./crypto/Metals";
import Energy from "./crypto/Energy";

const StockData = () => {
  const [defaultTab, setDefaultTab] = useState(0);
  const tabsRef = useRef(null);

  const TabButton = [
    {
      text: "Forex",
    },
    {
      text: "Crypto",
    },
    {
      text: "Shares",
    },
    {
      text: "Indices",
    },
    {
      text: "Metals",
    },
    {
      text: "Energy",
    },
  ];

  const handleTab = (index) => {
    setDefaultTab(index);
    scrollToTab(index);
    // Ensure the tab container is scrollable
    if (tabsRef.current) {
      tabsRef.current.classList.add("overflow-auto");
    }
  };
  const scrollToTab = (index) => {
    if (tabsRef.current && tabsRef.current.children[index]) {
      const tabElement = tabsRef.current.children[index];
      const tabOffset =
        tabElement.offsetLeft +
        tabElement.offsetWidth / 2 -
        tabsRef.current.offsetWidth / 2 +
        tabsRef.current.scrollLeft;
      tabsRef.current.scrollTo({
        left: tabOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (tabsRef.current) {
        if (window.innerWidth < 850) {
          tabsRef.current.classList.add("flex-nowrap", "overflow-auto");
        } else {
          tabsRef.current.classList.remove("flex-nowrap", "overflow-auto");
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    scrollToTab(defaultTab);

    return () => window.removeEventListener("resize", handleResize);
  }, [defaultTab]);

  return (
    <div>
      <div>
        <div className="shadow-md rounded-lg p-2">
          <div className="flex flex-wrap p-3 text-xs gap-x-4 overflow-auto">
            {TabButton.map((element, key) => (
              <div className="me-2" key={key}>
                <div className="text-teal-900">
                  <button
                    className={`${
                      key === defaultTab
                        ? "is-active-tab btn font-bold bg-orange-500 border-b-2 border-orange-500 mb-1"
                        : "btn"
                    }  text-xs bg-white`}
                    onClick={() => handleTab(key)}
                  >
                    {element.text}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 text-xs">
            {defaultTab === 0 ? (
              <Forex />
            ) : defaultTab === 1 ? (
              <Crypto />
            ) : defaultTab === 2 ? (
              <Shares />
            ) : defaultTab === 3 ? (
              <Metals />
            ) : defaultTab === 4 ? (
              <Energy />
            ) : (
              <Indices />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockData;
