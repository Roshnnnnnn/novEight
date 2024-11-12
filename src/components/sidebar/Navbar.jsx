// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import {
//   FiDownload,
//   FiFolder,
//   FiHelpCircle,
//   FiHome,
//   FiPieChart,
//   FiUser,
// } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [open, setOpen] = useState(true);
//   const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleSubmenu = (index) => {
//     setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setOpenSubmenu(null);
//         setDropdownPosition(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleMenuClick = (index, event, hasSubmenu) => {
//     if (!open && hasSubmenu) {
//       const rect = event.currentTarget.getBoundingClientRect();
//       setDropdownPosition({
//         top: rect.top,
//         left: rect.right + 5,
//       });
//     }
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   const Menus = [
//     { title: "Dashboard", icon: FiHome, link: "/" },
//     {
//       title: "Accounts",
//       icon: FiUser,
//       gap: true,
//       link: "/accountManagement",
//     },
//     {
//       title: "Funds",
//       icon: FiFolder,
//       gap: true,
//       submenu: [
//         { title: "Deposit Funds", link: "/depositFunds" },
//         { title: "Withdraw Funds", link: "/withdrawFunds" },
//         { title: "Transfer Between Account", link: "/transferFunds" },
//         { title: "MT5 To Wallet", link: "/mt5ToWallet" },
//         { title: "Wallet to MT5", link: "/walletToMT5" },
//         // { title: "Transaction History", link: "transactionHistory" },
//       ],
//     },
//     {
//       title: "Reports",
//       icon: FiPieChart,
//       gap: true,
//       submenu: [
//         { title: "Deposits", link: "/deposit-report" },
//         { title: "Withdrawals", link: "/withdrawals-report" },
//         { title: "IB Withdrawals", link: "/ib_withdrawals-report" },
//         { title: "Wallet History", link: "/wallet_history-report" },
//         { title: "Deal Report", link: "/deal-report" },
//       ],
//     },
//     {
//       title: "Download",
//       link: "/download",
//       icon: FiDownload,
//       gap: true,
//     },
//     // {
//     //   title: "Tools",
//     //   icon: FiSettings,
//     //   gap: true,
//     //   submenu: [
//     //     { title: "Pro Trader Tool", link: "/tradingTool" },
//     //     { title: "Technical Analysis", link: "/technicalAnalysis" },
//     //     { title: "National Volume Calculator", link: "/tradingCalculator" },
//     //   ],
//     // },
//     // {
//     //   title: "VIP Trading Room",
//     //   link: "/vip-trading-room",
//     //   icon: FiStar,
//     //   gap: true,
//     // },

//     // {
//     //   title: "Rewards",
//     //   icon: FiGift,
//     //   gap: true,
//     //   submenu: [
//     //     { title: "Overview", link: "/overview" },
//     //     { title: "Wheel Spin", link: "/wheelSpin" },
//     //     { title: "Lucky Draw", link: "/luckyDraw" },
//     //     { title: "Cash Redemption", link: "/cashRedemption" },
//     //     { title: "Vouchers Redemption", link: "/vouchersRedemption" },
//     //   ],
//     // },
//     {
//       title: "Support",
//       icon: FiHelpCircle,
//       gap: true,
//       submenu: [
//         { title: "My Ticket", link: "/ticket" },
//         { title: "Contact Us", link: "/contact" },
//       ],
//     },
//   ];

//   return (
//     <div className="text-right text-xs">
//       <button onClick={toggleNavbar} className="pr-6">
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>
//       {isOpen && (
//         <div className="relative pr-8 ">
//              <ul className="pt-6 flex-grow custom-scrollbar">
//             {Menus.map((Menu, index) => (
//               <li
//                 key={index}
//                 className={`flex flex-col rounded-md cursor-pointer hover:bg-light-white text-black text-sm
//               ${Menu.gap ? "mt-7" : "mt-2"} ${index === 0 && "bg-light-white"}`}
//               >
//                 <div
//                   className="flex items-center gap-x-4"
//                   onClick={(e) => handleMenuClick(index, e, !!Menu.submenu)}
//                 >
//                   <Link to={Menu.link || "#"}>
//                     <Menu.icon className="text-xs min-w-[2rem]" />
//                   </Link>
//                   {isOpen && (
//                     <span className="origin-left duration-200 flex-grow text-xs">
//                       <Link to={Menu.link || "#"}>{Menu.title}</Link>
//                     </span>
//                   )}
//                   {Menu.submenu &&
//                     isOpen && (
//                       openSubmenu === index ? (
//                         <FiChevronUp />
//                       ) : (
//                         <FiChevronDown />
//                       ))}
//                 </div>
//                 {Menu.submenu && isOpen && (
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out text-xs  ${
//                       openSubmenu === index ? "max-h-40" : "max-h-0"
//                     }`}
//                   >
//                     <ul className="pl-10 mt-2">
//                       {Menu.submenu.map((subItem, subIndex) => (
//                         <li
//                           key={subIndex}
//                           className="flex rounded-md p-2 cursor-pointer  text-xs items-center gap-x-4"
//                         >
//                           <Link to={subItem.link || "#"}>{subItem.title}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {!open && openSubmenu !== null && dropdownPosition && (
//           <div
//             className="absolute bg-white shadow-md rounded-md p-2"
//             style={{
//               top: dropdownPosition.top + 40,
//               left: dropdownPosition.left,
//               zIndex: 1000,
//             }}
//           >
//             <ul>
//               {Menus[openSubmenu].submenu.map((subItem, subIndex) => (
//                 <li key={subIndex} className="p-2 cursor-pointer text-xs">
//                   <Link to={subItem.link || "#"}>{subItem.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//       )}
//     </div>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FiDownload,
  FiFolder,
  FiHelpCircle,
  FiHome,
  FiPieChart,
  FiUser,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const sidebarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSubmenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (index, event, hasSubmenu) => {
    event.stopPropagation(); // Prevents event bubbling
    if (hasSubmenu) {
      setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
    }
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
    <div
      className="lg:hidden md:flex md:flex-col text-right text-xs w-full "
      ref={sidebarRef}
    >
      <button onClick={toggleNavbar} className="self-end mb-4 pr-6">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="relative pr-8 bg-white shadow-md rounded-md">
          <ul className="pt-6 custom-scrollbar">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex flex-col rounded-md cursor-pointer hover:bg-light-gray text-black text-sm ${
                  Menu.gap ? "mt-7" : "mt-2"
                } ${index === 0 && "bg-light-gray"}`}
              >
                <div
                  className="flex items-center gap-x-4 p-2"
                  onClick={(e) => handleMenuClick(index, e, !!Menu.submenu)}
                >
                  <Link
                    to={Menu.link || "#"}
                    className="flex items-center gap-x-2 w-full"
                  >
                    <Menu.icon className="text-xs" />
                    <span className="flex-grow text-xs">{Menu.title}</span>
                  </Link>
                  {Menu.submenu &&
                    isOpen &&
                    (openSubmenuIndex === index ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    ))}
                </div>
                {Menu.submenu && isOpen && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out text-xs ${
                      openSubmenuIndex === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <ul className="pl-8 mt-2">
                      {Menu.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex rounded-md p-2 cursor-pointer text-xs items-center gap-x-4 hover:bg-gray-100"
                        >
                          <Link to={subItem.link || "#"} className="w-full">
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
