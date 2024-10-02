import React, { useEffect, useState } from 'react';
import StationModal from './stationModal';

const StationOwners = () => {
  const [stationRows, setStationRows] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  
  // Dummy data to simulate fetched data
  const dummyData = [
    {
      _id: '1',
      stationName: 'Station A',
      location: 'Monaragala',
      ownerName: 'Piyal Arundika',
      submittedDate: '2024-09-22',
    },
    {
      _id: '2',
      stationName: 'Station B',
      location: 'Pelmadulla',
      ownerName: 'Nihal Srimal',
      submittedDate: '2024-09-20',
    },
    {
      _id: '3',
      stationName: 'Station C',
      location: 'Gampaha City',
      ownerName: 'Wasantha Mithrapala',
      submittedDate: '2024-09-18',
    },
  ];

  useEffect(() => {
    // Simulate setting fetched data
    setStationRows(dummyData);
  }, []);

  // Fetch data using fetch API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5173/fuelStations/getPending');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setStationRows(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Handle View 
  const handleView = (stationId)=>{
    const station = stationRows.find(row => row._id === stationId);
    setSelectedStation(station);
  }

  // Handle accept station
  const handleAccept = async (stationId) => {
    try {
      const response = await fetch(`http://localhost:5173/fuelStations/accept/${stationId}`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchData();
    } catch (error) {
      console.error('Error accepting station: ', error);
    }
  };

  // Handle reject station
  const handleReject = async (stationId) => {
    try {
      const response = await fetch(`http://localhost:5173/fuelStations/reject/${stationId}`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchData();
    } catch (error) {
      console.error('Error rejecting station: ', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="card shadow-x1 bg-base-300 p-6">
        <h2 className="text-2xl font-semibold mb-4">Fuel Station Registrations</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Fuel Station Name</th>
                <th>Location</th>
                <th>Owner Name</th>
                <th>Submitted Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stationRows.map((row) => (
                <tr key={row._id}>
                  <td>{row.stationName}</td>
                  <td>{row.location}</td>
                  <td>{row.ownerName}</td>
                  <td>{new Date(row.submittedDate).toISOString().split('T')[0]}</td>
                  <td>
                    <button onClick={() => handleView(row._id)} className="btn btn-accent mr-2"> View </button>
                    <button onClick={() => handleAccept(row._id)} className="btn btn-primary mr-2">Accept</button>
                    <button onClick={() => handleReject(row._id)} className="btn btn-error">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

        {/* Modal for viewing station details */}
        {selectedStation && (
          <StationModal
            station={selectedStation}
            onClose={() => setSelectedStation(null)}  // Close modal on clicking close
          />
        )}        
    </div>
  );
};

export default StationOwners;