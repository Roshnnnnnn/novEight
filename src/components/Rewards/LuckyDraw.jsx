import { MdKeyboardArrowRight } from "react-icons/md";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import { Link } from "react-router-dom";
import { IoInformationCircleSharp } from "react-icons/io5";
import Reward from "../../assets/img/luckyDraw.jpg";

const LuckyDraw = () => {
  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-10 m-2 p-8 bg-white rounded-lg mt-16 z-[-50]">
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
            <div className=" p-md-5 mt-3">
              <div className="bg-white rounded-lg shadow p-8">
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="w-full md:w-1/2">
                    <h1 className=" text-2xl">Lucky Draw</h1>
                    <p className="text-xs mt-2">
                      Earn entries and stand a chance to win a USD$20 cash
                      prize.
                    </p>
                    <p className="text-xs mt-2">
                      Each entry requires 1 raffle ticket, which can be obtained
                      with every 50 N-Points. There is no limit to the number of
                      raffle tickets you can redeem per week. The more tickets
                      you redeem, the higher your chances of winning!
                    </p>
                    <p className="text-sm font-semibold mt-2">
                      Result Announcement
                    </p>
                    <p className="text-xs mt-2">
                      The winning Ticket Numbers will be announced on this page
                      every Monday at 7:00 PM UTC (+2).
                    </p>
                    <p className="text-xs mt-2">
                      Winners of the weekly draw will also receive an email
                      notification with more details.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 bg-white m-2 p-4 rounded-lg shadow h-auto">
                    <div className="flex items-center flex-col sm:flex-row">
                      <h1>LOGO</h1>
                      <div className="ml-0 sm:ml-4">
                        <h5 className="mb-3 text-xs">Ongoing Draw Period</h5>
                        <p className="text-xs">
                          <span className="font-semibold">11/03/24</span>{" "}
                          00:00:00 -{" "}
                          <span className="font-semibold">17/03/24</span>{" "}
                          23:59:59 UTC (+2)
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs" style={{ fontSize: "10px" }}>
                      Last step, deposit now to Redeem Raffle Ticket
                    </p>
                    <button className="btn border flex justify-center rounded-lg text-xs mt-3 rounded-3 p-2 w-full">
                      Redeem Tickets
                    </button>
                    <Link className="text-decoration-none text-black text-xs flex justify-center mt-2">
                      View My Raffle Ticket{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="text-center mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyDraw;
