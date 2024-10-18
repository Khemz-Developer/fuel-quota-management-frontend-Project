import { useState } from "react";
import "../components/StationRegisterform.css" // Import the CSS file for animations

const StationRegisterform = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    stationName: "",
    location: "",
  });
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <dialog
      id="my_modal_6"
      className={`modal modal-middle sm:modal-middle ${isOpen ? "fade-in" : "fade-out"}`}
      open={isOpen}
    >
      <div className="container relative max-w-md p-6 mx-auto mb-5 bg-white rounded-lg shadow-lg">
        <h4 className="mb-8 text-2xl font-bold text-center text-green">
          Fuel Station Registration
        </h4>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex-1 mr-4">
            <label className="block mb-2 text-sm font-medium text-green">
              Your Name (Fuel Station Owner)
            </label>
            <input
              type="text"
              name="ownerName"
              placeholder="Owner's Name"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
            />
          </div>

          <div className="flex-1 mr-4">
            <label className="block mb-2 text-sm font-medium text-green">
              Fuel Station Name
            </label>
            <input
              type="text"
              name="stationName"
              placeholder="Station Name"
              value={formData.stationName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
            />
          </div>

          <div className="flex-1 mr-4">
            <label className="block mb-2 text-sm font-medium text-green">
              Location of Fuel Station
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 font-semibold transition duration-300 border-2 rounded-full w-80 text-green border-green hover:text-white hover:bg-green"
            >
              Submit
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setTimeout(() => document.getElementById("my_modal_6").close(), 300); // Close after animation
            }}
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-1"
          >
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default StationRegisterform;
