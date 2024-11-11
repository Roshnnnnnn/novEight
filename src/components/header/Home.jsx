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
import { useState } from "react";
import Side from "../sidebar/Side";

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

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [activeButton, setActiveButton] = useState(null);

  // Consolidate carousel responsive settings
  const carouselSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

  const FlagComponent = countryFlags[selectedCountry];

  return (
    <div className="flex bg-[#F6F7F8]">
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-[100vh]"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-[#F6F8F8] p-4 rounded shadow-lg mt-4">
            <h2 className="text-lg">Welcome to the Home Page!</h2>
            <p>Click anywhere to close this modal.</p>
          </div>
        </div>
      )}
      <Side />

      <div className=" w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div>
          <div className="mx-auto relative m-2 rounded mt-16 mb-6 ">
            <Carousel
              responsive={carouselSettings}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={9000}
              containerClass="z-[-50]"
              arrows={false}
              showDots={false}
            >
              {/* Carousel items */}
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
            </Carousel>
          </div>

          <div className="relative z-[-50] mt-4">
            <div className="bg-white rounded-lg overflow-hidden p-4">
              <div className="overflow-hidden rounded-lg flex flex-col md:flex-row m-2">
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
                  <div className="text-gray-800 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-3 sm:w-5 sm:h-4 md:w-6 md:h-4">
                          <FlagComponent title={selectedCountry} />
                        </span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold">
                          {isVisible ? "0.00" : "****"}
                        </span>

                        <select
                          className="text-xs sm:text-xs md:text-base rounded-md sm:w-15 p-2 z-10 bg-white dark:bg-gray-700"
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

                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full">
                    <button
                      className={`w-full sm:flex-1 min-w-[30px] border border-black text-black ${
                        activeButton === "deposit" ? "bg-blue-500" : ""
                      } py-1 rounded hover:bg-blue-50 hover:text-black transition-colors text-[10px] sm:text-xs`}
                      onClick={() => setActiveButton("deposit")}
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
                      onClick={() => setActiveButton("transfer")}
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
                      onClick={() => setActiveButton("withdraw")}
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
                <div className="flex-1 h-auto">
                  <div className="text-gray-800 flex justify-center">
                    <div className="bg-[#F6F8F8] rounded-lg shadow-md p-3 border border-gray-200 hover:shadow-lg transition-all duration-300 relative w-full h-auto mx-auto">
                      <img
                        src={background}
                        alt="Image"
                        className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 object-cover animate-pulse blur-sm"
                      />
                      <div className="text-xs sm:text-xs text-gray-400">
                        Trading Account
                      </div>
                      <div className="flex flex-col mt-2 space-y-3">
                        {/* First Account */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                          <div className="flex items-center gap-2 sm:gap-4">
                            <span className="text-xs sm:text-xs">MT5</span>
                            <span className="text-xs sm:text-xs">51602557</span>
                            <span className="text-xs sm:text-xs font-semibold">
                              0.00 USD
                            </span>
                          </div>
                          <div className="">
                            <span className="text-xs sm:text-xs ">
                              Standard STP
                            </span>
                          </div>
                        </div>

                        {/* Second Account */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                          <div className="flex items-center gap-2 sm:gap-4">
                            <span className="text-xs sm:text-xs">MT5</span>
                            <span className="text-xs sm:text-xs">51602557</span>
                            <span className="text-xs sm:text-xs font-semibold">
                              0.00 USD
                            </span>
                          </div>
                          <div className="">
                            <span className="text-xs sm:text-xs ">
                              Standard STP
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white">
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
