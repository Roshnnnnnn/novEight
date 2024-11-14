// import React, { useState } from "react";
// import { GB as GBFlag } from "country-flag-icons/react/3x2";
// import Side from "../sidebar/Side";
// import Head from "../sidebar/Head";

// const Account = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const accounts = [
//     {
//       id: "51602557",
//       type: "MT5",
//       status: "Active",
//       balance: 0.0,
//       credits: 0.0,
//       currency: "USD",
//       leverage: "500:1",
//       server: "Standard STP",
//       platform: "NovotrendInternational-Live 4",
//     },
//     {
//       id: "51627838",
//       type: "MT5",
//       status: "Active",
//       balance: 0.0,
//       credits: 0.0,
//       currency: "USD",
//       leverage: "500:1",
//       server: "Standard STP",
//       platform: "NovotrendInternational-Live 4",
//     },
//     {
//       id: "1461486",
//       type: "MT5",
//       status: "Inactive",
//       balance: "-",
//       credits: "-",
//       server: "Standard STP",
//       platform: "NovotrendInternational-Live",
//     },
//   ];

//   // Function to handle clicks outside the modal
//   const handleOverlayClick = (e) => {
//     if (e.target.className.includes("overlay")) {
//       closeModal();
//     }
//   };

//   return (
//     <div className="flex bg-[#F6F8F8]">
//       {/* <Side /> */}
//       <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
//         <Head />
//         <div className="mx-auto relative z-10 m-2 rounded-lg mt-16">
//           {/* Top Navigation - Made Responsive */}
//           <div className="flex justify-between">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <select className="border rounded-md px-4 py-1 text-xs bg-white shadow-md">
//                 <option>Live Account</option>
//                 <option>Demo Account</option>
//               </select>
//               <select className="border rounded-md px-4 py-1 text-xs bg-white shadow-md">
//                 <option>All</option>
//                 <option>Active</option>
//                 <option>Rejected</option>
//                 <option>Processing</option>
//                 <option>Pending</option>
//                 <option>Inactive</option>
//               </select>
//               <select className="border rounded-md px-4 py-2 text-xs bg-white shadow-md">
//                 <option disabled>Trading Platforms</option>
//                 <option>All</option>
//                 <option>MT4</option>
//                 <option>MT5</option>
//                 <option>Copy Trading</option>
//               </select>
//             </div>
//             <div className="flex gap-4 w-full sm:w-auto justify-end text-xs">
//               <button
//                 onClick={openModal}
//                 className="bg-white text-red-500 px-4 py-2 rounded-md flex items-center justify-center"
//               >
//                 <span className="mr-2">+</span>
//                 Open Account
//               </button>
//               <button className="p-2 border rounded-md">
//                 <span>⋮</span>
//               </button>
//             </div>
//           </div>

//           {/* Account Cards - Adjusted size and spacing */}
//           <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-2 justify-center items-center">
//             {accounts.map((account) => (
//               <div
//                 key={account.id}
//                 className="border my-1 rounded-lg p-2 bg-white w-full"
//               >
//                 {/* Account Header */}
//                 <div className="flex justify-between items-center mb-1 relative">
//                   <div className="flex items-center">
//                     <span className="text-gray-500 text-xs">
//                       {account.type}
//                     </span>
//                     <span className="ml-1 text-xs">{account.id}</span>
//                   </div>
//                   <span
//                     className={`px-2 py-1 rounded text-xs ${
//                       account.status === "Active"
//                         ? "bg-green-100 text-green-600"
//                         : "bg-gray-100 text-gray-600"
//                     }`}
//                   >
//                     {account.status}
//                   </span>
//                 </div>

//                 {/* Balance Display - Updated with country flag */}
//                 <div className="flex items-center  mb-1">
//                   <GBFlag className="w-3 h-3 mr-1" />
//                   <span className="text-xs font-medium">{account.balance}</span>
//                   <span className="ml-1 text-xs text-gray-500">
//                     {account.currency}
//                   </span>
//                 </div>

//                 {/* Credits & Balance */}
//                 <div className="flex gap-2 mb-1 text-xs my-2">
//                   <div>
//                     <span className="text-gray-500 font-bold">Credits: </span>
//                     <span className="font-bold">{account.credits}</span>
//                     <span className="ml-1 text-red-500">!</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-500">Balance: </span>
//                     <span>{account.balance}</span>
//                   </div>
//                 </div>

