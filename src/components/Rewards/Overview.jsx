import { MdKeyboardArrowRight } from "react-icons/md";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import { Link } from "react-router-dom";
import { IoInformationCircleSharp } from "react-icons/io5";
import Reward from "../../assets/img/rewards.jpg";
import earn from "../../assets/img/earn.svg";
import redeem from "../../assets/img/redeem.svg";
import trade from "../../assets/img/trade.svg";

const Overview = () => {
  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-10 m-2 bg-white p-8 rounded-lg mt-16 z-[-50]">
          <div className="w-[100%] gap-x-6 flex ">
            <div
              className="h-[10rem] rounded-2xl w-[50rem] justify-center px-3 py-3 text-white bg-cover "
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Reward})`,
              }}
            >
              <div className="text-start mt-8">
                <h3 className="text-lg">NOVOTREND Rewards</h3>
                <p className="text-xs">Reap more rewards as you trade</p>
              </div>
            </div>
            <div className=" ">
              <div className="h-full bg-white rounded-lg shadow">
                <div className="p-3">
                  <p className="flex items-center gap-2 text-xs">
                    <p>LOGO</p>
                    <span>N-Points</span>
                    <IoInformationCircleSharp />
                  </p>
                  <h1 className="text-xl">0</h1>
                  <p className="m-0 text-xs" style={{ fontSize: "12px" }}>
                    Make your first deposit to unlock redemptions
                  </p>
                </div>
                <hr />
                <div className="p-3 flex justify-between items-center">
                  <Link
                    to="#"
                    className="text-black text-xs"
                    style={{ fontSize: "12px" }}
                  >
                    Terms and Conditions
                  </Link>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="h-full bg-white rounded-lg shadow p-4">
              <div className="flex justify-center ">
                <h1 className="text-xl">Discover Novotrend Rewards</h1>
              </div>
              <div className="gap-x-10 flex justify-between mt-4 m-6 p-4">
                <div className="text-center">
                  <img
                    src={trade}
                    alt="Trade Icon"
                    className="mx-auto"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h3>Trade</h3>
                  <p className="text-xs mt-4 text-gray-500">
                    Make every trade count by joining Novotrend Rewards.
                    N-Points are earned every time you trade.
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src={earn}
                    alt="Earn Icon"
                    className="mx-auto"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h3>Earn</h3>
                  <p className="text-xs mt-4 text-gray-500">
                    Earn additional N-Points by completing our daily, weekly,
                    monthly, and ad-hoc missions.
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src={redeem}
                    alt="Redeem Icon"
                    className="mx-auto"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h3>Redeem</h3>
                  <p className="text-xs mt-4 text-gray-500">
                    Redeem your N-Points in exchange for any of our featured
                    rewards of your choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
