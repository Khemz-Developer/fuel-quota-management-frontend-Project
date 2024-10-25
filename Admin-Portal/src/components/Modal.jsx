import React from 'react';

const Modal = ({ station, isOpen, onClose, onSave, handleInputChange }) => {
    if (!isOpen) return null; // Do not render if modal is not open
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-2xl font-semibold mb-4">Edit Fuel Quotas</h2>
          
          <label className="block mb-2">
            Diesel Quota:
            <input
              type="number"
              value={station.dieselQuota}
              onChange={(e) => handleInputChange(e, 'dieselQuota')}
              className="input input-bordered w-full"
            />
          </label>
  
          <label className="block mb-2">
            Super Diesel Quota:
            <input
              type="number"
              value={station.superDieselQuota}
              onChange={(e) => handleInputChange(e, 'superDieselQuota')}
              className="input input-bordered w-full"
            />
          </label>
  
          <label className="block mb-2">
            Petrol 92 Quota:
            <input
              type="number"
              value={station.petrol92Quota}
              onChange={(e) => handleInputChange(e, 'petrol92Quota')}
              className="input input-bordered w-full"
            />
          </label>
  
          <label className="block mb-2">
            Petrol 95 Quota:
            <input
              type="number"
              value={station.petrol95Quota}
              onChange={(e) => handleInputChange(e, 'petrol95Quota')}
              className="input input-bordered w-full"
            />
          </label>
  
          <div className="mt-4 flex justify-end">
            <button className="btn btn-secondary mr-2" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={onSave}>
              Update
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default Modal;

