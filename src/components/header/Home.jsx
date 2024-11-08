// import Sidebar from "../sidebar/Sidebar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import image3 from "../../assets/img/image3.png";
import image4 from "../../assets/img/image4.jpg";
import background from "../../assets/img/background.png";
import StockData from "../stockData/StockData";
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

import {
  IoWalletOutline,
  IoArrowForward,
  IoArrowBack,
  IoTimeOutline,
} from "react-icons/io5";
import Head from "../sidebar/Head";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("US");

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
    <div className="bg-[#F6F8F8] flex">
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

      <div className=" bg-[#F6F8F8] w-[70%] lg:w-[70%] xl:w-[70%] mx-auto relative z-10 m-2 rounded mt-4">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded mt-20">
          <Carousel
            responsive={carouselSettings}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={9000}
            containerClass="z-10"
            arrows={false}
            showDots={false}
          >
            {/* Carousel items */}
            <div className="bg-[#F6F8F8] rounded-lg overflow-hidden block hover:shadow-lg transition-shadow mx-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image1}
                  alt="Image 1"
                  className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="bg-[#F6F8F8] rounded-lg overflow-hidden block hover:shadow-lg transition-shadow mx-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image2}
                  alt="Image 2"
                  className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-cover"
                />
              </div>
            </div>

            <div className="bg-[#F6F8F8] rounded-lg overflow-hidden block hover:shadow-lg transition-shadow mx-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image3}
                  alt="Image 3"
                  className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-cover"
                />
              </div>
            </div>

            <div className="bg-[#F6F8F8] rounded-lg overflow-hidden block hover:shadow-lg transition-shadow mx-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image4}
                  alt="Image 4"
                  className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-cover"
                />
              </div>
            </div>
          </Carousel>
        </div>

        <div className="relative z-10 mt-4">
          <div className="bg-white rounded-lg overflow-hidden p-4">
            <div className="overflow-hidden rounded-lg flex flex-col md:flex-row m-2">
              <div className="flex-1 mb-4 md:mb-0 mx-2">
                <div className="flex items-center justify-between">
                  <div className=" text-gray-800 text-xs sm:text-base md:text-md mb-1 flex items-center">
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
                      <span className="text-xs sm:text-xs md:text-base lg:text-xs text-gray-600">
                        USD
                      </span>
                      <select
                        className="text-xs sm:text-xs md:text-base bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-15"
                        style={{ fontSize: "15px" }}
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                      >
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="CN">China</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-[350px] sm:w-[350px]">
                  <button className="w-full sm:flex-1 min-w-[30px] sm:min-w-[30px] border border-black text-white bg-black py-1 rounded hover:bg-blue-50 hover:text-black transition-colors text-[10px] sm:text-xs">
                    <span className="hidden max-[600px]:block">
                      <IoWalletOutline className="mx-auto text-lg" />
                    </span>
                    <span className="min-[601px]:block hidden">Deposit</span>
                  </button>
                  <button className="w-full sm:flex-1 min-w-[30px] sm:min-w-[30px] border border-black text-black py-1 rounded hover:bg-black hover:text-white transition-colors text-[10px] sm:text-xs">
                    <span className="hidden max-[600px]:block">
                      <IoArrowForward className="mx-auto text-lg" />
                    </span>
                    <span className="min-[601px]:block hidden">Transfer</span>
                  </button>
                  <button className="w-full sm:flex-1 min-w-[30px] sm:min-w-[30px] border border-black text-black py-1 rounded hover:bg-black hover:text-white transition-colors text-[10px] sm:text-xs">
                    <span className="hidden max-[600px]:block">
                      <IoArrowBack className="mx-auto text-lg" />
                    </span>
                    <span className="min-[601px]:block hidden">Withdraw</span>
                  </button>
                  <button className="w-full sm:flex-1 min-w-[30px] sm:min-w-[30px] border border-black text-black py-1 rounded hover:bg-black hover:text-white transition-colors text-[10px] sm:text-xs">
                    <span className="hidden max-[600px]:block">
                      <IoTimeOutline className="mx-auto text-lg" />
                    </span>
                    <span className="min-[601px]:block hidden">History</span>
                  </button>
                </div>
              </div>
              <div className="flex-1  h-auto">
                <div className="text-gray-800 flex justify-center">
                  <div className="bg-[#F6F8F8] rounded-lg shadow-md p-3 border border-gray-200 hover:shadow-lg transition-all duration-300 relative w-[95%] sm:w-[90%] md:w-[85%] h-auto mx-auto">
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
                          </span>{" "}
                          <span className="text-xs sm:text-xs ml-[20px]"></span>
                          <span className="text-xs sm:text-xs ml-[20px]"></span>
                          <span className="text-xs sm:text-xs ml-[20px]"></span>
                          <span className="text-xs sm:text-xs ml-[20px]"></span>
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
                          <span className="text-xs sm:text-xs ml-[20px]"></span>
                          <span className="text-xs sm:text-xs ml-[20px]"></span>
                          <span className="text-xs sm:text-xs ml-[20px]"></span>
                          <span className="text-xs sm:text-xs ml-[20px]"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <StockData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
