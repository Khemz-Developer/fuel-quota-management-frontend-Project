import axios from 'axios';
import React, { useEffect, useState } from 'react';
const StationRegisterform = () => {
      const [formData, setFormData] = useState({
        name: "",
        address: "",
        ownerUsername: "",
      });
      const [isOpen, setIsOpen] = useState(false); // State to control modal visibility
      const [message, setMessage] = useState('');
      const [messageType, setMessageType] = useState('');
      const [owners, setOwners] = useState([]);

      // Fetch the list of owner usernames when the component mounts
      useEffect(() => {
        const fetchOwners = async () => {
          const token = localStorage.getItem('token'); // Retrieve token from local storage
          try {
            const response = await axios.get('http://localhost:8080/api/admin/station-owners/usernames', {
              headers: {
                'Authorization': `Bearer ${token}`, // Include the token in the headers
              }
            });
            setOwners(response.data); // Assume response contains an array of owner objects
          } catch (error) {
            console.error("Error fetching owners: ", error);
            setMessage('Error fetching owners.');
            setMessageType('error');
          }
        };
    
        fetchOwners();
      }, []);

    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const token = localStorage.getItem('token'); 
        try {
          const response = await axios.post('http://localhost:8080/api/admin/stations/register', formData, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`, 
              }
          });
    
          if (response.status === 200) {
              setMessage('Station registered successfully!');
              setMessageType('success');
               
          } else {
              setMessage('Failed to register station.');
              setMessageType('error');
          }
        } catch (error) {
          setMessage('Error occurred during registration.');
          setMessageType('error');
          console.error(error);
        }
      }
    
    
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
                  Fuel Station Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Fuel Station's Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
                />
              </div>
    
              <div className="flex-1 mr-4">
                <label className="block mb-2 text-sm font-medium text-green">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
                />
              </div>
    
              <div className="flex-1 mr-4">
                    <label className="block mb-2 text-sm font-medium text-green">
                    Fuel Station Owner Username
                    </label>
                    <select
                    name="ownerUsername"
                    value={formData.ownerUsername}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
                    >
                    <option value="" disabled>Select Owner Username</option>
                    {owners.map((owner) => (
                        <option key={owner.id} value={owner}>
                        {owner}
                        </option>
                    ))}
                    </select>
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
    
            {/* Conditionally render success or error message */}
            {message && (
              <div className={`alert mt-6 ${messageType === 'success' ? 'alert-success' : 'alert-error'}`}>
                <span>{message}</span>
              </div>
            )}
          </div>
        </dialog>
      );
}

export default StationRegisterform
