import { AiFillEye,AiOutlineQrcode } from "react-icons/ai"; // Import the eye icon
import QRCode from 'qrcode'
import { useState } from 'react';
const MyVehicals = [
  {
    id: 1,
    VehicleType: "Car",
    Model: "123",
    OwnerName: "John Doe",
    YearOfManufacture: "2019",
  },
  {
    id: 2,
    VehicleType: "Motorcycle",
    Model: "123",
    OwnerName: "Jane Doe",
    YearOfManufacture: "2020",
  },
  {
    id: 3,
    VehicleType: "Truck",
    Model: "123",
    OwnerName: "John Doe",
    YearOfManufacture: "2018",
  },
  {
    id: 4,
    VehicleType: "Car",
    Model: "123",
    OwnerName: "John Doe",
    YearOfManufacture: "2019",
  },
  {
    id: 5,
    VehicleType: "Motorcycle",
    Model: "123",
    OwnerName: "Jane Doe",
    YearOfManufacture: "2020",
  },
  {
    id: 6,
    VehicleType: "Truck",
    Model: "123",
    OwnerName: "John Doe",
    YearOfManufacture: "2018",
  },
];

const DashBoard = () => {

  

  // Function to generate and download QR Code
  const handleDownloadQRCode = async (vehicleId) => {
    try {
      const url = await QRCode.toDataURL(`Vehicle ID: ${vehicleId}`);
      const link = document.createElement('a');
      link.href = url;
      link.download = `vehicle-${vehicleId}-qrcode.png`;
      link.click();
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };
  
  return (
    <div className="mt-10 ">
      <div className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:-translate-y-2">
        <div className="flex p-6 bg-white rounded-lg shadow-lg">
          {/* Left Side - User Image */}
          <div className="mr-8">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>

          {/* Right Side  - User Information */}
          <div className="flex flex-col justify-center ">
            <div className="text-lg font-bold text-gray-800">
              Username: John Doe
            </div>
            <div className="mt-2 text-gray-600">ID Number: 123456789</div>
            <div className="mt-2 text-gray-600">Number of Vehicles: 3</div>
          </div>
        </div>
      </div>
      <div className="mx-10 my-10 ovrflow-x-auto ">
        <h1 style={{color:'#2F8590'}} className="mb-5 text-2xl font-extrabold text-center ">
          Registered Vehicles List 
        </h1>
        <table className="table">
          {/* head */}
          <thead className="text-white rounded-lg bg-green">
            <tr>
              <th>No</th>
              <th>Vehicle Type</th>
              <th className="hidden md:table-cell">Model</th>
              <th className="hidden md:table-cell">Owner Name</th>
              <th>View</th>
              <th>Qr Code</th>
            </tr>
          </thead>
          <tbody>
            {MyVehicals.map((vehicle, index) => (
              <tr className="transition-colors duration-200 hover:bg-gray-100" key={vehicle.id}>
                <td>{index + 1}</td>
                <td>{vehicle.VehicleType}</td>
                <td className="hidden md:table-cell">{vehicle.Model}</td> {/* Example model value */}
                <td className="hidden md:table-cell">{vehicle.OwnerName}</td>
                <td>
                  <button className="flex items-center px-3 py-2 text-white rounded-lg bg-placeholder-green hover:bg-slate-400">
                    <AiFillEye className="" />
                  </button>
                </td>
                <td>
                <button
                    className="px-4 py-2 text-black bg-green-500 rounded-lg"
                    onClick={() => handleDownloadQRCode(vehicle.id)}
                  >
                    <AiOutlineQrcode size={24}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
