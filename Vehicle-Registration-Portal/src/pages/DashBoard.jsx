// import { AiFillEye, AiOutlineQrcode } from "react-icons/ai"; // Import the eye icon
// import QRCode from "qrcode";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "../providers/AuthProvider";
// import { useNavigate } from "react-router-dom";

// const DashBoard = () => {
//   const [myVehicles, setMyVehicles] = useState([]); // State for vehicles
//   const [userInfo, setUserInfo] = useState(null); // State for user information
//   const [loading, setLoading] = useState(true); // State for loading status
//   const { isLoggedIn, token } = useAuth();
//   const navigate = useNavigate();
//   const [error, setError] = useState(null); // State for error handling

//   // Check for token and username
//   useEffect(() => {
//     if (!isLoggedIn()) {
//       navigate("/signup");
//     } else {
//       fetchVehicles(); // Fetch vehicles when the component is loaded
//     }
//   }, [isLoggedIn, navigate]);

//   // Function to fetch vehicle data
//   const fetchVehicles = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8081/api/vehicles/owner-details",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the token in the request headers
//           },
//         }
//       );
//       console.log("Response:", response.data);
//       setUserInfo(response.data); // Set user info
//       setMyVehicles(response.data.vehicles); // Set vehicle data

//       console.log('user data',userInfo)
//       console.log("Vehicles", myVehicles);
//     } catch (error) {
//       console.error("Error fetching vehicles:", error);
//       setError("Failed to load vehicles."); // Set error state
//     } finally {
//       setLoading(false); // Set loading to false
//     }
//   };

//   // Function to generate and download QR Code
//   const handleDownloadQRCode = async (vehicleId) => {
//     try {
//       const url = await QRCode.toDataURL(`Vehicle ID: ${vehicleId}`);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `vehicle-${vehicleId}-qrcode.png`;
//       link.click();
//     } catch (error) {
//       console.error("Error generating QR code:", error);
//     }
//   };

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="mt-10 ">
//       <div className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:-translate-y-2">
//         <div className="flex p-6 bg-white rounded-lg shadow-lg">
//           {/* Left Side - User Image */}
//           <div className="mr-8">
//             <div className="avatar">
//               <div className="w-24 rounded-full">
//                 <img
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                   alt="User Avatar"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Side  - User Information */}
//           <div className="flex flex-col justify-center ">
//             <div className="text-lg font-bold text-gray-800">
//               Username: 
//             </div>
//             <div className="mt-2 text-gray-600">ID Number: </div>
//             <div className="mt-2 text-gray-600">Number of Vehicles: </div>
//           </div>
//         </div>
//       </div>
//       <div className="mx-10 my-10 ovrflow-x-auto ">
//         <h1
//           style={{ color: "#2F8590" }}
//           className="mb-5 text-2xl font-extrabold text-center "
//         >
//           Registered Vehicles List
//         </h1>
//         <table className="table">
//           {/* head */}
//           <thead className="text-white rounded-lg bg-green">
//             <tr>
//               <th>No</th>
//               <th>Registration Number</th>
//               <th className="hidden md:table-cell">Engine Number</th>
//               <th className="hidden md:table-cell">Model</th>
//               <th>View</th>
//               <th>Qr Code</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* {myVehicals.map((vehicle, index) => (
//               <tr className="transition-colors duration-200 hover:bg-gray-100" key={vehicle.id}>
//                 <td>{index + 1}</td>
//                 <td>{vehicle.VehicleType}</td>
//                 <td className="hidden md:table-cell">vehicle.Model</td> 
//                 <td className="hidden md:table-cell">vehicle.OwnerName</td>
//                 <td>
//                   <button className="flex items-center px-3 py-2 text-white rounded-lg bg-placeholder-green hover:bg-slate-400">
//                     <AiFillEye className="" />
//                   </button>
//                 </td>
//                 <td>
//                 <button
//                     className="px-4 py-2 text-black bg-green-500 rounded-lg"
//                     onClick={() => handleDownloadQRCode(vehicle.id)}
//                   >
//                     <AiOutlineQrcode size={24}/>
//                   </button>
//                 </td>
//               </tr>
//             ))} */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DashBoard;
import { AiFillEye, AiOutlineQrcode } from "react-icons/ai"; // Import the eye icon
import QRCode from "qrcode";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [myVehicles, setMyVehicles] = useState([]); // State for vehicles
  const [userInfo, setUserInfo] = useState(null); // State for user information
  const [loading, setLoading] = useState(true); // State for loading status
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null); // State for error handling

  // Check for token and username
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/signup");
    } else {
      fetchUserInfo(); // Fetch user info when the component is loaded
    }
  }, [isLoggedIn, navigate]);

  // Function to fetch user info and vehicle data
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/vehicles/owner-details",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );
      console.log("Response:", response.data);
      setUserInfo(response.data); // Set user info
      setMyVehicles(response.data.vehicles); // Set vehicle data
    } catch (error) {
      console.error("Error fetching user info:", error);
      setError("Failed to load user information."); // Set error state
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  // Function to generate and download QR Code
  const handleDownloadQRCode = async (registrationNumber) => {
    try {
      const options = {
        width: 500, // Set the width of the QR code
        margin: 1,  // Set the margin around the QR code
      };
      const url = await QRCode.toDataURL(`${registrationNumber}`, options); // Generate QR code with specified options
      const link = document.createElement("a");
      link.href = url;
      link.download = `vehicle-${registrationNumber}-qrcode.png`; // Adjusted filename
      link.click();
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Error handling
  }

  return (
    <div className="mt-10">
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

          {/* Right Side - User Information */}
          <div className="flex flex-col justify-center">
            <div className="text-lg font-bold text-gray-800">
              Username: {userInfo.username}
            </div>
            <div className="mt-2 text-gray-600">ID Number: {userInfo.idCardNumber}</div>
            <div className="mt-2 text-gray-600">
              Number of Vehicles: {myVehicles.length}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 my-10 overflow-x-auto">
        <h1
          style={{ color: "#2F8590" }}
          className="mb-5 text-2xl font-extrabold text-center"
        >
          Registered Vehicles List
        </h1>
        <table className="table">
          {/* head */}
          <thead className="text-white rounded-lg bg-green">
            <tr>
              <th>No</th>
              <th>Registration Number</th>
              <th className="hidden md:table-cell">Engine Number</th>
              <th className="hidden md:table-cell">Manufacturer</th>
              <th className="hidden md:table-cell">Model</th>
              <th>View</th>
              <th>Qr Code</th>
            </tr>
          </thead>
          <tbody>
            {myVehicles.map((vehicle, index) => (
              <tr className="transition-colors duration-200 hover:bg-gray-100" key={vehicle.vehicleId}>
                <td>{index + 1}</td>
                <td>{vehicle.registrationNumber}</td>
                <td className="hidden md:table-cell">{vehicle.engineNumber}</td>
                <td className="hidden md:table-cell">{vehicle.manufacturer}</td>
                <td className="hidden md:table-cell">{vehicle.model}</td>
                <td>
                  <button className="flex items-center px-3 py-2 text-white rounded-lg bg-placeholder-green hover:bg-slate-400">
                    <AiFillEye />
                  </button>
                </td>
                <td>
                  <button
                    className="px-4 py-2 text-black bg-green-500 rounded-lg"
                    onClick={() => handleDownloadQRCode(vehicle.registrationNumber)} 
                  >
                    <AiOutlineQrcode size={24} />
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
