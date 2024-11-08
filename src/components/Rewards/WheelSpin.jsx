import { MdKeyboardArrowRight } from "react-icons/md";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import { Link } from "react-router-dom";
import { IoInformationCircleSharp } from "react-icons/io5";
import Reward from "../../assets/img/overview.jpg";

import { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "0" },
  { option: "1" },
  { option: "2" },
  { option: "3" },
  { option: "4" },
  { option: "5" },
  { option: "6" },
  { option: "7" },
  { option: "8" },
  { option: "9" },
  { option: "10" },
];

const WheelSpin = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  return (
    <div className="flex">
      <Side />
      <div className="w-[70%] lg:w-[70%] xl:w-[70%] mx-auto relative z-10 m-2 rounded mt-4">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded mt-20 p-4">
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
            <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex-1 order-2 lg:order-1">
                  <h1 className="mb-4 text-2xl font-bold">Wheel of Fortune</h1>
                  <p className="text-xs mt-4">
                    Feeling lucky? Try your luck and win various surprises to
                    turbocharge your trading!
                  </p>
                  <p className="text-xs mt-4">
                    You are entitled to 1 free entry daily. You may use 100
                    N-Points to play again, limited to 5 additional times per
                    day.
                  </p>
                  <p className="font-light text-xs mt-4">
                    Last step, deposit now to start spin and win.
                  </p>
                  <button
                    onClick={handleSpinClick}
                    className="bg-orange-500 text-white rounded-lg w-24 mt-8 py-1 transition duration-300 hover:bg-orange-400"
                  >
                    SPIN NOW
                  </button>
                </div>
                <div className="flex-1 order-1 lg:order-2 flex justify-center items-center">
                  <div style={{ maxWidth: "100%", overflow: "hidden" }}>
                    <Wheel
                      mustStartSpinning={mustSpin}
                      prizeNumber={prizeNumber}
                      spinDuration={0.3}
                      fontFamily={"Rubik"}
                      fontWeight={400}
                      radiusLineWidth={0.2}
                      outerBorderWidth={1.5}
                      data={data}
                      textColors={["#000"]}
                      backgroundColors={[
                        "#FF8000",
                        "#F4C430",
                        "gray",
                        "lightblue",
                        "lightgreen",
                        "yellow",
                        "cyan",
                        "magenta",
                        "lime",
                        "violet",
                        "lightpink",
                      ]}
                      onStopSpinning={() => {
                        setMustSpin(false);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelSpin;
