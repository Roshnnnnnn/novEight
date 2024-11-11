import { useState } from "react";
import Head from "../sidebar/Head";
import Side from "../sidebar/Side";

const MyTicket = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOverlayClick = (e) => {
    // Close modal if the overlay is clicked
    if (e.target.classList.contains("overlay")) {
      setIsModalOpen(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="flex bg-[#F6F8F8]">
      <Side />
      <div className="w-[60%] mx-auto relative z-10 m-2 rounded mt-16">
        <Head />
        <div className="mx-auto relative z-10 m-2 rounded-lg mt-16 z-[-50] max-w-full">
          <h1 className="text-xl mb-4 text-center">MY SUPPORT TICKETS</h1>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-x-2">
            <div className="relative w-full md:w-auto">
              <select className="border rounded pr-2 text-xs py-1 appearance-none bg-white bg-opacity-50 w-full px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="all">All</option>
                <option value="new">New</option>
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
                  <th className="p-2 font-normal text-xs">Description</th>
                  <th className="p-2 font-normal text-xs">Status</th>
                  <th className="p-2 font-normal text-xs">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-xs" colSpan="5">
                    No Data
                  </td>
                </tr>
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
                  <input
                    type="text"
                    className="border text-xs rounded w-full p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-medium mb-1">
                    Content
                  </label>
                  <textarea
                    className="border rounded w-full p-2 text-xs"
                    rows="4"
                    placeholder="Insert text here ..."
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
                    onChange={(e) => handleFileChange(e)}
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
                  <button className="bg-orange-600 text-white text-xs rounded px-2 py-1">
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
