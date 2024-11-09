import { TechnicalAnalysis, TickerTape } from "react-ts-tradingview-widgets";

const Forex = () => {
  return (
    <div>
      {" "}
      <div className="bg-white p-6 rounded-xl">
        <div className="w-[100%] flex flex-col">
          <div className="items-center">
            <TechnicalAnalysis width="100%" />
            <TickerTape colorTheme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forex;
