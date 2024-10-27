import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import axios from "axios";

function RegistrationPage() {
  const navigate = useNavigate();
  const { isLoggedIn, token } = useAuth();

  // Check for token and username
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/signup");
    } else {
      navigate("/registration");
    }
  }, [isLoggedIn, navigate]);

  // Form state
  const [formData, setFormData] = useState({
    engineCapacity: "",
    registrationNumber: "",
    engineNumber: "",
    vehicleClass: "",
    model: "",
    manufacturedYear: "", // Updated key to match backend
    manufacturer: "",
    fuelType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Define the authorization token

    try {
      const response = await axios.post(
        "http://localhost:8081/api/vehicles/register",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Vehicle registered successfully:", response.data);
      // Navigate to a success page or display success message
      navigate("/"); // update to your desired route
    } catch (error) {
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      } else {
        console.error("Error registering vehicle:", error.message);
      }
    }
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
            className="w-full px-4 md:w-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Engine Capacity
            </label>
            <input
              type="number"
              name="engineCapacity"
              placeholder="Engine Capacity"
              value={formData.engineCapacity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green"
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
              type="number"
              name="manufacturedYear"
              placeholder="2020"
              value={formData.manufacturedYear}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-green-500 rounded-lg shadow-sm text-placeholder placeholder-custom focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </motion.div>
        </div>

        {/* Make and Ownership Name */}
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full px-4 mb-4 md:w-1/2 md:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block mb-2 text-sm font-medium text-green">
              Manufacturer
            </label>
            <input
              type="text"
              name="manufacturer"
              placeholder="Vehicle Make"
              value={formData.manufacturer}
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
              Fuel Type
            </label>
            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" disabled>
                Select Fuel Type
              </option>
              <option value="DIESEL">DIESEL</option>
              <option value="PETROL_92_OCTANE">PETROL 92 OCTANE</option>
              <option value="PETROL_95_OCTANE">PETROL 95 OCTANE</option>
              <option value="SUPER_DIESEL">SUPER DIESEL</option>
            </select>
          </motion.div>
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
