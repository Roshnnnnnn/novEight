import { MdKeyboardArrowRight } from "react-icons/md";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import { Link } from "react-router-dom";
import { IoInformationCircleSharp } from "react-icons/io5";
import Reward from "../../assets/img/redemptions.jpg";

const CashRedemption = () => {
  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-10 m-2 p-8 bg-white rounded-lg mt-16 z-[-50]">
          <div className="w-[100%] gap-x-6 flex ">
            <div
              className="h-[10rem] rounded-2xl w-[50rem] justify-center px-3 py-3 text-white bg-cover bg-center"
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
            <div className="mt-3 flex justify-center">
              <div className="bg-white rounded-lg shadow p-8 w-full">
                <div className="flex flex-col items-center">
                  <div className="w-full flex justify-center">
                    <h1 className="text-2xl">Cash Redemption</h1>
                  </div>

                  <p className="text-sm mt-2 text-center">
                    Redeem instant cash by using your N-Points.
                  </p>
                  <p className="text-sm font-semibold mt-2 text-center">
                    Every 200 N-Points is worth USD$1. Cash Redemption is
                    limited to USD$50 per day.
                  </p>
                  <button className="border p-1 px-8 rounded-lg mt-4">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashRedemption;
