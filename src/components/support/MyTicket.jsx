import { useState, useEffect } from "react";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";
import Navbar from "../sidebar/Navbar";
import axios from "axios";

const API_BASE_URL = "https://api.novotrend.co/api";
const TICKET_CREATE = `${API_BASE_URL}/support_ticket.php`;
const GET_TICKET = `${API_BASE_URL}/get_support_ticket.php`;

const MyTicket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState("all");

  const token = localStorage.getItem("userToken");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOverlayClick = (e) => {
    // Close modal if the overlay is clicked

    if (e.target.classList.contains("overlay")) {
      setIsModalOpen(false);
    }
  };

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked me");
    if (!token) {
      console.error("You are not authenticated. Please log in.");
      return;
    }

    let imageBase64 = "";
    if (image) {
      if (image.size > 5 * 1024 * 1024) {
        // 5MB limit
        console.error("Image size should be less than 5MB.");
        return;
      }
      try {
        imageBase64 = await handleImageUpload(image);
      } catch (error) {
        console.error("Error converting image to Base64:", error);
        console.error("Failed to convert image.");
        return;
      }
    }

    const data = {
      image: imageBase64,
      category,
      question,
      token,
    };
    console.log(data);

    try {
      const response = await axios.post(TICKET_CREATE, data);

      if (response.data.data.status === 200) {
        console.log("Ticket submitted successfully!");
        setCategory("");
        setQuestion("");
        setImage(null);
        document.getElementById("file-upload").value = null;
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting ticket:", error);
      console.error("Failed to submit the ticket.");
    }
  };

  const handleFilterChange = async (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    await fetchFilteredTickets(selectedFilter);
  };

  const fetchFilteredTickets = async (filter) => {
    const filterType = String(filter);
    try {
      const response = await axios.post(GET_TICKET, {
        token,
        type: filterType,
      });
      console.log(response);
      if (
        response.data &&
        response.data.data &&
        response.data.data.status === 200
      ) {
        setTickets(response.data.data.response);
      } else {
        console.error(
          "Failed to load tickets: " +
            (response.data.data.message || "No message available")
        );
        setTickets([]);
      }
    } catch (error) {
      console.error("Failed to fetch tickets", error);
      setTickets([]);
    }
  };

  const fetchTickets = async (filterType = "all") => {
    try {
      const response = await axios.post(GET_TICKET, {
        token,
        type: filterType,
      });
      console.log(response);
      if (
        response.data &&
        response.data.data &&
        response.data.data.status === 200
      ) {
        setTickets(response.data.data.response);
      } else {
        console.error(
          "Failed to load tickets: " +
            (response.data.data.message || "No message available")
        );
        setTickets([]);
      }
    } catch (error) {
      console.error("Failed to fetch tickets", error);
      console.error("Failed to load tickets. Please try again later.");
      setTickets([]);
    }
  };

  useEffect(() => {
    fetchTickets("all");
  }, []);

  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="lg:w-[60%] md:w-[90%] sm:w-[90%] mx-auto relative z-10 m-2 rounded lg:mt-16 md:mt-4">
        <Head />
        <Navbar />
        <div className="mx-auto relative z-10 m-2 rounded-lg  z-[-50] max-w-full">
          <h1 className="text-xl mb-4 text-center">MY SUPPORT TICKETS</h1>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-x-2">
            <div className="relative w-full md:w-auto">
              <select
                className="border rounded pr-2 text-xs py-1 appearance-none bg-white bg-opacity-50 w-full px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleFilterChange}
                value={filter}
              >
                <option value="all">All</option>
                <option value="open">Open</option>
                <option value="solved">Solved</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <button
              className="bg-orange-600 text-white text-xs rounded px-2 py-1 mt-2 md:mt-0"
              onClick={toggleModal}
            >
              Create New Ticket
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="p-2 font-normal text-xs">No.</th>
                  <th className="p-2 font-normal text-xs">Ticket No.</th>
                  <th className="p-2 font-normal text-xs">Category</th>
                  <th className="p-2 font-normal text-xs">Description</th>
                  <th className="p-2 font-normal text-xs">Status</th>
                  <th className="p-2 font-normal text-xs">Last Updated</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array.isArray(tickets) && tickets.length > 0 ? (
                  tickets.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4 text-xs text-gray-500">
                        {item.Srno || "Invalid Date"}
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-500">
                        {item.s_code}
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-500">
                        {item.Category}
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-500">
                        {item.Question}
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-500">
                        {item.ticket_type}
                      </td>
                      <td className="px-4 py-4 text-xs text-gray-500">
                        {item.date}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-4 py-4 text-xs text-gray-500 text-center"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overlay"
              onClick={handleOverlayClick}
            >
              <div className="bg-white rounded p-4 w-[90%] md:w-[40rem] transform transition-transform duration-300 translate-y-0 animate-slide-down">
                <h2 className="text-lg font-bold mb-4 text-center">
                  Create a new ticket request
                </h2>
                <div className="mb-4">
                  <label className="block text-xs font-medium mb-1">
                    Subject
                  </label>
                  <select
                    className="border text-xs rounded w-full p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    defaultValue=""
                  >
                    {category === "" && (
                      <option value="" disabled>
                        Select Issue
                      </option>
                    )}
                    <option value="Registration Problem">
                      Registration Problem
                    </option>
                    <option value="Deposit Problem">Deposit Problem</option>
                    <option value="Withdrawal Not Received">
                      Withdrawal Not Received
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-medium mb-1">
                    Content
                  </label>
                  <textarea
                    className="border rounded w-full p-2 text-xs"
                    rows="4"
                    placeholder="Insert text here ..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-medium mb-1">
                    Attachments
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="file-upload"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFileName(file.name);
                        setImage(file);
                        handleImageUpload(file);
                      }
                    }}
                  />
                  <button
                    className="border rounded px-2 py-1 text-xs"
                    onClick={() =>
                      document.getElementById("file-upload").click()
                    }
                  >
                    Upload
                  </button>
                  {fileName && (
                    <p className="text-xs mt-2">Selected file: {fileName}</p>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-gray-100 border text-black text-xs rounded px-2 py-1 mr-2"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-orange-600 text-white text-xs rounded px-2 py-1"
                    onClick={handleSubmit}
                  >
                    Create New Ticket
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTicket;
