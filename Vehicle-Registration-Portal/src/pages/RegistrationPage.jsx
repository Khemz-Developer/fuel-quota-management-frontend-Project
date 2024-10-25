import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";

function RegistrationPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  // Check for token and username
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/signup");
    }else{
      navigate("/registration");
    }
  }, [isLoggedIn, navigate]);

  const [formData, setFormData] = useState({
    registrationNumber: "",
    ownerName: "",
    engineNumber: "",
    vehicleClass: "",
    conditionsAndNotes: "",
    make: "",
    model: "",
    selectedDate: "",
    ownershipName: "",
    isMortgaged: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container p-6 mx-auto mt-10 mb-5 bg-white rounded-lg shadow-lg shadow-green-200">
      <motion.h4
        className="mb-8 text-2xl font-bold text-center text-green"
        initial={{ opacity: 0, scale: 0.5 }} // start state (invisible and scaled down)
        animate={{ opacity: 1, scale: 1 }} // end state (fully visible and normal scale)
        transition={{ duration: 0.5 }} // animation duration
      >
        Vehicle Registration
      </motion.h4>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First row: Owner Name and Registration Number */}
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full px-4 mb-4 md:w-1/2 md:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Owner Name
            </label>
            <input
              type="text"
              name="ownerName"
              placeholder="Owner's Name"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
            />
          </motion.div>

          <motion.div
            className="w-full px-4 md:w-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Registration Number
            </label>
            <input
              type="text"
              name="registrationNumber"
              placeholder="Registration Number"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green"
            />
          </motion.div>
        </div>

        {/* Second row: Engine Number and Vehicle Class */}
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full px-4 mb-4 md:w-1/2 md:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Engine Number
            </label>
            <input
              type="text"
              name="engineNumber"
              placeholder="Engine Number"
              value={formData.engineNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </motion.div>

          <motion.div
            className="w-full px-4 mb-4 md:w-1/2 md:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Vehicle Class
            </label>
            <input
              type="text"
              name="vehicleClass"
              placeholder="Vehicle Class"
              value={formData.vehicleClass}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </motion.div>
        </div>

        {/* Third row: Model and Year of Manufacture */}
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full px-4 mb-4 md:w-1/2 md:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Model
            </label>
            <input
              type="text"
              name="model"
              placeholder="Vehicle Model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </motion.div>

          <motion.div
            className="w-full px-4 md:w-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Year of Manufacture
            </label>
            <input
              type="date"
              name="yearOfManufacture"
              value={formData.yearOfManufacture}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-500 rounded-lg shadow-sm text-placeholder placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </motion.div>
        </div>

        {/* Conditions and Notes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block mb-2 text-sm font-medium text-green">
            Conditions and Notes
          </label>
          <textarea
            name="conditionsAndNotes"
            placeholder="Enter any conditions or notes"
            value={formData.conditionsAndNotes}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg shadow-sm placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </motion.div>

        {/* Make and Ownership Name */}
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full px-4 mb-4 md:w-1/2 md:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Make
            </label>
            <input
              type="text"
              name="make"
              placeholder="Vehicle Make"
              value={formData.make}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </motion.div>

          <motion.div
            className="w-full px-4 md:w-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Ownership Name
            </label>
            <input
              type="text"
              name="ownershipName"
              placeholder="Owner's Name"
              value={formData.ownershipName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </motion.div>
        </div>

        {/* Is Mortgaged */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isMortgaged"
            checked={formData.isMortgaged}
            onChange={handleChange}
            className="w-4 h-4 text-green-500 border-gray-300 rounded placeholder-custom focus:ring-green-500"
          />
          <label className="ml-2 text-sm text-gray-600">
            Is this vehicle mortgaged?
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-2 font-semibold transition duration-300 border-2 rounded-full w-80 text-green border-green hover:text-white hover:bg-green"
          >
            Register Vehicle
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
