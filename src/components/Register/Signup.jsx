import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchCountryCodes, setSelectedCountry } from "../redux/countrySlice";
import { setUserInfo, setUserToken, setUserId } from "../redux/userSlice";
import LoginImg from "../../assets/img/Login_illustrator.svg";
import Logo from "../../assets/img/logo.png";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    dob: "",
    country: "",
    countryCode: "",
    countryId: "",
    mobileno: "",
    inputChecked: false,
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(fetchCountryCodes());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputFields((prevFields) => ({
      ...prevFields,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCountryChange = (e) => {
    const selectedCountryCode = e.target.value;
    const selectedCountry = countries.find(
      (country) => country.countryCode === selectedCountryCode
    );

    if (selectedCountry) {
      setInputFields((prevFields) => ({
        ...prevFields,
        country: selectedCountry.countryName,
        countryCode: selectedCountry.countryCode,
        countryId: selectedCountry.countryId,
      }));

      dispatch(setSelectedCountry(selectedCountry));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setErrorMessage("");

    if (inputFields.password !== inputFields.confirmpassword) {
      setErrorMessage("Password and Confirm Password did not match!!");
      setIsDisabled(false);
      return;
    }

    if (!inputFields.inputChecked) {
      setErrorMessage("Please approve Terms and Conditions!!");
      setIsDisabled(false);
      return;
    }

    const API_BASE_URL = "https://api.novotrend.co/api";
    try {
      const response = await axios.post(
        `${API_BASE_URL}/register.php`,
        inputFields
      );
      console.log(response);

      const { data } = response;
      const status = data.status || (data.data && data.data.status);
      const result = data.data?.result || "Registration Successful!";

      if (status === 200) {
        const { userid, token } = data.data;

        dispatch(setUserId(userid));
        dispatch(setUserToken(token));

        dispatch(
          setUserInfo({
            name: inputFields.name,
            email: inputFields.email,
            mobile: inputFields.mobileno,
            country: inputFields.country,
            countryId: inputFields.countryId,
            auth_type: data.data.auth_type,
          })
        );

        console.log(result); // Fixed the error, using console.log instead of console.success
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 1000);

        setInputFields({
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
          dob: "",
          country: "",
          countryCode: "",
          countryId: "",
          mobileno: "",
          inputChecked: false,
        });
      } else if (status === 409) {
        setErrorMessage(
          "This email is already registered. Please use a different email."
        );
      } else {
        setErrorMessage(result || "Unexpected error occurred");
      }
    } catch (e) {
      console.error("Server Error", e);
      setErrorMessage("Server Error, please try again later.");
    } finally {
      setIsDisabled(false);
    }
  };

  const RegisterArray = [
    {
      itemLabel: "Name",
      itemValue: inputFields.name,
      itemType: "text",
      itemPlaceholder: "Enter Full Name",
      itemName: "name",
    },
    {
      itemLabel: "Email Address",
      itemValue: inputFields.email,
      itemType: "email",
      itemPlaceholder: "Enter Email Address",
      itemName: "email",
    },
    {
      itemLabel: "Password",
      itemValue: inputFields.password,
      itemType: "password",
      itemPlaceholder: "Password",
      itemName: "password",
    },
    {
      itemLabel: "Confirm Password",
      itemValue: inputFields.confirmpassword,
      itemType: "password",
      itemPlaceholder: "Confirm Password",
      itemName: "confirmpassword",
    },
    {
      itemLabel: "Date of Birth",
      itemValue: inputFields.dob,
      itemType: "date",
      itemName: "dob",
    },
    {
      itemLabel: "Country",
      itemValue: inputFields.countryCode,
      itemType: "select",
      itemName: "country",
    },
    {
      itemLabel: "Contact Number",
      itemValue: inputFields.mobileno,
      itemType: "text",
      itemPlaceholder: "Enter Contact no.",
      itemName: "mobileno",
      maxlimit: 10,
    },
    {
      itemType: "checkbox",
      itemName: "inputChecked",
      itemChecked: inputFields.inputChecked,
    },
  ];

  return (
    <section
      id="register"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50"
    >
      <div className="w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="grid sm:grid-cols-2">
          <div className="hidden sm:flex justify-center items-center bg-orange-50 p-4">
            <img src={LoginImg} alt="Illustration" className="w-4/5 sm:w-3/4" />
          </div>
          <div className="flex flex-col justify-center p-4">
            <div className="text-center mb-3">
              <img src={Logo} alt="Logo" className="mx-auto mb-4 w-24" />
              <h2 className="text-xs font-bold text-gray-800">
                Create Account
              </h2>
            </div>
            {errorMessage && (
              <div className="text-red-500 text-center mb-4 font-medium text-xs">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleFormSubmit}>
              {/* Name & Email */}
              <div className="space-y-3">
                {RegisterArray.slice(0, 2).map((element, key) => (
                  <div className="flex flex-col" key={key}>
                    <label className="text-xs font-medium text-gray-600">
                      {element.itemLabel}
                    </label>
                    <input
                      type={element.itemType}
                      className="border rounded-lg p-3 mt-1 bg-gray-50 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder={element.itemPlaceholder}
                      value={element.itemValue}
                      name={element.itemName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                ))}
              </div>

              {/* Password & Confirm Password */}
              <div className="space-y-3 mt-4">
                {RegisterArray.slice(2, 4).map((element, key) => (
                  <div className="flex flex-col" key={key}>
                    <label className="text-xs font-medium text-gray-600">
                      {element.itemLabel}
                    </label>
                    <input
                      type={element.itemType}
                      className="border rounded-lg p-3 mt-1 bg-gray-50 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder={element.itemPlaceholder}
                      value={element.itemValue}
                      name={element.itemName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                ))}
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col mt-3">
                <label className="text-xs font-medium text-gray-600">
                  {RegisterArray[4].itemLabel}
                </label>
                <input
                  type={RegisterArray[4].itemType}
                  className="border rounded-lg p-3 mt-1 bg-gray-50 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={inputFields.dob}
                  name="dob"
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Country & Mobile Number */}
              <div className="space-y-3 mt-4">
                {RegisterArray.slice(5, RegisterArray.length - 1).map(
                  (element, key) => (
                    <div className="flex flex-col" key={key}>
                      <label className="text-xs font-medium text-gray-600">
                        {element.itemLabel}
                      </label>
                      {element.itemType === "select" ? (
                        <select
                          className="border rounded-lg p-3 mt-1 bg-gray-50 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={inputFields.countryCode}
                          name="countryCode"
                          onChange={handleCountryChange}
                          required
                        >
                          <option value="">-Select Country-</option>
                          {countries.map((option, index) => (
                            <option key={index} value={option.countryCode}>
                              {`${option.countryName} +${option.countryCode}`}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={element.itemType}
                          className="border rounded-lg p-3 mt-1 bg-gray-50 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder={element.itemPlaceholder}
                          name={element.itemName}
                          value={element.itemValue}
                          onChange={handleInputChange}
                          maxLength={element.maxlimit}
                          required
                        />
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Terms & Conditions Checkbox */}
              <div className="flex items-center mt-6">
                <input
                  type="checkbox"
                  className="h-3 w-3 text-orange-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                  checked={inputFields.inputChecked}
                  name="inputChecked"
                  onChange={handleInputChange}
                />
                <span className="ml-3 text-xs text-gray-600">
                  I agree with the{" "}
                  <Link to="/terms" className="text-orange-500 hover:underline">
                    Terms and Conditions
                  </Link>
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 mt-8 rounded-lg hover:bg-orange-600 text-xs focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                disabled={isDisabled}
              >
                Register
              </button>

              <Link
                to="/login"
                className="block text-center text-orange-500 mt-4 hover:underline text-xs"
              >
                Already have an Account? Sign In
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
