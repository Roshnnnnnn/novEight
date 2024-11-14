import { FaPhone, FaEnvelope, FaComments } from "react-icons/fa";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import Navbar from "../sidebar/Navbar";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="lg:w-[60%] md:w-[90%] sm:w-[80%] mx-auto relative z-10 m-2 rounded lg:mt-16 md:mt-4">
        <Head />
        <Navbar />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50]">
          <h1 className="text-xl pl-4">CONTACT US</h1>

          <div className="p-4">
            <p className="text-xs mb-4 text-gray-600">
              If you have questions or would like more information, please get
              in touch with us through one of the contact details below. We will
              endeavor to respond to all queries within 24 hours.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <p className="text-xs mb-2 md:mb-0">
              <FaPhone className="inline mr-1" /> +1(345)7691640
            </p>
            <p className="text-xs mb-2 md:mb-0">
              <FaEnvelope className="inline mr-1" />
              <a
                href="mailto:support@novotrend.co"
                className="text-blue-500 underline"
              >
                support@novotrend.co
              </a>
            </p>
            <p className="text-xs mb-2 md:mb-0">
              <Link to={"/ticket"}>
                <FaComments className="inline mr-1" /> Live Chat
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
