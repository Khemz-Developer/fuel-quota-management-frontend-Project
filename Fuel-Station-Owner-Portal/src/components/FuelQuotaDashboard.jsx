import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import StationRegisterform from "./StationRegisterform";

const FuelQuotaDashboard = () => {
  const [fuelData, setFuelData] = useState([]);

  const dummyFuelData = [
    {
      station: "Colombo",
      fuel: [
        { type: "Petrol 92 Octane", quota: 5000, used: 2000 },
        { type: "Petrol 95 Octane", quota: 6000, used: 3000 },
        { type: "Diesel", quota: 7000, used: 4000 },
        { type: "Super Diesel", quota: 8000, used: 5000 },
      ],
    },
    {
      station: "Gampaha",
      fuel: [
        { type: "Petrol 92 Octane", quota: 6000, used: 3000 },
        { type: "Petrol 95 Octane", quota: 7000, used: 4000 },
        { type: "Diesel", quota: 8000, used: 5000 },
        { type: "Super Diesel", quota: 9000, used: 6000 },
      ],
    },
  ];

  useEffect(() => {
    setFuelData(dummyFuelData);
  }, []);

  const prepareChartData = (fuel) => ({
    labels: ["Used Amount", "Remaining"],
    datasets: [
      {
        label: `${fuel.type}`,
        data: [fuel.used, fuel.quota - fuel.used],
        backgroundColor: ["#FF6868", "#39DB4A"], // Used: Red, Remaining: Green
        hoverBackgroundColor: ["#FF6868", "#39DB4A"],
      },
    ],
  });

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary">
          Allocated Fuel Quotas for each Station
        </h2>
      </div>

      <div className="space-y-12">
        {fuelData.map((station) => (
          <div
            key={station.station}
            className="p-6 bg-neutral rounded-md shadow-lg mx-4"
          >
            <h3 className="text-xl font-semibold text-center text-primary mb-6">
              Station: {station.station}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {station.fuel.map((fuel) => (
                <div
                  key={fuel.type}
                  className="p-4 bg-white shadow-md rounded-lg transform hover:scale-105 transition-transform"
                  style={{ minWidth: "200px" }}
                >
                  <p className="text-lg font-semibold text-secondary mb-2">
                    {fuel.type}
                  </p>
                  <p className="text-sm">Quota: {fuel.quota} liters</p>
                  <p className="text-sm">Used: {fuel.used} liters</p>
                  <p className="text-sm text-green-700">
                    Remaining: {fuel.quota - fuel.used} liters
                  </p>

                  <div className="flex justify-center mt-4">
                    <div
                      className="relative"
                      style={{ width: "160px", height: "160px" }}
                    >
                      <Pie
                        data={prepareChartData(fuel)}
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuelQuotaDashboard;
