import React, { useEffect, useState } from 'react';
import StationModal from './stationModal';
const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // //dummy data to match VehicleDTO structure
  // const dummyData = [
  //   {
  //     _id: '1',
  //     registrationNumber: 'XC-1201',
  //     engineNumber: 'EN123456',
  //     manufacturer: 'Toyota',
  //     model: 'Corolla',
  //     engineCapacity: 1800,
  //     fuelType: 'Petrol',
  //     manufacturedYear: 2012,
  //     vehicleClass: 'Sedan',
  //     ownerName: 'Sanath Maheepala',
  //   },
  //   {
  //     _id: '2',
  //     registrationNumber: 'VB-5198',
  //     engineNumber: 'EN654321',
  //     manufacturer: 'Honda',
  //     model: 'CR-V',
  //     engineCapacity: 2000,
  //     fuelType: 'Diesel',
  //     manufacturedYear: 2015,
  //     vehicleClass: 'SUV',
  //     ownerName: 'Sugath Thilakarathne',
  //   },
  //   {
  //     _id: '3',
  //     registrationNumber: 'LN-9101',
  //     engineNumber: 'EN789012',
  //     manufacturer: 'Ford',
  //     model: 'F-150',
  //     engineCapacity: 3000,
  //     fuelType: 'Petrol',
  //     manufacturedYear: 2010,
  //     vehicleClass: 'Truck',
  //     ownerName: 'Wasula Kuruppuarachchi',
  //   },
  // ];

  // // Fetch vehicles from the backend API
  // useEffect(() => {
  //   setVehicles(dummyData);
  // }, []);
  // Fetch vehicles from the backend API
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await fetch('http://localhost:8080/api/admin/vehicles', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`, 
          },
        });
        // Update to your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVehicles(data); // Set the fetched data
      } catch (error) {
        console.error('Error fetching vehicles: ', error);
      }
    };

    fetchVehicles();
  }, []);


  //Handle View 
  const handleView = (id)=>{
    const vehicle = vehicles.find(row => row._id === id);
    setSelectedVehicle(vehicle);
  }

  return (
    <div className="container mx-auto my-8">
      <div className="card shadow-x1 bg-gray-200 p-6">
        <h2 className="text-2xl font-bold mb-6">Registered Vehicle Management</h2>

        {/* Vehicle table */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-green text-white text-center">
              <tr>
                <th>Registration Number</th>
                <th>Engine Number</th>
                <th>Model</th>
                <th>Engine Capacity</th>
                <th>Fuel Type</th>
                <th>Year of Manufacture</th>
                <th>Ownerership Id</th>
                <th>Remaining Quota</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle._id} className="text-center transition-colors duration-200 hover:bg-gray-100">
                  <td>{vehicle.registrationNumber}</td>
                  <td>{vehicle.engineNumber}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.engineCapacity}</td>
                  <td>{vehicle.fuelType}</td>
                  <td>{vehicle.manufacturedYear}</td>
                  <td>{vehicle.ownershipId}</td>
                  <td>{vehicle.remainingQuota}</td>
                  <td>
                    <button onClick={() => handleView(vehicle._id)} className="btn btn-success mr-2">
                      View
                    </button>
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
          type="vehicle"
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
};

export default VehicleManagement;