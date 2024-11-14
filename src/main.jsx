import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
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
import Overview from "./components/Rewards/Overview.jsx";
import WheelSpin from "./components/Rewards/WheelSpin.jsx";
import LuckyDraw from "./components/Rewards/LuckyDraw.jsx";
import CashRedemption from "./components/Rewards/CashRedemption.jsx";
import Voucher from "./components/Rewards/VouchersRedemption.jsx";
import VisaPaymentDeposit from "./components/deposit/VisaPaymentDeposit.jsx";
import CryptoCurrency from "./components/deposit/crypto/CryptoCurrency.jsx";
import AppleGooglePay from "./components/deposit/AppleGooglePay.jsx";
import BrokerToBrokerTransfer from "./components/deposit/BrokerToBrokerTransfer.jsx";
import Volet from "./components/deposit/crypto/Volet.jsx";
import BitWallet from "./components/deposit/crypto/BitWallet.jsx";
import Skrill from "./components/deposit/crypto/Skrill.jsx";
import Sticpay from "./components/deposit/crypto/Sticpay.jsx";
import Login from "./components/Register/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./components/redux/store/store.js";
import Signup from "./components/Register/Signup.jsx";
import Bank from "./components/deposit/Bank.jsx";
import Cash from "./components/deposit/Cash.jsx";
import Crypto from "./components/Withdraw/Crypto.jsx";
import Banking from "./components/Withdraw/Bank.jsx";
import Casher from "./components/Withdraw/Cash.jsx";
import PrivateRoutes from "./components/Private/PrivateRoutes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <BrowserRouter>
    //   <Routes>
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/accountManagement" element={<Account />} />
        <Route path="/depositFunds" element={<Deposits />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="/withdrawFunds" element={<WithdrawFunds />} />
        <Route path="/withdrawFunds/crypto" element={<Crypto />} />
        <Route path="/withdrawFunds/bank" element={<Banking />} />
        <Route path="/withdrawFunds/cash" element={<Cash />} />
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
        <Route
          path="/tradingCalculator"
          element={<NationalVolumeCalculator />}
        />
        <Route path="/vip-trading-room" element={<VipTradingRoom />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/ticket" element={<MyTicket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/wheelSpin" element={<WheelSpin />} />
        <Route path="/luckyDraw" element={<LuckyDraw />} />
        <Route path="/cashRedemption" element={<CashRedemption />} />
        <Route path="/vouchersRedemption" element={<Voucher />} />
        <Route path="/visaPaymentDeposit" element={<VisaPaymentDeposit />} />
        <Route path="/cps/Cryptocurrency" element={<CryptoCurrency />} />
        <Route path="/appleGooglePay" element={<AppleGooglePay />} />
        <Route path="/cps/Volet" element={<Volet />} />
        <Route
          path="/brokerToBrokerTransfer"
          element={<BrokerToBrokerTransfer />}
        />
        <Route path="/cps/Bitwallet" element={<BitWallet />} />
        <Route path="/cps/Skrill" element={<Skrill />} />
        <Route path="/cps/Sticpay" element={<Sticpay />} />
      </Route>
    </Route>
    //   </Routes>
    // </BrowserRouter>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
