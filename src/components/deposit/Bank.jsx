import axios from "axios";
import Head from "../sidebar/Head";
import Navbar from "../sidebar/Navbar";
import Side from "../sidebar/Side";
import { useEffect, useState } from "react";

const API_BASE_URL = "https://api.novotrend.co/api";
const PAYMENT_API_URL = `${API_BASE_URL}/payment_info.php`;
const DEPOSIT_API_URL = `${API_BASE_URL}/deposit_funds_add_wallet_bal.php`;

const Bank = () => {
  const [bankName, setBankName] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [accountno, setAccountno] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [inputFields, setInputFields] = useState({
    amount: "",
    req_transaction_id: "",
    remark: "",
    deposit_type: "Online",
  });
  const [receipt, setReceipt] = useState(null);
  const token = localStorage.getItem("userToken");
  const [depositAmount, setDepositAmount] = useState("");
  const [selectedImageName, setSelectedImageName] = useState("");

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(PAYMENT_API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = response.data;

        setBankName(data.data.response.bank_name);
        setAccountHolder(data.data.response.account_holder_name);
        setAccountno(data.data.response.account_number);
        setIfsc(data.data.response.ifsc_code);
      } catch (error) {
        console.error("Failed to fetch bank and wallet information.", error);
      }
    };

    fetchInfo();
  }, [token]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        console.error("The file size must be less than 2MB.");
        return;
      }
      setReceipt(file);
      setSelectedImageName(file.name);
    } else {
      setInputFields((prevState) => ({
        ...prevState,
        [name]: name === "amount" ? value.replace(/\D/g, "") : value,
      }));
      if (name === "amount") {
        setDepositAmount(value);
      }
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission initiated.");

    // Check for empty fields and log them
    if (!inputFields.amount) {
      console.log("Amount field is empty. Type:", typeof inputFields.amount);
    }
    if (!inputFields.req_transaction_id) {
      console.log(
        "Transaction ID field is empty. Type:",
        typeof inputFields.req_transaction_id
      );
    }
    if (!inputFields.remark) {
      console.log("Remark field is empty. Type:", typeof inputFields.remark);
    }
    if (
      !inputFields.deposit_type ||
      typeof inputFields.deposit_type !== "string"
    ) {
      console.log(
        "Deposit type field is empty or not a string. Type:",
        typeof inputFields.deposit_type
      );
    }
    if (!receipt) {
      console.log("Receipt is not uploaded. Type:", typeof receipt);
    }

    // Validation: Check if all fields are filled
    if (
      !inputFields.amount ||
      !inputFields.req_transaction_id ||
      !inputFields.remark ||
      !inputFields.deposit_type ||
      !receipt
    ) {
      console.error("Please fill in all fields and upload a receipt.");
      alert("Please fill in all fields and upload a receipt.");
      return; // Prevent form submission
    }

    const formData = new FormData();
    formData.append("amount", inputFields.amount);
    formData.append("req_transaction_id", inputFields.req_transaction_id);
    formData.append("remark", inputFields.remark);
    formData.append("deposit_type", inputFields.deposit_type);
    if (receipt) {
      formData.append("receipt", receipt);
    }
    formData.append("token", token);

    // Log the contents of formData
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post(DEPOSIT_API_URL, formData);
      console.log("Response:", response);

      // Clear the form fields and receipt
      setInputFields({
        amount: "",
        req_transaction_id: "",
        remark: "",
        deposit_type: "Online",
      });
      setReceipt(null);

      // Optionally reset the form manually
      document.getElementById("ewalletfundreqform").reset();
    } catch (error) {
      console.error("Error submitting deposit:", error);
    }
  };
  return (
    <div className="flex bg-[#F6F8F8] ">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <Navbar />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50]">
          <div className="bg-white shadow-lg p-8 rounded-xl">
            <h1 className="text-xl font-bold mb-4">Bank 🏦</h1>
            <p className="mb-4 text-xs font-semibold">
              How to fund your account with Bank
            </p>
            <ol className="list-decimal list-inside mb-4 text-xs">
              <li>Enter the amount</li>
              <li>Enter the transaction id</li>
              <li>Attach the transaction proof</li>
            </ol>
            <p className="text-xs my-2">
              Please note that the transaction description that appears on your
              card statement will vary depending on the financial gateway used.
              If you have any concerns about the transaction's description,
              please contact support@Novotrend.com
            </p>
            <div className="py-4">
              <h1>Bank Form</h1>
              <img src="" alt="" />
            </div>
            <form className="grid grid-cols-2 gap-4">
              <div className="mb-4 text-xs">
                <label className="block mb-1" htmlFor="amount">
                  * Amount
                </label>
                <input
                  className="w-full p-2 border rounded"
                  placeholder="Enter Amount"
                  value={inputFields.amount}
                  onChange={handleChange}
                  maxLength={5}
                  required
                  type="text"
                  id="amount"
                  name="amount"
                />
              </div>
              <div className="mb-4 text-xs">
                <label className="block mb-1" htmlFor="amount">
                  * Transaction
                </label>
                <input
                  type="text"
                  id="req_transaction_id"
                  name="req_transaction_id"
                  placeholder="Enter Transaction ID"
                  value={inputFields.req_transaction_id}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4 text-xs">
                <label className="block mb-1" htmlFor="notes">
                  * Important notes
                </label>
                <input
                  id="remark"
                  name="remark"
                  rows="3"
                  className="w-full p-2 border rounded"
                  placeholder="Enter Any Notes"
                  value={inputFields.remark}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4 text-xs">
                <label className="block mb-1" htmlFor="receipt">
                  * Upload Proof
                </label>
                <input
                  type="file"
                  id="receipt"
                  name="receipt"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="receipt"
                  className="border rounded px-2 py-1 text-xs cursor-pointer"
                >
                  Upload
                </label>
                {selectedImageName && (
                  <span className="ml-2 text-xs">{selectedImageName}</span>
                )}
              </div>
            </form>
            <div className="border-t border-gray-300 my-4" />
            <div className="flex mb-4 text-xs ">
              <div className="flex-1"></div>
              <div className="flex-1 ml-6 justify-center">
                <h2 className="font-bold mb-2">Deposit Summary</h2>
                <div className="flex justify-between">
                  <p className="mb-1">Deposit Amount:</p>
                  <p className="mb-1">{depositAmount || "-"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="mb-1">Deposit Repost:</p>
                  <p> -</p>
                </div>
                <div className="flex justify-between">
                  <p className="mb-1">Net Deposit Amount: </p>
                  <p>{depositAmount || "-"}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-orange-500 text-white p-1 px-2 rounded"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
