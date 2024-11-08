import marketBuzz from "../../assets/img/MarketBuzz.png";
import techInsights from "../../assets/img/TechnicalInsights.png";
import featuredIdeas from "../../assets/img/FeaturedIdeas.png";
import video from "../../assets/img/video.png";
import economic from "../../assets/img/economic.png";
import trading from "../../assets/img/tradingIndicators.png";
import analystView from "../../assets/img/analystView.png";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";

const ProTraderTool = () => {
  const ToolsCard = [
    {
      ToolCardTitle: "Market Buzz",
      ToolCardDesc:
        "Get the latest news coverage, media content, and price events across all tradable assets. Use the buzz meter to show the volume of social media chatter and news about your favourite tradable assets.",
      toolCard_icon: marketBuzz,
    },
    {
      ToolCardTitle: "Technical Insights",
      ToolCardDesc:
        "Get all the latest insights on all trading products charts with proper pattern and events indicators. Use our screener tool to grasp product details and technical events before making trade decisions.",
      toolCard_icon: techInsights,
    },
    {
      ToolCardTitle: "Featured Ideas",
      ToolCardDesc:
        "Gain access to a wide range of trade concepts encompassing both technical and fundamental analysis derived from proven, tried-and-tested strategies for your favourite assets and technical setups. Easily filter trade concepts based on your preferred Forex pairs and technical analysis style, and monitor real-time trade setups as they unfold.",
      toolCard_icon: featuredIdeas,
    },
    {
      ToolCardTitle: "Economic Calendar",
      ToolCardDesc:
        "Stay ahead with real-time economic insights from over 30 countries worldwide. Our time zone-sensitive calendar ensures news times align with your location, while customisable feeds allow you to focus on essential news filtered by country and impact.",
      toolCard_icon: economic,
    },
    {
      ToolCardTitle: "Analyst Views",
      ToolCardDesc:
        "Experience the power of straightforward and effective trading plans that merge quantitative technology and expert technical analysis, spanning 80,000 instruments. Capitalise on live trade opportunities with visible trend lines and significant levels.",
      toolCard_icon: analystView,
    },
    {
      ToolCardTitle: "Trading Indicators",
      ToolCardDesc:
        "Install the MT4 and MT5 indicators to get full access to the most updated version of Trading Central’s Analyst Views, Adaptive Candlesticks and Adaptive Divergence Convergence (ADC).",
      toolCard_icon: trading,
    },
    {
      ToolCardTitle: "Video Tutorials",
      ToolCardDesc: "",
      toolCard_icon: video,
    },
  ];

  return (
    <div className="flex">
      <Side />
      <div className=" w-[70%] lg:w-[70%] xl:w-[70%] mx-auto relative z-10 m-2 rounded mt-4">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded mt-20">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-bold">
                Unlock ProTrader Tools and video tutorials now by funding a
                minimum of $200
              </span>
              <button className="ml-2 border rounded p-1 text-xs bg-orange-500 hover:bg-orange-400 text-white">
                Deposit Now
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mt-4">
            {ToolsCard.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 text-xs rounded-lg p-4 shadow-md w-[23%] mb-4 h-[22rem] flex flex-col justify-between"
              >
                <h3 className="text-lg my-3">{tool.ToolCardTitle}</h3>
                <p
                  className="text-xs text-gray-400"
                  style={{ fontSize: "13px" }}
                >
                  {tool.ToolCardDesc}
                </p>
                <img
                  src={tool.toolCard_icon}
                  className="w-[8rem] ml-auto mt-auto"
                />
              </div>
            ))}
            {ToolsCard.length % 4 !== 0 && (
              <div className="w-[23%] mb-4 h-[22rem]"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProTraderTool;