//                 {/* Account Details */}
//                 <div
//                   className="flex flex-wrap gap-1 my-2 text-xs text-gray-500 mb-1"
//                   style={{ fontSize: "12px" }}
//                 >
//                   {account.leverage && <span>{account.leverage}</span>}
//                   {account.server && <span>• {account.server}</span>}
//                   {account.platform && <span>• {account.platform}</span>}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-1 my-2">
//                   <button className="px-2 py-1 border rounded text-xs hover:bg-gray-50">
//                     Deposit
//                   </button>
//                   <button className="px-2 py-1 border rounded text-xs hover:bg-gray-50">
//                     Trade
//                   </button>
//                   <button className="p-1 border rounded hover:bg-gray-50">
//                     ⚙️
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Modal */}
//           {isModalOpen && (
//             <div
//               className="fixed inset-0 flex items-center justify-center overlay bg-black bg-opacity-50"
//               onClick={handleOverlayClick}
//             >
//               <div className="bg-white p-4 rounded shadow-lg">
//                 <h2 className="text-lg font-bold">Open Account</h2>
//                 {/* Form Elements */}
//                 <form>
//                   <label>Choose a Trading Platform</label>
//                   <select className="border rounded-md w-full mb-2">
//                     <option>MetaTrader 5</option>
//                     {/* Other options... */}
//                   </select>
//                   <label>Choose an Account Type</label>
//                   <div className="flex gap-2 mb-2">
//                     <button type="button" className="border rounded p-2">
//                       Standard
//                     </button>
//                     <button type="button" className="border rounded p-2">
//                       RAW
//                     </button>
//                     <button type="button" className="border rounded p-2">
//                       SWAP-FREE
//                     </button>
//                   </div>
//                   <label>Choose an Account Currency</label>
//                   <div className="flex gap-2 mb-2">
//                     <button type="button" className="border rounded p-2">
//                       USD
//                     </button>
//                     <button type="button" className="border rounded p-2">
//                       EUR
//                     </button>
//                     {/* Other currencies... */}
//                   </div>
//                   <label>Additional Notes</label>
//                   <input
//                     placeholder="Eg. IB/MAM/Server Location"
//                     className="border rounded-md w-full mb-2"
//                   />

//                   <div className="flex justify-center">
//                     <button
//                       type="submit"
//                       className="bg-blue-500 text-white rounded p-2"
//                       disabled={!isChecked}
//                     >
//                       Submit
//                     </button>
//                     <button
//                       type="button"
//                       onClick={closeModal}
//                       className="border rounded p-2"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                   {/* Terms and Conditions */}
//                   <div className="mb-2">
//                     <label>
//                       <input
//                         type="checkbox"
//                         checked={isChecked}
//                         onChange={() => setIsChecked(!isChecked)}
//                       />
//                       By ticking this box:
//                     </label>
//                     <ol className="list-decimal ml-4">
//                       <li>
//                         I acknowledge I have read and understood the{" "}
//                         <a href="#" className="text-blue-500">
//                           Risk Warning Notice
//                         </a>
//                         ...
//                       </li>
//                       <li>
//                         I acknowledge that I have read, understood and accept
//                         the{" "}
//                         <a href="#" className="text-blue-500">
//                           Novotrend Client Agreement
//                         </a>
//                         ...
//                       </li>
//                       <li>
//                         I understand that Novotrend will not provide me with any
//                         investment advice...
//                       </li>
//                       <li>
//                         I also confirm that I have read, understood and agree to
//                         be bound by Novotrend{" "}
//                         <a href="#" className="text-blue-500">
//                           Privacy Policy
//                         </a>
//                         .
//                       </li>
//                       <li>
//                         I understand that personal information submitted as part
//                         of this application...
//                       </li>
//                       <li>
//                         I confirm that the information provided by me and
//                         inserted in this form is correct...
//                       </li>
//                       <li>
//                         I confirm that I have acted in my own name as specified
//                         in this application...
//                       </li>
//                       <li>
//                         I agree to be bound by Novotrend’s{" "}
//                         <a href="#" className="text-blue-500">
//                           deposits and withdrawals policy
//                         </a>
//                         .
//                       </li>
//                       <li>
//                         I have read, understood and agreed to be bound by
//                         Novotrend’s deposits and withdrawals policy.
//                       </li>
//                       <li>
//                         I confirm that my registration was made at my own
//                         initiative and that no solicitation has been made by
//                         Novotrend.
//                       </li>
//                     </ol>
//                   </div>

//                   {/* <div className="flex justify-center">
//                     <button
//                       type="submit"
//                       className="bg-blue-500 text-white rounded p-2"
//                       disabled={!isChecked}
//                     >
//                       Submit
//                     </button>
//                     <button
//                       type="button"
//                       onClick={closeModal}
//                       className="border rounded p-2"
//                     >
//                       Cancel
//                     </button>
//                   </div> */}
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;
