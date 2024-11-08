import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StockData = () => {
  const [widgetHeight, setWidgetHeight] = useState("500px");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      symbolsGroups: [
        {
          name: "Forex",
          originalName: "Forex",
          symbols: [
            { name: "FX:EURUSD", displayName: "EUR to USD" },
            { name: "FX:GBPUSD", displayName: "GBP to USD" },
            { name: "FX:USDJPY", displayName: "USD to JPY" },
            { name: "FX:USDCHF", displayName: "USD to CHF" },
            { name: "FX:AUDUSD", displayName: "AUD to USD" },
            { name: "FX:USDCAD", displayName: "USD to CAD" },
            { name: "FOREXCOM:NZDUSD", displayName: "NZD to USD" },
            { name: "FX:CHFJPY", displayName: "CHF to JPY" },
            { name: "OANDA:EURCAD", displayName: "EUR to CAD" },
          ],
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
      backgroundColor: "#ffffff",
      gridLineColor: "#ffffff",
      showBorder: false,
    });

    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    if (container) {
      container.replaceWith(script);
    }

    // Update widget size based on window size
    const updateWidgetSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setWidgetHeight("300px");
      } else if (width < 1024) {
        setWidgetHeight("400px");
      } else {
        setWidgetHeight("500px");
      }
    };

    // Call the function initially and on resize
    updateWidgetSize();
    window.addEventListener("resize", updateWidgetSize);

    // Add this new code to hide scrollbar
    const style = document.createElement("style");
    style.textContent = `
      .tradingview-widget-container__widget::-webkit-scrollbar {
        display: none;
      }
      .tradingview-widget-container__widget {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("resize", updateWidgetSize);
    };
  }, []);

  return (
    <div
      id="tradingview-widget-container"
      className="w-full h-[41vh] overflow-hidden relative bg-white"
    >
      <div className="tradingview-widget-container__widget" />
      <div className="absolute text-xs text-gray-500">
        <Link
          to="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          className="hover:text-blue-600 transition-colors duration-200"
        />
      </div>
    </div>
  );
};

export default StockData;
