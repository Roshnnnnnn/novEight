import { useState } from "react";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import { FaWallet, FaInfo } from "react-icons/fa";

const NationalVolumeCalculator = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex">
      <Side />
      <div className=" w-[70%] lg:w-[70%] xl:w-[70%] mx-auto relative z-10 m-2 rounded mt-4">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded mt-20">
          <div className="flex justify-center ">
            <div className="text-black p-4 border">
              <div className="rounded shadow-lg p-2">
                <form action="">
                  <div className="mt-3">
                    <span className="text-orange-500">*</span>
                    <label className="text-xs">Product</label>
                    <select name="" id="" className=" w-full border text-xs">
                      <option value="">Select</option>
                      <option value="">CHINA50</option>
                      <option value="">Nikkiei225</option>
                      <option value="">BTHUSD</option>
                      <option value="">ETHUSD</option>
                    </select>
                  </div>
                  <div className="flex flex-wrap mt-2">
                    <div className="w-full md:w-1/2">
                      <div className="flex flex-col">
                        <label className="text-xs">
                          <span className="text-orange-500">*</span>
                          Trading Lots
                        </label>
                        <input
                          type="number"
                          placeholder="0"
                          className="border block text-xs rounded"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="flex flex-col">
                        <label className="text-xs">
                          <span className="text-orange-500">*</span>
                          Choose Price
                        </label>
                        <input
                          type="number"
                          placeholder="0"
                          className="text-xs border rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card py-4 px-3 bg-gradient-to-r from-orange-50 to-yellow-50 mt-2 rounded-lg">
                    <div className="flex">
                      <div className="w-1/2 flex flex-col text-xs">
                        <label>Contract Size</label>
                        <span>-</span>
                      </div>
                      <div className="w-1/2 flex flex-col text-xs">
                        <label>Exchange Rate</label>
                        <span>-</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-3 gap-x-2 ">
                    <div className="w-full md:w-1/2 text-xs">
                      <button className="btn text-orange-500 rounded border border-orange-500 hover:bg-orange-500 hover:text-white w-full rounded-3 py-1">
                        Reset
                      </button>
                    </div>
                    <div className="w-full md:w-1/2 text-xs">
                      <button className="btn text-black rounded border w-full text-white bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 rounded-3 py-1">
                        Calculator
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-3 p-3 flex items-center">
                  <p className="m-0 text-xs flex items-center">
                    <FaWallet /> Approx. Notional Volume (USD) <FaInfo /> 0.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-lg rounded-lg p-4  ">
            <div className="flex justify-between items-center">
              <div
                className="text-sm cursor-pointer "
                onClick={toggleVisibility}
              >
                What is Notional Volume and Why Does It Matter?
              </div>
              <span className="cursor-pointer" onClick={toggleVisibility}>
                {isVisible ? "-" : "+"}
              </span>
            </div>
            <hr className="my-4" />
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                isVisible ? "max-h-screen" : "max-h-0"
              }`}
            >
              {isVisible && (
                <div>
                  <p className="text-[#1D4752] text-xs mt-4 mb-4 ">
                    Notional volume in finance is often referred to as the total
                    value of a derivative contract position, determined by
                    multiplying the notional value with the lot size. It
                    represents the nominal or face value of a financial
                    instrument or contract.
                  </p>
                  <p className="text-gray-400 text-xs mb-4">
                    At Novotrend, most promotions use notional volume (USD) from
                    closed trades as one of the key eligibility criteria to
                    qualify for the rewards offered in each promotion.
                  </p>
                  <p className="text-gray-400 text-xs mb-4">
                    Here is how the notional volume in USD is calculated:
                  </p>
                  <p className="text-[#1D4752] text-xs mb-4">
                    Notional Volume (USD) = Trading lot X Contract size X
                    Closing price of the underlying assets X End of day product
                    exchange rate
                  </p>
                  <p className="text-gray-400 text-xs mb-4">
                    To get the notional volume in millions (USD):
                  </p>
                  <p className="text-[#1D4752] text-xs mb-4">
                    Notional Volume in millions (USD) = Notional Volume (USD) ÷
                    1,000,000
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalVolumeCalculator;
