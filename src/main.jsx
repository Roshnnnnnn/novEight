import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/header/Home.jsx";
import Account from "./components/Accounts/Account.jsx";
import Deposits from "./components/funds/Deposits.jsx";
import WithdrawFunds from "./components/funds/WithdrawFunds.jsx";
import TransferFunds from "./components/funds/TransferFunds.jsx";
import MT5 from "./components/funds/MT5.jsx";
import Wallet from "./components/funds/Wallet.jsx";
import Download from "./components/download/Download.jsx";
import DepositReport from "./components/reports/DepostReport.jsx";
import WithdrawalReports from "./components/reports/WithdrawalReport.jsx";
import IBWithdrawal from "./components/reports/IBWithrawal.jsx";
import WalletHistory from "./components/reports/WalletHistory.jsx";
import DealReport from "./components/reports/DealReport.jsx";
import ProTraderTool from "./components/Tools/ProTraderTool.jsx";
import TechnicalAnalysis from "./components/Tools/TechnicalAnalysis.jsx";
import NationalVolumeCalculator from "./components/Tools/NationalVolumeCalculator.jsx";
import VipTradingRoom from "./components/VIP/VipTradingRoom.jsx";
import ProfilePage from "./components/Profile/ProfilePage.jsx";
import MyTicket from "./components/support/MyTicket.jsx";
import Contact from "./components/support/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/accountManagement" element={<Account />} />
      <Route path="/depositFunds" element={<Deposits />} />
      <Route path="/withdrawFunds" element={<WithdrawFunds />} />
      <Route path="/transferFunds" element={<TransferFunds />} />
      <Route path="/mt5ToWallet" element={<MT5 />} />
      <Route path="/walletToMT5" element={<Wallet />} />
      <Route path="/download" element={<Download />} />
      <Route path="/deposit-report" element={<DepositReport />} />
      <Route path="/withdrawals-report" element={<WithdrawalReports />} />
      <Route path="/ib_withdrawals-report" element={<IBWithdrawal />} />
      <Route path="/wallet_history-report" element={<WalletHistory />} />
      <Route path="/deal-report" element={<DealReport />} />
      <Route path="/tradingTool" element={<ProTraderTool />} />
      <Route path="/technicalAnalysis" element={<TechnicalAnalysis />} />
      <Route path="/tradingCalculator" element={<NationalVolumeCalculator />} />
      <Route path="/vip-trading-room" element={<VipTradingRoom />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/ticket" element={<MyTicket />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
