import React, { useEffect, useState } from 'react';
import StationModal from './stationModal';

const VehicleOwners = () => {
    const [vehicleOwnerRows, setVehicleOwnerRows] = useState([]);
    const [selectedOwner, setSelectedOwner] = useState(null);

    const dummyData = [
        {
            _id: "1",
            fullName: "Kumara",
            email: "Kumara@example.com",
            username: "dw123",
            idCardNumber: "12343789",
            phoneNumber: "+754324294",
        },
        {
            _id: "2",
            fullName: "Janitha Fernando",
            email: "janitha@example.com",
            username: "jani",
            idCardNumber: "987654321",
            phoneNumber: "+754321194",
        },
        {
            _id: "3",
            fullName: "Michael Sam",
            email: "michael.sam@example.com",
            username: "michaelj",
            idCardNumber: "947654321",
            phoneNumber: "+774310194",
        },
    ]

    // useEffect(() => {
    //     // Simulate setting fetched data
    //     setVehicleOwnerRows(dummyData);
    //   }, []);
    
    // Fetch data using fetch API
    // Function to get station names
    // const getStationNames = (stations) => {
    //     if (!stations || stations.length === 0) return 'No Stations'; 
    //     return stations.map(station => station.name).join(', '); 
    // }
    
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const token = localStorage.getItem('token');
    //             const response = await fetch('http://localhost:8080/api/admin/station-owners', {
    //                 method: 'GET',
    //                 headers: {
    //                   'Content-Type': 'application/json', 
    //                   'Authorization': `Bearer ${token}`,
    //                 },
    //             }); 
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             setVehicleOwnerRows(data); // Set the fetched data
    //         } catch (error) {
    //             console.error('Error fetching data: ', error);
    //         }
    //     };
    //     fetchData();    
    // },[]);

    useEffect(()=>{
        setVehicleOwnerRows(dummyData);
    },[])
    
    // Handle View
    const handleView = (vehicleId) => {
        const vehicle = vehicleOwnerRows.find(row => row._id === vehicleId);
        setSelectedOwner(vehicle);
    }
    
    return (
        <div className="container mx-auto my-8">
        <div className="card shadow-x1 bg-gray-200 p-6">
            <h2 className="text-2xl font-semibold mb-4">Registered Station Owners</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead className="bg-green text-white text-center">
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>ID Card Number</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {vehicleOwnerRows.map((row) => (
                    <tr key={row._id} className='text-center transition-colors duration-200 hover:bg-gray-100'>
                    <td>{row.fullName}</td>
                    <td>{row.email}</td>
                    <td>{row.username}</td>
                    <td>{row.idCardNumber}</td>
                    <td>{row.phoneNumber}</td>
                    <td>
                        <button onClick={() => handleView(row._id)} className="btn btn-error mr-2">View</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>

        {/* Modal for viewing station details */}
        {selectedOwner && (
            <StationModal
            data={selectedOwner}
            type="owner"
            onClose={() => setSelectedOwner(null)}  // Close modal on clicking close
            />
        )}
        </div>
    )
}

export default VehicleOwners
