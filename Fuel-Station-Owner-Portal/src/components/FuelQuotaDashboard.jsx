// import "chart.js/auto";
// import { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";


// const FuelQuotaDashboard = () => {
//   const [fuelData, setFuelData] = useState([]);

//   const dummyFuelData = [
//     {
//       station: "Colombo",
//       fuel: [
//         { type: "Petrol 92 Octane", quota: 5000, used: 2000 },
//         { type: "Petrol 95 Octane", quota: 6000, used: 3000 },
//         { type: "Diesel", quota: 7000, used: 4000 },
//         { type: "Super Diesel", quota: 8000, used: 5000 },
//       ],
//     },
//     {
//       station: "Gampaha",
//       fuel: [
//         { type: "Petrol 92 Octane", quota: 6000, used: 3000 },
//         { type: "Petrol 95 Octane", quota: 7000, used: 4000 },
//         { type: "Diesel", quota: 8000, used: 5000 },
//         { type: "Super Diesel", quota: 9000, used: 6000 },
//       ],
//     },
//   ];

//   useEffect(() => {
//     setFuelData(dummyFuelData);
//   }, []);

//   const prepareChartData = (fuel) => ({
//     labels: ["Used Amount", "Remaining"],
//     datasets: [
//       {
//         label: `${fuel.type}`,
//         data: [fuel.used, fuel.quota - fuel.used],
//         backgroundColor: ["#FF6868", "#39DB4A"], // Used: Red, Remaining: Green
//         hoverBackgroundColor: ["#FF6868", "#39DB4A"],
//       },
//     ],
//   });

//   return (
//     <div className="container p-6 mx-auto">
//       <div className="mb-8 text-center">
//         <h2 className="text-2xl font-bold text-primary text-green">
//           Allocated Fuel Quotas for each Station
//         </h2>
//       </div>

//       <div className="space-y-12">
//         {fuelData.map((station) => (
//           <div
//             key={station.station}
//             className="p-6 mx-4 rounded-md shadow-lg bg-neutral"
//           >
//             <h3 className="mb-6 text-xl font-semibold text-center text-primary text-green">
//               Station: {station.station}
//             </h3>

//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
//               {station.fuel.map((fuel) => (
//                 <div
//                   key={fuel.type}
//                   className="p-4 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105"
//                   style={{ minWidth: "200px" }}
//                 >
//                   <p className="mb-2 text-lg font-semibold text-secondary">
//                     {fuel.type}
//                   </p>
//                   <p className="text-sm">Quota: {fuel.quota} liters</p>
//                   <p className="text-sm">Used: {fuel.used} liters</p>
//                   <p className="text-sm text-green-700">
//                     Remaining: {fuel.quota - fuel.used} liters
//                   </p>

//                   <div className="flex justify-center mt-4">
//                     <div
//                       className="relative"
//                       style={{ width: "160px", height: "160px" }}
//                     >
//                       <Pie
//                         data={prepareChartData(fuel)}
//                         options={{
//                           responsive: true,
//                           maintainAspectRatio: false,
//                           plugins: {
//                             legend: {
//                               display: true,
//                               position: "bottom",
//                               labels: {
//                                 font: { size: 10 },
//                                 color: "#555",
//                               },
//                             },
//                             tooltip: {
//                               usePointStyle: true,
//                               boxWidth: 15,
//                               callbacks: {
//                                 labelPointStyle: () => ({
//                                   pointStyle: "circle",
//                                   rotation: 0,
//                                 }),
//                               },
//                             },
//                           },
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FuelQuotaDashboard;

import "chart.js/auto";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useAuth } from "../providers/AuthProvider";

const FuelQuotaDashboard = () => {
  const [fuelData, setFuelData] = useState([]);
  const { token } = useAuth(); // Assuming you are using useAuth to get the token

  useEffect(() => {
    const fetchFuelData = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/stations/all-with-quotas", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setFuelData(data); // Set the fetched data to state
        console.log("Fuel data:", data); // Log fetched data
      } catch (error) {
        console.error("Error fetching fuel data:", error);
      }
    };

    fetchFuelData(); // Call the function to fetch data
  }, [token]); // Include token in the dependency array

  // Log fuelData whenever it changes
  useEffect(() => {
    console.log("Fuel data updated:", fuelData);
  }, [fuelData]);

  const prepareChartData = (fuelUsed, quota) => {
    const remaining = quota - fuelUsed;

    return {
      labels: ["Used Amount", "Remaining"],
      datasets: [
        {
          label: "Fuel Quota",
          data: [fuelUsed, remaining],
          backgroundColor: ["#FF6868", "#39DB4A"], // Used: Red, Remaining: Green
          hoverBackgroundColor: ["#FF6868", "#39DB4A"],
        },
      ],
    };
  };

  return (
    <div className="container p-6 mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-primary text-green">
          Allocated Fuel Quotas for each Station
        </h2>
      </div>

      <div className="space-y-12">
        {fuelData.map((station) => (
          <div
            key={station.stationId} // Changed to stationId for unique key
            className="p-6 mx-4 rounded-md shadow-lg bg-neutral"
          >
            <h3 className="mb-6 text-xl font-semibold text-center text-primary text-green">
              Station: {station.name}
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {Object.keys(station)
                .filter(key => key !== "stationId" && key !== "name" && key !== "address")
                .map((fuelType) => {
                  const quota = 10000; // Hardcoded quota value
                  const fuelUsed = 5000 - station[fuelType]; // Calculate used fuel based on hardcoded quota

                  return (
                    <div
                      key={fuelType}
                      className="p-4 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105"
                      style={{ minWidth: "200px" }}
                    >
                      <p className="mb-2 text-lg font-semibold text-secondary">
                        {fuelType}
                      </p>
                      <p className="text-sm">Quota: {quota} liters</p> {/* Display hardcoded quota */}
                      <p className="text-sm">Used: {fuelUsed} liters</p>
                      <p className="text-sm text-green-700">
                        Remaining: {quota - fuelUsed} liters
                      </p>

                      <div className="flex justify-center mt-4">
                        <div
                          className="relative"
                          style={{ width: "160px", height: "160px" }}
                        >
                          <Pie
                            data={prepareChartData(fuelUsed, quota)} // Pass used fuel amount and quota
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: {
                                  display: true,
                                  position: "bottom",
                                  labels: {
                                    font: { size: 10 },
                                    color: "#555",
                                  },
                                },
                                tooltip: {
                                  usePointStyle: true,
                                  boxWidth: 15,
                                  callbacks: {
                                    labelPointStyle: () => ({
                                      pointStyle: "circle",
                                      rotation: 0,
                                    }),
                                  },
                                },
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuelQuotaDashboard;
