// import { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { CookiesProvider, useCookies } from "react-cookie";
// import { useDispatch } from "react-redux";
// import { loginRequest, loginSuccess, loginFailure } from "../redux/loginSlice";
// import axios from "axios";

// const API_BASE_URL = "https://api.novotrend.co/api";
// const API_LOGIN = `${API_BASE_URL}/login.php`;
// const API_VERIFY = `${API_BASE_URL}/login_verify_otp.php`;

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [cookies, setCookies, removeCookie] = useCookies(["remember"]);
//   return (
//     <div>
//       <div className="flex min-h-screen bg-gray-50">
//         {/* Left Section - Hidden on Small Screens */}
//         <div className="hidden md:block w-[90%] md:w-2/3 bg-gradient-to-r from-teal-500 to-orange-400 flex justify-center items-center p-8 md:p-16">
//           <div className="text-center text-white">
//             {/* Logo Section */}
//             <div className="flex justify-center mb-6">
//               <div className="bg-white p-4 rounded-full shadow-lg transform transition duration-500 hover:scale-110">
//                 <img src="logo.png" alt="Logo" className="h-20" />
//               </div>
//             </div>
//             <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
//               Novotrend | Trading, Redefined.
//             </h1>
//             <p className="mt-4 text-lg md:text-xl">
//               Login to your Novotrend Client Portal for Seamless Trading
//               Experiences
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-[20%] md:w-1/3 bg-white p-10 md:p-[5rem] flex flex-col justify-center shadow-lg rounded-lg">
//           <div className="text-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-700">
//               Client Portal Login
//             </h2>
//           </div>
//           <form className="space-y-6">
//             {/* Email Input */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full p-1 pl-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-xs font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="w-full p-1 pl-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full p-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200"
//             >
//               Log in
//             </button>
//           </form>

//           {/* Forgot Password Link */}
//           <div className="mt-4 text-center">
//             <Link href="#" className="text-orange-500 text-xs hover:underline">
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Not a Client Link */}
//           <div className="mt-2 text-center">
//             <p className="text-xs text-gray-600">
//               Not A Client?{" "}
//               <Link href="#" className="text-orange-500 hover:underline">
//                 Open Live Account
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { loginRequest, loginSuccess, loginFailure } from "../redux/loginSlice";
import axios from "axios";

const API_BASE_URL = "https://api.novotrend.co/api";
const API_LOGIN = `${API_BASE_URL}/login.php`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies(["remember"]);
  const [inputFields, setInputFields] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputFields.email || !inputFields.password) {
      console.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      dispatch(loginRequest());
      setIsDisabled(true);
      const response = await axios.post(API_LOGIN, inputFields);
      console.log("API Response:", response); // Log the entire response
      const apiResponse = response.data.data;

      if (apiResponse && apiResponse.status === 200) {
        const { token = "default_token" } = apiResponse.response || {};

        // setCookies("auth_token", token, { path: "/" });
        dispatch(loginSuccess({ token }));

        console.log("Login successful, navigating to dashboard...");
        navigate("/", { replace: true });
      } else {
        setError("Invalid credentials. Please try again.");
        dispatch(loginFailure("Invalid credentials"));
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("An error occurred while logging in. Please try again.");
      dispatch(loginFailure("Login failed"));
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex min-h-screen bg-gray-50">
        {/* Left Section - Hidden on Small Screens */}
        <div className="hidden md:block w-[90%] md:w-2/3 bg-gradient-to-r from-teal-500 to-orange-400 flex justify-center items-center p-8 md:p-16">
          <div className="text-center text-white">
            {/* Logo Section */}
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-lg transform transition duration-500 hover:scale-110">
                <img src="logo.png" alt="Logo" className="h-20" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Novotrend | Trading, Redefined.
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Login to your Novotrend Client Portal for Seamless Trading
              Experiences
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[20%] md:w-1/3 bg-white p-10 md:p-[5rem] flex flex-col justify-center shadow-lg rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Client Portal Login
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-1 pl-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
                value={inputFields.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full p-1 pl-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
                value={inputFields.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full p-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-center text-red-500 text-sm">{error}</div>
          )}

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <Link to="#" className="text-orange-500 text-xs hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Not a Client Link */}
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-600">
              Not A Client?{" "}
              <Link to="/signup" className="text-orange-500 hover:underline">
                Open Live Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
