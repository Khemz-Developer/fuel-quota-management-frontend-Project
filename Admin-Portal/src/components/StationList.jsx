import React, { useEffect, useState } from 'react';
import Modal from './Modal';
const StationList = () => {
  const [stations, setStations] = useState([]); 
  const [selectedStation, setSelectedStation] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  // Dummy data
  const dummyStations = [
    {
        _id: '1',
        stationName: 'Fuel Station A',
        stationAddress: '123 Main St, Cityville',
        ownerName: 'John Doe',
        ownerEmail: 'john.doe@example.com',
        dieselQuota: 1000,
        superDieselQuota: 800,
        petrol92Quota: 1200,
        petrol95Quota: 1000,
    },
    {
      _id: '2',
      stationName: 'Fuel Station B',
      stationAddress: '123 Church',
      ownerName: 'John Doe',
      ownerEmail: 'john.doe@example.com',
      dieselQuota: 1000,
      superDieselQuota: 800,
      petrol92Quota: 1200,
      petrol95Quota: 1000,
    },
    {
      _id: '3',
      stationName: 'Fuel Station C',
      stationAddress: '43 Church',
      ownerName: 'John Doe',
      ownerEmail: 'john.doe@example.com',
      dieselQuota: 1000,
      superDieselQuota: 800,
      petrol92Quota: 2200,
      petrol95Quota: 1000,
    },
    // Add other dummy stations as shown above
  ];
  // const fetchData = async () => {
  //     try {
  //         const token = localStorage.getItem('token');
  //         const response = await fetch('http://localhost:8080/api/admin/stations', {
  //             method: 'GET',
  //             headers: {
  //                 'Content-Type': 'application/json', 
  //                 'Authorization': `Bearer ${token}`,
  //             },
  //         }); 
  //         if (!response.ok) {
  //             throw new Error('Network response was not ok');
  //         }
  //         const data = await response.json();
  //         setStations(data);
  //     } catch (error) {
  //         console.error('Error fetching data: ', error);
  //     }
  // };
  const fetchData = async () => {
    // Simulate fetching data
    setStations(dummyStations);
  };

  useEffect(() => {
      fetchData();
  },[]);

  const handleEditClick = (station) => {
      setSelectedStation(station);
      setModalOpen(true);
  };

  const handleModalClose = () => {
    // Clear the selectedVacancy and close the modal
    setSelectedStation(null);
    setModalOpen(false);
  };


  const handleSave = async (updatedStation) => {
    // Update the stationList with the edited station data
    setStations((prevList) =>
      prevList.map((station) =>
        station.id === updatedStation.id ? updatedStation : station
      )
  );
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
              onClose={handleModalClose}
              onSave={handleSave}
          />
      </div>
  );
}

export default StationList
