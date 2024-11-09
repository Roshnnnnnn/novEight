import { MarketData, TechnicalAnalysis } from "react-ts-tradingview-widgets";

const Indices = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="w-[100%] flex flex-col">
        <div className="items-center">
          <TechnicalAnalysis width="100%" />
          <MarketData width="100%" height={400} />
        </div>
      </div>
    </div>
  );
};

export default Indices;
