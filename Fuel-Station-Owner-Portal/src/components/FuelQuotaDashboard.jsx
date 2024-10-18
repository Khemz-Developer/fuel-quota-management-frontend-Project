import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import StationRegisterform from "./StationRegisterform";

const FuelQuotaDashboard = () => {
  const [fuelData, setFuelData] = useState([]);

  const dummyFuelData = [
    { type: "Petrol", quota: 5000, used: 2000 },
    { type: "Diesel", quota: 7000, used: 5000 },
  ];

  // Use dummy data for now
  useEffect(() => {
    setFuelData(dummyFuelData);
  }, []);

  const fetchFuelData = async () => {
    try {
      const response = await fetch("/api/fuel-quotas");
      const data = await response.json();
      setFuelData(data);
    } catch (error) {
      console.error("Error fetching fuel data:", error);
    }
  };

  // Preparing the data for the pie chart
  const prepareChartData = (fuel) => ({
    labels: ["Used Amount", "Remaining"],
    datasets: [
      {
        label: `${fuel.type} Fuel Quota`,
        data: [fuel.used, fuel.quota - fuel.used],
        backgroundColor: ["#1E3A8A", "#FBBF24"],
        hoverBackgroundColor: ["#1E3A8A", "#FBBF24"],
      },
    ],
  });

  return (
    <div className="container p-4 mx-auto">
      

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-green">Fuel Station Owner Dashboard</h2>
        <button
          onClick={() => document.getElementById("my_modal_6").showModal()}
          className="px-8 py-2 ml-4 font-semibold transition duration-300 border-2 rounded-full text-green border-green hover:text-white hover:bg-green"
        >
          Register Fuel Station
        </button>
      </div>
      <StationRegisterform />

      {/* Allocated Fuel Quotas */}
      <div className="p-6 card">
        <section className="mb-8">
          <h3 className="mb-3 text-xl">Allocated Fuel Quotas</h3>
          <div className="grid grid-cols-2 gap-6">
            {fuelData.map((fuel) => (
              <div
                key={fuel.type}
                className="p-3 transition-transform duration-300 transform bg-gray-300 card shadow-x2 hover:scale-105 hover:bg-gray-400"
              >
                <h3 className="text-lg font-bold">{fuel.type}</h3>
                <p>Quota: {fuel.quota} liters</p>
                <p>Used: {fuel.used} liters</p>
                <p>Remaining: {fuel.quota - fuel.used} liters</p>

                {/* Pie Chart */}
                <div className="flex items-center justify-center">
                  <div style={{ width: "400px", height: "400px" }}>
                    <Pie
                      data={prepareChartData(fuel)}
                      options={{
                        plugins: {
                          legend: {
                            display: true,
                            labels: {
                              font: {
                                size: 12,
                              },
                              color: "#333",
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FuelQuotaDashboard;
