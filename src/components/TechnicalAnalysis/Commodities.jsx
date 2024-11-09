import { SymbolInfo, TechnicalAnalysis } from "react-ts-tradingview-widgets";

const Commodities = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl">
        <div className="w-[100%] flex flex-col">
          <div className="items-center">
            <TechnicalAnalysis width="100%" />
            <SymbolInfo colorTheme="dark" autosize />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commodities;
