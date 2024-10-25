import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
const StationList = () => {
    const [stations, setStations] = useState([]); 
    const [selectedStation, setSelectedStation] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const fetchData = async () => {
      try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:8080/api/admin/stations', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`,
              },
          }); 
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setStations(data); // Set the fetched data
      } catch (error) {
          console.error('Error fetching data: ', error);
      }
    };
  
    useEffect(() => {
        fetchData();
    }, []);
  
    // Open modal with station data for editing
    const handleEditClick = (station) => {
        setSelectedStation(station);
        setModalOpen(true);
    };
    
    // Handle input change inside the modal
    const handleInputChange = (e, field) => {
        const newValue = e.target.value;
        setSelectedStation((prevStation) => ({
        ...prevStation,
        [field]: newValue,
        }));
    };

    // Save the updated quotas
    const handleSave = async () => {
      try {
          // Perform the PUT request with axios
          const response = await axios.put(
              'http://localhost:8080/api/admin/stations/update-fuel-quota',
              {
                  stationId: selectedStation.id,
                  dieselQuota: selectedStation.dieselQuota,
                  superDieselQuota: selectedStation.superDieselQuota,
                  petrol92Quota: selectedStation.petrol92Quota,
                  petrol95Quota: selectedStation.petrol95Quota,
              },
              {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem('token')}`,
                  },
              }
          );
  
          // Check if the response is successful and handle it
          if (response.status === 200) {
              console.log('Fuel quotas updated successfully:', response.data); // Log success response data
              setModalOpen(false); // Close modal after saving
              // Update stations list
              setStations(prevStations => 
              prevStations.map(station =>
                  station.id === selectedStation.id
                      ? { ...station, ...selectedStation }  // Update quotas
                      : station
              )
          );
          } else {
              console.error('Unexpected response status:', response.status); // Handle unexpected statuses
              setError('Unexpected error. Please try again.');
          }
      } catch (error) {
          // Handle errors, including network issues
          console.error('Error updating fuel quotas:', error);
          
          if (error.response) {
              // Server responded with a status other than 200 range
              setError(error.response.data.message || 'Error updating fuel quotas. Please try again.');
          } else if (error.request) {
              // No response was received after the request was made
              setError('No response from server. Please check your connection.');
          } else {
              // Other error scenarios
              setError('An error occurred. Please try again.');
          }
      }
    };
    return (
    <div className="container mx-auto py-10 px-4 bg-gray-200 m-4 rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-8">Stations and their Fuel Quotas</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className='text-white text-center bg-green'>
            <tr>
              <th>Station Name</th>
              <th>Address</th>
              <th>Owner Name</th>
              <th>Owner Email</th>
              <th>Diesel Quota</th>
              <th>Super Diesel Quota</th>
              <th>Petrol 92 Quota</th>
              <th>Petrol 95 Quota</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {stations.map((station) => (
              <tr key={station._id} className='text-center transition-colors duration-200 hover:bg-gray-100'>
                <td>{station.stationName}</td>
                <td>{station.stationAddress}</td>
                <td>{station.ownerName}</td>
                <td>{station.ownerEmail}</td>
                <td>{station.dieselQuota}</td>
                <td>{station.superDieselQuota}</td>
                <td>{station.petrol92Quota}</td>
                <td>{station.petrol95Quota}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditClick(station)}
                  >
                    View & Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {/* Edit Modal Component */}
       <Modal
       station={selectedStation}
       isOpen={modalOpen}
       onClose={() => setModalOpen(false)}
       onSave={handleSave}
       handleInputChange={handleInputChange}
       />
    </div>
  );
}

export default StationList
