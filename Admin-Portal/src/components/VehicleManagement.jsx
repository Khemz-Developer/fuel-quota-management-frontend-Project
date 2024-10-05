import React, { useEffect, useState } from 'react';
import StationModal from './stationModal';
const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Dummy data to simulate fetched data
  const dummyData = [
    {
      _id: '1',
      registrationNumber: 'XC-1201',
      ownerName: 'Sanath Maheepala',
      vehicleClass: 'Sedan',
      make: 'Toyota',
      model: 'Corolla',
      yearOfManufacture: '2012',
    },
    {
      _id: '2',
      registrationNumber: 'VB-5198',
      ownerName: 'Sugath Thilakarathne',
      vehicleClass: 'SUV',
      make: 'Honda',
      model: 'CR-V',
      yearOfManufacture: '2015',
    },
    {
      _id: '3',
      registrationNumber: 'LN-9101',
      ownerName: 'Wasula Kuruppuarachchi',
      vehicleClass: 'Truck',
      make: 'Ford',
      model: 'F-150',
      yearOfManufacture: '2010',
    },
  ];

  // Fetch vehicles from the backend API
  useEffect(() => {
    setVehicles(dummyData);
  }, []);

  // Fetch Data
  const fetchData = async() => {
    try {
      const response = await fetch('/api/admin/users'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSelectedVehicle(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  //Handle View 
  const handleView = (id)=>{
    const vehicle = vehicles.find(row => row._id === id);
    setSelectedVehicle(vehicle);
  }

  // Handle deletion of vehicles
  const handleDelete = (id) => {
    fetch(`/api/admin/users/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Remove the deleted vehicle from the list
          setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
        } else {
          console.error('Error when deleting vehicle:', response);
        }
      })
      .catch(error => {
        console.error('Error when deleting vehicle:', error);
      });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="card shadow-x1 bg-base-300 p-6">
      <h2 className="text-2xl font-bold mb-6">Registered Vehicle Management</h2>

      {/* Vehicle table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Registration Number</th>
              <th>Owner Name</th>
              <th>Engine Number</th>
              <th>Vehicle Class</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year of Manufacture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map(vehicle => (
              <tr key={vehicle._id}>
                <td>{vehicle.registrationNumber}</td>
                <td>{vehicle.ownerName}</td>
                <td>{vehicle.engineNumber}</td>
                <td>{vehicle.vehicleClass}</td>
                <td>{vehicle.make}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.yearOfManufacture}</td>
                <td>
                  {/*View button */}
                  <button onClick={()=> handleView(vehicle._id)}className="btn btn-success mr-2"> View </button>

                  {/* Update button */}
                  <button className="btn btn-primary mr-2">Update</button>

                  {/* Delete button */}
                  <button onClick={() => handleDelete(vehicle._id)} className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div> 

      {/* Modal for viewing station details */}
        {selectedVehicle && (
          <StationModal
            data={selectedVehicle}
            type = "vehicle"
            onClose={() => setSelectedVehicle(null)}  // Close modal on clicking close
          />
      )}  
    </div>
  );
};

export default VehicleManagement;