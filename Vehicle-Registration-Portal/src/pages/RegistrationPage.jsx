import React, { useState } from "react";
import DatePicker from "react-datepicker";

function RegistrationPage() {
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
    // Handle form submission, like sending data to the backend API
    console.log(formData);
  };

  return (
    <div className="container p-6 mx-auto mt-10 mb-5 bg-white rounded-lg shadow-lg shadow-green-200">
      <h4 className="mb-8 text-2xl font-bold text-center text-green">
        Vehicle Registration
      </h4>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-row justify-between w-full">
          <div className="flex-1 mr-4">
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
          </div>

          <div className="flex-1 ml-4">
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
          </div>
        </div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex-1 mr-4">
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
          </div>

          <div className="flex-1 ml-4">
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
          </div>
        </div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex-1 mr-4">
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
          </div>

          <div className="flex-1 ml-4">
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
          </div>
        </div>

        <div>
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
        </div>

        <div>
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
        </div>

        <div>
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
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="isMortgaged"
            checked={formData.isMortgaged}
            onChange={handleChange}
            className="w-4 h-4 text-green-500 border-gray-300 rounded placeholder-custom focus:ring-green-500"
          />
          <label className="block ml-2 text-sm font-medium text-green">
            Is Mortgaged
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
