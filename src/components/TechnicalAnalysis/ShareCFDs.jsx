import {
  MarketOverview,
  TechnicalAnalysis,
} from "react-ts-tradingview-widgets";

const ShareCFDs = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl">
        <div className="w-[100%] flex flex-col">
          <div className="items-center">
            <TechnicalAnalysis width="100%" />
            <MarketOverview height={400} width="100%" showFloatingTooltip />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareCFDs;
