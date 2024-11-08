import { useState } from "react";
import { FaPhone, FaEnvelope, FaComments } from "react-icons/fa";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";

const Contact = () => {
  const [selectedForm, setSelectedForm] = useState("");

  const handleFormChange = (event) => {
    setSelectedForm(event.target.value);
  };

  return (
    <div className="flex">
      <Side />
      <div className=" w-[70%] lg:w-[70%] xl:w-[70%] mx-auto relative z-10 m-2 rounded mt-4">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded mt-20 p-4">
          <h1 className="text-xl">CONTACT US</h1>

          <div className="p-4">
            <p className="text-xs mb-4 text-gray-600">
              If you have questions or would like more information, please get
              in touch with us through one of the contact details below. We will
              endeavor to respond to all queries within 24 hours.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <div className=" flex justify-between">
              <p className="text-xs">
                <FaPhone className="inline mr-1" /> +1(345)7691640
              </p>
              <p className="text-xs">
                <FaEnvelope className="inline mr-1" />

                <a
                  href="mailto:support@vantagemarkets.com"
                  className="text-blue-500 underline"
                >
                  support@vantagemarkets.com
                </a>
              </p>
              <p className="text-xs">
                <FaComments className="inline mr-1" /> Live Chat
              </p>

              <select
                id="support-forms"
                value={selectedForm}
                className="text-xs border border-gray-300 rounded-md "
                onChange={handleFormChange}
              >
                <option disabled value="">
                  Help & Support Forms
                </option>
                <option value="partnership">Partnership Transfer Form</option>
                <option value="trade">Vantage Trade Investigation Form</option>
                <option value="opt-out">
                  Opt Out of Vantage Promotions Form
                </option>
                <option value="closure">Account Closure Request Form</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
