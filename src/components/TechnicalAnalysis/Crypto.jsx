import {
  CryptoCurrencyMarket,
  TechnicalAnalysis,
} from "react-ts-tradingview-widgets";

const Crypto = () => {
  return (
    <div>
      {" "}
      <div className="bg-white p-6 rounded-xl">
        <div className="w-[100%] flex flex-col">
          <div className="items-center">
            <TechnicalAnalysis width="100%" />
            <CryptoCurrencyMarket width="100%" height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
