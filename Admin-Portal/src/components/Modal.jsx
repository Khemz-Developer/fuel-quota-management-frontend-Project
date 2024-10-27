import axios from 'axios';
import React, { useState } from 'react';
const Modal = ({ station, isOpen, onClose, onSave}) => {
    if (!isOpen) return null; // Do not render if modal is not open
    const [editedData,setEditedData] = useState({...station});
    
    const handleInputChange = (e, field) => {
        const newValue = e.target.value;
        setEditedData((prevData) => ({
            ...prevData,
            [field]: newValue,
        }));
    };

    const handleSave = async () => {
      try {
          const token = localStorage.getItem('token'); // Get the token from local storage
  
          const response = await axios.put(
              'http://localhost:8080/api/admin/stations/update-fuel-quota',
              editedData, // Send the edited data as the request body
              {
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`, // Include the token in the headers
                  },
              }
          );
  
          
  
          onSave(editedData); // Notify the parent component with the updated data
      } catch (error) {
          console.error('Error saving data:', error);
      } finally {
          onClose(); // Close the modal
      }
    };

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-2xl font-semibold mb-4">Edit Fuel Quotas</h2>
          
          <label className="block mb-2">
            Diesel Quota:
            <input
              type="number"
              value={editedData.dieselQuota}
              onChange={(e) => handleInputChange(e, 'dieselQuota')}
              className="input input-bordered w-full"
            />
          </label>
  
          <label className="block mb-2">
            Super Diesel Quota:
            <input
              type="number"
              value={editedData.superDieselQuota}
              onChange={(e) => handleInputChange(e, 'superDieselQuota')}
              className="input input-bordered w-full"
            />
          </label>
  
          <label className="block mb-2">
            Petrol 92 Quota:
            <input
              type="number"
              value={editedData.petrol92Quota}
              onChange={(e) => handleInputChange(e, 'petrol92Quota')}
              className="input input-bordered w-full"
            />
          </label>
  
          <label className="block mb-2">
            Petrol 95 Quota:
            <input
              type="number"
              value={editedData.petrol95Quota}
              onChange={(e) => handleInputChange(e, 'petrol95Quota')}
              className="input input-bordered w-full"
            />
          </label>
  
          <div className="mt-4 flex justify-end">
            <button className="btn btn-secondary mr-2" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Update
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default Modal;

