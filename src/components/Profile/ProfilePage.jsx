import { useEffect, useRef, useState } from "react";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import MyProfile from "./MyProfile";
import SecurityManagement from "./SecurityManagement";
import TransferIB from "./TransferIB";
import Navbar from "../sidebar/Navbar";

const ProfilePage = () => {
  const [defaultTab, setDefaultTab] = useState(0);
  const tabsRef = useRef(null);

  const TabButton = [
    {
      text: "My Profile",
      link: "/myProfile",
    },
    {
      text: "Security Management",
      link: "/security",
    },
    {
      text: "Ekyc",
      link: "/ekyc",
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
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="lg:w-[60%] md:w-[90%] mx-auto relative z-10 rounded lg:mt-16 md:mt-4">
        <Head />
        <Navbar />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50] bg-white">
          <div className="shadow-md rounded-lg p-2 bg-white">
            <div className="flex flex-wrap p-3 flex flex-wrap p-3 bg-white text-xs gap-x-4 overflow-auto text-xs gap-x-4 overflow-auto">
              {TabButton.map((element, key) => (
                <div
                  className="me-2 flex flex-wrap bg-white p-3 text-xs gap-x-4 overflow-auto"
                  key={key}
                >
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
                <MyProfile />
              ) : defaultTab === 1 ? (
                <SecurityManagement />
              ) : defaultTab === 2 ? (
                <TransferIB />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
