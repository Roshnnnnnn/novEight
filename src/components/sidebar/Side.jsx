import { useState, useRef, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiPieChart,
  FiFolder,
  FiSettings,
  FiDownload,
  FiGift,
  FiHelpCircle,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
  FiStar,
} from "react-icons/fi";

import { FaAlignRight } from "react-icons/fa";
import logo from "../../assets/img/logo (1).png";

import { Link } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSubmenu(null);
        setDropdownPosition(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (index, event, hasSubmenu) => {
    if (!open && hasSubmenu) {
      const rect = event.currentTarget.getBoundingClientRect();
      setDropdownPosition({
        top: rect.top,
        left: rect.right + 5,
      });
    }
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const Menus = [
    { title: "Dashboard", icon: FiHome, link: "/" },
    {
      title: "Accounts",
      icon: FiUser,
      gap: true,
      link: "/accountManagement",
    },
    {
      title: "Funds",
      icon: FiFolder,
      gap: true,
      submenu: [
        { title: "Deposit Funds", link: "/depositFunds" },
        { title: "Withdraw Funds", link: "/withdrawFunds" },
        { title: "Transfer Between Account", link: "/transferFunds" },
        { title: "MT5 To Wallet", link: "/mt5ToWallet" },
        { title: "Wallet to MT5", link: "/walletToMT5" },
        // { title: "Transaction History", link: "transactionHistory" },
      ],
    },
    {
      title: "Reports",
      icon: FiPieChart,
      gap: true,
      submenu: [
        { title: "Deposits", link: "/deposit-report" },
        { title: "Withdrawals", link: "/withdrawals-report" },
        { title: "IB Withdrawals", link: "/ib_withdrawals-report" },
        { title: "Wallet History", link: "/wallet_history-report" },
        { title: "Deal Report", link: "/deal-report" },
      ],
    },
    {
      title: "Download",
      link: "/download",
      icon: FiDownload,
      gap: true,
    },
    // {
    //   title: "Tools",
    //   icon: FiSettings,
    //   gap: true,
    //   submenu: [
    //     { title: "Pro Trader Tool", link: "/tradingTool" },
    //     { title: "Technical Analysis", link: "/technicalAnalysis" },
    //     { title: "National Volume Calculator", link: "/tradingCalculator" },
    //   ],
    // },
    // {
    //   title: "VIP Trading Room",
    //   link: "/vip-trading-room",
    //   icon: FiStar,
    //   gap: true,
    // },

    // {
    //   title: "Rewards",
    //   icon: FiGift,
    //   gap: true,
    //   submenu: [
    //     { title: "Overview", link: "/overview" },
    //     { title: "Wheel Spin", link: "/wheelSpin" },
    //     { title: "Lucky Draw", link: "/luckyDraw" },
    //     { title: "Cash Redemption", link: "/cashRedemption" },
    //     { title: "Vouchers Redemption", link: "/vouchersRedemption" },
    //   ],
    // },
    {
      title: "Support",
      icon: FiHelpCircle,
      gap: true,
      submenu: [
        { title: "My Ticket", link: "/ticket" },
        { title: "Contact Us", link: "/contact" },
      ],
    },
  ];

  return (
    <div>
      <div className="flex bg-[#FFFFFF]  z-[-50]">
        <div
          ref={sidebarRef}
          className={`${
            open ? "w-50" : "w-30"
          } h-screen p-5 relative duration-300 flex flex-col fixed top-0 hidden md:block`}
          style={{ zIndex: "1000" }}
        >
          <div
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full bg-white transition-transform duration-300 ease-in-out`}
            onClick={() => setOpen(!open)}
          >
            {open ? <FiChevronLeft /> : <FiChevronRight />}
          </div>
          <div className="flex gap-x-4 items-center">
            <div>
              <Link to={"/"}>
                <img src={logo} alt="" className="h-9 w-9 cursor-pointer" />
              </Link>
            </div>
            {open && (
              <Link to={"/"}>
                <h1 className="text-black origin-left font-medium text-xl duration-200">
                  Novotrend
                </h1>
              </Link>
            )}
          </div>
          <ul className="pt-6 flex-grow custom-scrollbar">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex flex-col rounded-md cursor-pointer hover:bg-light-white text-black text-sm
              ${Menu.gap ? "mt-7" : "mt-2"} ${index === 0 && "bg-light-white"}`}
              >
                <div
                  className="flex items-center gap-x-4"
                  onClick={(e) => handleMenuClick(index, e, !!Menu.submenu)}
                >
                  <Link href={Menu.link || "#"}>
                    <Menu.icon className="text-xs min-w-[2rem]" />
                  </Link>
                  {open && (
                    <span className="origin-left duration-200 flex-grow text-xs">
                      <Link to={Menu.link || "#"}>{Menu.title}</Link>
                    </span>
                  )}
                  {Menu.submenu &&
                    open &&
                    (openSubmenu === index ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    ))}
                </div>
                {Menu.submenu && open && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out text-xs ${
                      openSubmenu === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <ul className="pl-10 mt-2">
                      {Menu.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex rounded-md p-2 cursor-pointer text-xs items-center gap-x-4"
                        >
                          <Link to={subItem.link || "#"}>{subItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {!open && openSubmenu !== null && dropdownPosition && (
          <div
            className="absolute bg-white shadow-md rounded-md p-2"
            style={{
              top: dropdownPosition.top + 40,
              left: dropdownPosition.left,
              zIndex: 1000,
            }}
          >
            <ul>
              {Menus[openSubmenu].submenu.map((subItem, subIndex) => (
                <li key={subIndex} className="p-2 cursor-pointer text-xs">
                  <Link to={subItem.link || "#"}>{subItem.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #2c3e50;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #34495e;
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #4a6785;
  }
`;

// Add this line right before the closing </div> of the main component
<style>{styles}</style>;
