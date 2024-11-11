import phone from "../../assets/img/phone.png";
import Android from "../../assets/img/Android.png";
import QR from "../../assets/img/QR.png";
import ios from "../../assets/img/ioss.png";
import Play from "../../assets/img/playStore.png";
import WindowsOs from "../../assets/img/windows8-96.png";
import MacOs from "../../assets/img/apple-logo-100.png";
import IOs from "../../assets/img/ios-logo-100.png";
import AndroidOs from "../../assets/img/android-logo-100.png";
import WebTrading from "../../assets/img/trading-80.png";
import Meta4 from "../../assets/img/meta.png";
import Meta5 from "../../assets/img/meta5.png";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import { Link } from "react-router-dom";

const Download = () => {
  const Downloads = [
    {
      Img: WindowsOs,
      OsName: "Windows",
    },
    {
      Img: MacOs,
      OsName: "Mac OS",
    },
    {
      Img: IOs,
      OsName: "IPhone/IPad",
    },
    {
      Img: AndroidOs,
      OsName: "Android",
    },
    {
      Img: WebTrading,
      OsName: "Web Trader",
    },
  ];

  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50]">
          <div className="z-[-50]">
            <div className="p-2 rounded-lg flex mx-auto bg-gradient-to-r from-orange-100 to-yellow-100">
              <div className="flex flex-col items-center">
                <h1 className="text-transform: uppercase font-bold mb-2 text-xl">
                  Novotrend app
                </h1>
                <p className="mb-4 text-xs">
                  Download the Novotrend App on App store and Google Play Store
                </p>
                <div className="my-3 text-gray-500">
                  <p>Get the App</p>
                </div>
                <div className="flex justify-center gap-4 items-center">
                  <button className="radius">
                    <img
                      src={Play}
                      alt="Google Play Store"
                      style={{
                        maxWidth: "80%",
                        height: "auto",
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </button>
                  <button className="radius">
                    <img
                      src={ios}
                      alt="App Store"
                      style={{
                        maxWidth: "80%",
                        height: "auto",
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </button>
                  <button className="radius">
                    <img
                      src={Android}
                      alt="App Store"
                      style={{
                        maxWidth: "80%",
                        height: "auto",
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </button>
                  <button className="radius">
                    <img
                      src={QR}
                      alt="QR"
                      style={{
                        maxWidth: "80%",
                        height: "auto",
                        display: "block",
                        margin: "auto",
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className="ml-[15rem] flex justify-center">
                <div>
                  <img
                    src={phone}
                    alt=""
                    className="w-[auto] h-[15rem] max-w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 mb-4 text-center">
              <img src={Meta5} alt="" className="max-w-full" />
            </div>
            <div className="flex flex-wrap justify-between gap-4 ">
              {Downloads.map((element, key) => (
                <div className="" key={key}>
                  <div className="py-4">
                    <Link
                      to=""
                      className="text-white text-decoration-none text-center d-flex flex-column gap-3"
                    >
                      <div className="bg-orange-400 rounded-lg shadow-lg p-4">
                        <img
                          src={element.Img}
                          alt="Icons"
                          className="w-full h-[4rem] max-w-full"
                        />
                      </div>
                      <p className="text-black py-4">{element.OsName}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
