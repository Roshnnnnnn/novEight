import { useEffect, useRef, useState } from "react";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import Overview from "../Room/Overview";
import Interactive from "../Room/Interactive";
import LearnFromBest from "../Room/LearnFromBest";
import RequestResearch from "../Room/RequestResearch";
import VIPSupport from "../Room/VIPSupport";
import Eligibility from "../Room/Eligibility";

const VipTradingRoom = () => {
  const [defaultTab, setDefaultTab] = useState(0);
  const tabsRef = useRef(null);
  const TabButton = [
    {
      text: "Overview",
    },
    {
      text: "Interactive Analysis",
    },
    {
      text: "Learn From the best",
    },
    {
      text: "Request research",
    },
    {
      text: "VIP Support",
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
        tabsRef.current.scrollLeft; // Adjusted for scroll position
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
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50]">
          <div>
            <h1 className="text-xl">VIP CHAT ROOM</h1>
          </div>
          <div className="shadow-md rounded-lg p-4 bg-white">
            <div className="flex flex-wrap p-3 text-xs gap-x-4 overflow-auto">
              {TabButton.map((element, key) => (
                <div className="me-2" key={key}>
                  <div>
                    <button
                      className={`${
                        key === defaultTab
                          ? "is-active-tab btn font-bold bg-orange-500 border-b-2 border-orange-500 mb-1"
                          : "btn"
                      } text-black text-xs bg-white`}
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
                <Overview />
              ) : defaultTab === 1 ? (
                <Interactive />
              ) : defaultTab === 2 ? (
                <LearnFromBest />
              ) : defaultTab === 3 ? (
                <RequestResearch />
              ) : defaultTab === 4 ? (
                <VIPSupport />
              ) : (
                <Eligibility />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipTradingRoom;
