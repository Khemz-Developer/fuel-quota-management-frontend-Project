import React, { useEffect, useState } from 'react';

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);

  // Fetch vehicles from the backend API
  useEffect(() => {
    fetch('/api/admin/users') 
      .then(response => response.json())
      .then(data => {
        setVehicles(data); // Set those fetched vehicle data
      })
      .catch(error => {
        console.error('Error fetching vehicles:', error);
      });
  }, []);

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
              <tr key={vehicle.id}>
                <td>{vehicle.registrationNumber}</td>
                <td>{vehicle.ownerName}</td>
                <td>{vehicle.engineNumber}</td>
                <td>{vehicle.vehicleClass}</td>
                <td>{vehicle.make}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.yearOfManufacture}</td>
                <td>
                  {/* Update button */}
                  <button className="btn btn-primary mr-2">Update</button>

                  {/* Delete button */}
                  <button onClick={() => handleDelete(vehicle.id)} className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>  
    </div>
  );
};

export default VehicleManagement;