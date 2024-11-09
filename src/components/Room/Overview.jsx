import { FaPlusCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import logo from "../../assets/img/logo.png";

const Overview = () => {
  return (
    <div>
      <div className="p-16">
        <div className="flex justify-center pb-6">
          <button className="btn text-white bg-[#E35728] rounded px-2 py-2 hover:bg-orange-500 rounded-4">
            DEPOSIT NOW
          </button>
        </div>
        <div>
          <div className="flex justify-center">
            <h1 className="text-xl font-bold text-orange-600">
              Experience Plus
            </h1>
          </div>
          <div className="flex justify-center mt-3">
            <h1 className=" font-bold " style={{ fontSize: "35px" }}>
              UNLOCK YOUR PREMIUM SERVICES
            </h1>
          </div>
          <div>
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg shadow-md mt-8 flex">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-700 flex justify-center mb-4">
                  Platinum
                </h2>
                <div className="text-lg font-semibold text-gray-600 flex justify-center my-2">
                  <button className="cursor-not-allowed font-semibold border border-gray-400 p-2 mb-5 rounded text-sm bg-gray-200 hover:bg-gray-300">
                    US $50,000*
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <ul className="pl-5 text-gray-600">
                    <li className="flex items-center mb-2">
                      <FaRegCheckCircle className="mr-2  text-green-500" />{" "}
                      Everything in Gold
                    </li>
                    <li className="font-bold flex items-center mb-2">
                      <FaPlusCircle className="mr-2 text-xl text-blue-500" />
                      Access to a special channel where you can DM the Chief
                      Trader Weekly group 30 min consultation session
                    </li>
                  </ul>
                  <ul className="pl-5 text-gray-600">
                    <li className="font-bold flex items-center mb-2">
                      <FaPlusCircle className="mr-2 text-sm text-blue-500" />
                      MT4 Ultimate Trade Manager
                    </li>
                    <li className="font-bold flex items-center mb-2">
                      <FaPlusCircle className="mr-2 text-sm text-blue-500" />{" "}
                      MT4 Fibonacci Confluence Scanner
                    </li>
                    <li className="font-bold flex items-center mb-2">
                      <FaPlusCircle className="mr-2 text-sm text-blue-500" />{" "}
                      VIP Badge
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <img
                  src={logo}
                  alt="Logo"
                  className=" h-[5rem] w-[5rem] rotate-45"
                />
                <img
                  src={logo}
                  alt="Logo"
                  className=" h-[5rem] w-[5rem] rotate-45"
                />
                <img
                  src={logo}
                  alt="Logo"
                  className=" h-[5rem] w-[5rem] rotate-45"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
            {/* Gold Section */}
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gold-500">Gold</h2>
              <button className="cursor-not-allowed font-semibold border border-gray-400 p-2 mb-5 rounded text-sm bg-gray-200 hover:bg-gray-300">
                US $10,000*
              </button>
              <ul className="text-[#C5982F]">
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2 text-green-500" />
                  Everything in Silver
                </li>
                <li className="flex font-bold items-center">
                  <FaPlusCircle className="mr-2 text-green-500" />
                  Access to a special channel where you can DM Professional
                  Traders
                </li>
                <li className="flex font-bold items-center">
                  <FaPlusCircle className="mr-2 text-green-500" />
                  MT4 Ultimate Trade Manager
                </li>
                <li className="flex font-bold items-center">
                  <FaPlusCircle className="mr-2 text-green-500" />
                  MT4 Fibonacci Extension Scanner
                </li>
              </ul>
            </div>

            {/* Silver Section */}
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-silver-500">Silver</h2>
              <button className="cursor-not-allowed font-semibold border border-gray-400 p-2 mb-5 rounded text-sm bg-gray-200 hover:bg-gray-300">
                US $5,000*
              </button>
              <ul className="text-gray-600">
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2 text-green-500" />
                  Everything in Bronze
                </li>
                <li className="flex font-bold items-center">
                  <FaPlusCircle className="mr-2 text-green-500" />
                  Access to a special channel to request analysis
                </li>
                <li className="flex font-bold items-center">
                  <FaPlusCircle className="mr-2 text-green-500" />
                  MT4 Candlestick Pattern Scanner
                </li>
              </ul>
            </div>

            {/* Bronze Section */}
            <div className="bg-gradient-to-r from-[#cd7f32] to-[#b08d57] p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-brown-500">Bronze</h2>
              <button className="cursor-not-allowed font-semibold border border-gray-400 p-2 mb-5 rounded text-sm bg-gray-200 hover:bg-gray-300">
                US $1,000*
              </button>
              <ul className="text-gray-600">
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2 text-green-500" />
                  Everything in Standard
                </li>
                <li className="flex font-bold items-center">
                  <FaPlusCircle className="mr-2 text-green-500" />
                  Access to Commodities, Indices, Crypto
                </li>
                <li className="flex font-bold items-center">
                  <FaPlusCircle className="mr-2 text-green-500" /> MT4 Ultimate
                  Support & Resistance Indicator
                </li>
              </ul>
            </div>

            {/* Standard Section */}
            <div className="bg-gradient-to-r from-blue-200 to-blue-300 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-500">Standard</h2>
              <button className="btn text-white bg-blue-500 rounded px-2 py-2 hover:bg-blue-600">
                VIP ROOM LOGIN
              </button>
              <ul className="text-gray-600">
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2 text-green-500" />
                  Access to FX
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2 text-green-500" />
                  Institutional-Grade Analysis
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2 text-green-500" />
                  Daily Key Support Levels
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2 text-green-500" />
                  Daily Key Resistance Levels
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2 text-green-500" />
                  Chat with fellow traders
                </li>
                <li className="flex items-center">
                  <FaRegCheckCircle className="mr-2 text-green-500" />
                  Get guidance from professional traders
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4" style={{ fontSize: "11px" }}>
        *To be eligible to use Live Trading Room service, you need to meet the
        initial minimum funding requirement indicated as above since the date of
        launch. You will need to complete at least $1,000 of notional value on
        closed trades of products offered by Vantage each month to retain access
        permission on Live Trading Room. Your access permission will be disabled
        automatically if you fail to complete at least $1,000 of notional value
        on closed trades in a month. You are required to further deposit the
        required funding amount to reactivate access on Live Trading Room.
      </p>
      <p className="mt-4" style={{ fontSize: "11px" }}>
        Please be advised that the information presented on
        vip.vantagemarkets.com is provided to Vantage (‘Vantage Global Limited’,
        ‘we’) by a third-party provider (‘Everest Fortune Group’). It is
        intended entirely for research and informational purposes only and does
        not constitute any financial advice to buy, sell or hold a particular
        product or pursue any particular investment strategy. The information is
        not tailored to the investment needs of any specific person and
        therefore does not involve a consideration of any of the investment
        objectives, financial situation or needs of any viewer that may receive
        it. Kindly also note that past performance is not a reliable indicator
        of future performance and/or results. Actual results may differ
        materially from those anticipated in forward-looking or past performance
        statements. We assume no liability as to the accuracy or completeness of
        any of the information provided herein, nor any loss that may arise from
        any information supplied by Everest Fortune Group.
      </p>
    </div>
  );
};

export default Overview;
