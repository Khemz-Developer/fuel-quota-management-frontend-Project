import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
const StationList = () => {
    const [stations, setStations] = useState([]); 
    const [selectedStation, setSelectedStation] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Dummy data for testing
    const dummyStations = [
    {
      id: 1,
      stationName: 'Station 1',
      stationAddress: '123 Main St',
      ownerName: 'John Doe',
      ownerEmail: 'john@example.com',
      dieselQuota: 5000,
      superDieselQuota: 3000,
      petrol92Quota: 10000,
      petrol95Quota: 4000,
    },
    {
      id: 2,
      stationName: 'Station 2',
      stationAddress: '456 Market St',
      ownerName: 'Jane Smith',
      ownerEmail: 'jane@example.com',
      dieselQuota: 6000,
      superDieselQuota: 4000,
      petrol92Quota: 8000,
      petrol95Quota: 3500,
    },
    {
      id: 3,
      stationName: 'Station 3',
      stationAddress: '789 Broadway',
      ownerName: 'Alice Johnson',
      ownerEmail: 'alice@example.com',
      dieselQuota: 7000,
      superDieselQuota: 5000,
      petrol92Quota: 9000,
      petrol95Quota: 4500,
    },];

    useEffect(()=>{
        setStations(dummyStations);   
    },[])

    // useEffect(() => {
    //     axios.get('/api/admin/stations', {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem('token')}`,
    //       },
    //     }).then(response => {
    //         const stationsData = Array.isArray(response.data) ? response.data : [];
    //         setStations(stationsData);
    //       })
    //       .catch(error => {
    //         setError(error);
    //       });
    // }, []);

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
    const handleSave = () => {
        axios
        .put(
            '/api/admin/stations/update-fuel-quota',
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
        )
        .then((response) => {
            setModalOpen(false); // Close modal after saving
        })
        .catch((error) => {
            setError('Error updating fuel quotas. Please try again.');
        });
    };

    return (
    <div className="container mx-auto py-10 px-4 bg-gray-100 m-4 rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-8">Stations and Fuel Quotas</h1>
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
            {stations.map((station,index) => (
              <tr key={index}>
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
