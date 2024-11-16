import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";
import image4 from "../../assets/img/image4.jpg";
import background from "../../assets/img/logo.png";
// import StockData from "../stockData/StockData";
import StockData from "./StockData";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import Side from "../sidebar/Side";
import Promotion from "../../assets/img/Promotion.png";
import Account from "../../assets/img/Account.png";
import Deposit from "../../assets/img/Deposit.png";

import {
  GB,
  US,
  CA,
  AU,
  DE,
  FR,
  IT,
  JP,
  CN,
} from "country-flag-icons/react/3x2";
import { IoWalletOutline, IoArrowForward, IoArrowBack } from "react-icons/io5";
import Head from "../sidebar/Head";
import { Link } from "react-router-dom";
import Navbar from "../sidebar/Navbar";
import axios from "axios";
import { setUserInfo } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const API_BASE_URL = "https://api.novotrend.co/api";
const LIVE_ACCOUNT_LIST = `${API_BASE_URL}/open_live_account_list.php`;
const GET_USER = `${API_BASE_URL}/get_users.php`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [activeButton, setActiveButton] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [bal, setBal] = useState([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const token = localStorage.getItem("userToken");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(GET_USER, { token });

        if (response.data.data.response) {
          const { response: userData } = response.data.data;
          const userCountryId = userData.user_country || "";

          dispatch(
            setUserInfo({
              name: userData.user_name || "",
              email: userData.user_reg_code || "",
              mobile: userData.user_mobile || "",
              dob: userData.req_date || "",
              country: userCountryId,
              user_img: userData.user_img || "",
              authType: userData.user_auth_type || "",
            })
          );
        }
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await axios.post(LIVE_ACCOUNT_LIST, { token });
        console.log(response);
        if (response.data.data.status === 200) {
          const accountsData = response.data.data.response;
          if (Array.isArray(accountsData)) {
            setAccounts(accountsData);
            const balanceData = accountsData.map((account) => ({
              balance: account.balance,
            }));
            setBal(balanceData);
          } else {
            console.log("No accounts found.");
          }
        }
      } catch (error) {
        console.log("Error fetching accounts:", error);
      }
    };

    fetchAccount();
    setIsPageLoaded(true);
  }, [token]);
  console.log(bal);

  // Update carousel settings to show only one item
  // const carouselSettings = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 2, // Show 1 item on desktop
  //     partialVisibilityGutter: 30,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1, // Show 1 item on tablet
  //   },
  //   mobile: {
  //     breakpoint: { max: 204, min: 0 },
  //     items: 1, // Show 1 item on mobile
  //   },
  // };

  const countryFlags = {
    US: US,
    GB: GB,
    CA: CA,
    AU: AU,
    DE: DE,
    FR: FR,
    IT: IT,
    JP: JP,
    CN: CN,
  };

  // const accounts = [
  //   {
  //     id: "51602550",
  //     type: "MT5",
  //     balance: "0.00 USD",
  //     description: "Standard STP",
  //   },
  //   {
  //     id: "51602558",
  //     type: "MT5",
  //     balance: "0.00 USD",
  //     description: "Standard STP",
  //   },
  // ];

  const FlagComponent = countryFlags[selectedCountry];

  return (
    <div
      className={`flex bg-[#F6F7F8] transition-opacity duration-700 ${
        isPageLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-[100vh] transition-opacity duration-500 ease-in-out opacity-100"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-[#F6F8F8] p-4 rounded shadow-lg mt-4 transform transition-transform duration-500 ease-in-out scale-100">
            <h2 className="text-lg">Welcome to the Home Page!</h2>
            <p>Click anywhere to close this modal.</p>
          </div>
        </div>
      )}
      <Side />

      <div className="lg:w-[60%] md:w-[90%] sm:w-[90%] mx-auto relative z-10 m-2 rounded lg:mt-16 md:mt-4">
        <Navbar />
        <Head />
        <div>
          <div>
            <div className="lg:hidden bg-white p-4 rounded-xl shadow-xl">
              <div className="">
                <div className="mb-4 flex gap-x-2 mb-3">
                  <h1>Total Assets Estimate</h1>
                  {isVisible ? (
                    <IoEyeOutline
                      className="text-gray-800 text-xs sm:text-xs md:text-base mr-2 mt-1 cursor-pointer"
                      onClick={() => setIsVisible(false)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="text-gray-800 text-xs sm:text-lg md:text-base mr-2 mt-1 cursor-pointer"
                      onClick={() => setIsVisible(true)}
                    />
                  )}
                </div>
                <div className="flex justify-between mt-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="w-4 h-3 sm:w-5 sm:h-4 md:w-6 md:h-4 ">
                      <FlagComponent title={selectedCountry} />
                    </span>
                    <span className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold">
                      {isVisible ? bal[0]?.balance : "****"}
                    </span>

                    <select
                      className="text-xs sm:text-xs md:text-base rounded-md  sm:w-15 p-2 z-10 bg-white dark:bg-gray-700 focus:outline-none"
                      style={{ fontSize: "15px" }}
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                      <option value="CN">CN</option>
                      <option value="JP">JP</option>
                      <option value="IT">IT</option>
                      <option value="FR">FR</option>
                      <option value="DE">DE</option>
                      <option value="AU">AU</option>
                      <option value="CA">CA</option>
                      <option value="GB">UK</option>
                      <option value="US">US</option>
                    </select>
                  </div>
                  <div>
                    <button className="bg-orange-500 text-xs text-white p-2 rounded-lg">
                      <Link to={"/depositFunds"}>Deposit</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-around">
                  <div className="flex flex-col items-center">
                    <Link to="/accountManagement" className="text-xs">
                      <img src={Account} alt="" className="w-8 h-8" />
                      Account
                    </Link>
                  </div>
                  <div className="flex flex-col items-center">
                    <Link to="/depositFunds" className="text-xs">
                      <img src={Deposit} alt="" className="w-8 h-8" />
                      Deposit
                    </Link>
                  </div>
                  {/* <div className="flex flex-col items-center">
                    <img src={Promotion} alt="" className="w-8 h-8" />
                    <Link to="/promotion" className="text-xs">
                      Promotion
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mx-auto relative m-2 rounded lg:mt-16 md:mt-4 sm:mt-4 mb-6 hidden lg:block"> </div> */}
          {/* <Carousel
            responsive={carouselSettings}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={9000}
            containerClass="z-[-50]"
            arrows={false}
            showDots={false}
          >
            <div className="bg-[#F6F8F8] rounded-lg overflow-hidden block hover:shadow-lg transition-shadow mx-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image1}
                  alt="Image 1"
                  className="w-full h-[50px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="bg-[#F6F8F8] rounded-lg overflow-hidden block hover:shadow-lg transition-shadow mx-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image2}
                  alt="Image 2"
                  className="w-full h-[50px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-cover"
                />
              </div>
            </div>

            <div className="bg-[#F6F8F8] rounded-lg overflow-hidden block hover:shadow-lg transition-shadow mx-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image3}
                  alt="Image 3"
                  className="w-full h-[50px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-cover"
                />
              </div>
            </div>

            <div className="bg-[#F6F8F8] rounded-lg overflow-hidden block hover:shadow-lg transition-shadow mx-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image4}
                  alt="Image 4"
                  className="w-full h-[50px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-cover"
                />
              </div>
            </div>
          </Carousel> */}

          <div className="mt-4">
            <div className=" bg-white rounded-lg overflow-hidden p-4 hidden lg:block">
              <div className=" overflow-hidden rounded-lg flex flex-col md:flex-row m-2">
                <div className="flex-1 mb-4 md:mb-0 mx-2">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-800 text-xs sm:text-base md:text-md mb-1 flex items-center">
                      {isVisible ? (
                        <IoEyeOutline
                          className="text-gray-800 text-xs sm:text-xs md:text-base mr-2 cursor-pointer"
                          onClick={() => setIsVisible(false)}
                        />
                      ) : (
                        <IoEyeOffOutline
                          className="text-gray-800 text-xs sm:text-lg md:text-base mr-2 cursor-pointer"
                          onClick={() => setIsVisible(true)}
                        />
                      )}
                      Total Assets Estimate
                    </div>
                  </div>
                  <div className="text-gray-800 mb-4 ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-3 sm:w-5 sm:h-4 md:w-6 md:h-4">
                          <FlagComponent title={selectedCountry} />
                        </span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold">
                          {isVisible ? bal[0]?.balance : "****"}
                        </span>

                        <select
                          className="text-xs sm:text-xs md:text-base  rounded-md sm:w-15 p-2 z-10 bg-white dark:bg-gray-700"
                          style={{ fontSize: "15px" }}
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                          <option value="CN">CN</option>
                          <option value="JP">JP</option>
                          <option value="IT">IT</option>
                          <option value="FR">FR</option>
                          <option value="DE">DE</option>
                          <option value="AU">AU</option>
                          <option value="CA">CA</option>
                          <option value="GB">UK</option>
                          <option value="US">US</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div
                    className="grid grid-cols-2 sm:grid-cols-1 sm:flex sm:flex-wrap gap-2 w-full"
                    style={{ zIndex: -1000 }}
                  >
                    <button
                      className={`w-full sm:flex-1 min-w-[30px] border border-black text-black ${
                        activeButton === "deposit" ? "bg-blue-500" : ""
                      } py-1 rounded hover:bg-blue-50 hover:text-black transition-colors text-[10px] sm:text-xs`}
                      onClick={() => {
                        console.log("Deposit button clicked");
                        setActiveButton("deposit");
                      }}
                    >
                      <span className="hidden max-[600px]:block">
                        <IoWalletOutline className="mx-auto text-lg" />
                      </span>
                      <span className="min-[601px]:block hidden">
                        <Link to={"/depositFunds"}>Deposit</Link>
                      </span>
                    </button>
                    <button
                      className={`w-full sm:flex-1 min-w-[30px] border border-black text-black ${
                        activeButton === "transfer" ? "bg-blue-500" : ""
                      } py-1 rounded hover:bg-blue-50 hover:text-black transition-colors text-[10px] sm:text-xs`}
                      onClick={() => {
                        console.log("Transfer button clicked");
                        setActiveButton("transfer");
                      }}
                    >
                      <span className="hidden max-[600px]:block">
                        <IoArrowForward className="mx-auto text-lg" />
                      </span>
                      <span className="min-[601px]:block hidden">
                        <Link to={"/transferFunds"}>Transfer</Link>
                      </span>
                    </button>
                    <button
                      className={`w-full sm:flex-1 min-w-[30px] border border-black text-black ${
                        activeButton === "withdraw" ? "bg-blue-500" : ""
                      } py-1 rounded hover:bg-blue-50 hover:text-black transition-colors text-[10px] sm:text-xs`}
                      onClick={() => {
                        console.log("Withdraw button clicked");
                        setActiveButton("withdraw");
                      }}
                    >
                      <span className="hidden max-[600px]:block">
                        <IoArrowBack className="mx-auto text-lg" />
                      </span>
                      <span className="min-[601px]:block hidden">
                        <Link to={"/transferFunds"}>Withdraw</Link>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex-1 h-auto relative">
                  <div
                    className={`text-gray-800 flex justify-center ${
                      accounts.length === 1 ? "items-center" : ""
                    }`}
                  >
                    <div className="bg-[#F6F8F8] rounded-lg shadow-md p-3 border border-gray-200 hover:shadow-lg transition-all duration-300 relative w-full h-[7rem] mx-auto">
                      <img
                        src={background}
                        alt="Image"
                        className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 object-cover animate-pulse blur-sm"
                      />
                      <div className="text-xs sm:text-xs text-gray-400">
                        Trading Account
                      </div>
                      {accounts.length === 0 ? (
                        <div className="text-red-500 text-xs flex justify-center mt-6">
                          No Account found
                        </div>
                      ) : (
                        <div className="flex flex-col mt-2 space-y-3">
                          {accounts.slice(0, 2).map((account, index) => (
                            <div
                              key={index}
                              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0"
                            >
                              <div className="flex items-center gap-2 sm:gap-4">
                                <span className="text-xs sm:text-xs">
                                  {account.account_type}
                                </span>
                                <span className="text-xs sm:text-xs">
                                  {account.accno}
                                </span>
                                <span className="text-xs sm:text-xs font-semibold">
                                  {account.balance} USD
                                </span>
                              </div>
                              <div className="">
                                <span className="text-xs sm:text-xs pr-6">
                                  Leverages:
                                  {account.leverages}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {accounts.length > 2 && (
                      <button className="text-orange-500 text-xs absolute right-0 mt-2 mr-10">
                        <Link to={"/accountManagement"}>More</Link>
                      </button>
                    )}
                    {accounts.length === 0 && (
                      <Link to={"/accountManagement"}>
                        <button className="text-orange-500 text-xs absolute right-0 mt-3 mr-10">
                          Create Account
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-xl shadow-2xl">
              {/* <StockData /> */}
              <StockData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
