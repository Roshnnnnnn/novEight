import { FaPlusCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import logo from "../../assets/img/logo.png";

const Overview = () => {
  const data = [
    { title: "Gold", button: "US $10,000*", subTitle: "Everything in Silver" },
    { title: "Silver", button: "US $5,000*", subTitle: "Everything in Bronze" },
    {
      title: "Bronze",
      button: "US $1,000*",
      subTitle: "Everything in Standard",
    },
    {
      title: "Standard",
      button: "VIP BUTTON LOGIN",
      subTitle: "Access to FX ",
    },
  ];

  return (
    <div>
      <div>
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
            {/* <div className="grid grid-cols-2 gap-4 mt-6">
              {data.map((item, index) => (
                <div key={index} className=" items-center mb-2">
                  <div className="flex flex-col items-center">
                    <h1
                      className="text-3xl font-bold"
                      style={{
                        color:
                          index === 0
                            ? "#C5982F"
                            : index === 1
                            ? "#909090"
                            : index === 2
                            ? "#B17841"
                            : "#002329",
                      }}
                    >
                      {item.title}
                    </h1>
                    <button
                      style={{
                        backgroundColor:
                          index === 0
                            ? "#C5982F"
                            : index === 1
                            ? "#909090"
                            : index === 2
                            ? "#B17841"
                            : "#002329",
                      }}
                      className="cursor-not-allowed text-white font-bold py-2 px-4 rounded mt-2"
                    >
                      {item.button}
                    </button>
                    <div className="flex items-center text-sm font-bold">
                      <FaRegCheckCircle className="mr-2 mt-4 text-green-500 mb-2" />
                      <span
                        style={{
                          color:
                            index === 0
                              ? "#C5982F"
                              : index === 1
                              ? "#909090"
                              : index === 2
                              ? "#B17841"
                              : "#002329",
                        }}
                        className="mt-2"
                      >
                        {item.subTitle}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
