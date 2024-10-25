import React, { useEffect, useState } from 'react';

const MyStations = () => {
  const [stationRows, setStationRows] = useState([]);

  const dummyData = [
    {
      _id: '1',
      fuelStationNo: '1',
      location: 'Colombo',
      FuelStockCapacity: {
        Petrol92: 5000,
        Petrol95: 3000,
        Diesel: 7000,
        SuperDiesel: 3000,
      },
      Used: {
        Petrol92: 2000,
        Petrol95: 1000,
        Diesel: 3500,
        SuperDiesel: 1000,
      },
    },
    {
      _id: '2',
      fuelStationNo: '2',
      location: 'Gampaha',
      FuelStockCapacity: {
        Petrol92: 6000,
        Petrol95: 4000,
        Diesel: 8000,
        SuperDiesel: 5000,
      },
      Used: {
        Petrol92: 3000,
        Petrol95: 1500,
        Diesel: 4000,
        SuperDiesel: 3000,
      },
    },
  ];

  // Calculate remaining stock
  dummyData.forEach((station) => {
    station.Remaining = {
      Petrol92: station.FuelStockCapacity.Petrol92 - station.Used.Petrol92,
      Petrol95: station.FuelStockCapacity.Petrol95 - station.Used.Petrol95,
      Diesel: station.FuelStockCapacity.Diesel - station.Used.Diesel,
      SuperDiesel:
        station.FuelStockCapacity.SuperDiesel - station.Used.SuperDiesel,
    };
  });

  useEffect(() => {
    setStationRows(dummyData);
  }, []);

  return (
    <div className="container mx-auto px-6 my-10">
      <h2 className="text-2xl font-semibold text-center mb-8 text-primary">
        My Fuel Stations
      </h2>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-primary text-white text-center">
                <th className="p-3 border">Station No.</th>
                <th className="p-3 border">Location</th>
                <th colSpan={4} className="p-3 border bg-secondary">
                  Fuel Stock Capacity (Liters)
                </th>
                <th colSpan={4} className="p-3 border bg-secondary">
                  Remaining Stock (Liters)
                </th>
              </tr>
              <tr className="bg-gray-200 text-center">
                <th className="p-2 border" colSpan={2}></th>
                {['Petrol 92', 'Petrol 95', 'Diesel', 'Super Diesel'].map(
                  (fuelType) => (
                    <th
                      key={fuelType}
                      className="p-2 border bg-gray-100 text-gray-700"
                    >
                      {fuelType}
                    </th>
                  )
                )}
                {['Petrol 92', 'Petrol 95', 'Diesel', 'Super Diesel'].map(
                  (fuelType) => (
                    <th
                      key={fuelType}
                      className="p-2 border bg-gray-100 text-gray-700"
                    >
                      {fuelType}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {stationRows.map((station) => (
                <tr
                  key={station._id}
                  className="hover:bg-gray-100 transition-all duration-300 text-center"
                >
                  <td className="p-3 border">{station.fuelStationNo}</td>
                  <td className="p-3 border">{station.location}</td>
                  {Object.values(station.FuelStockCapacity).map((capacity, idx) => (
                    <td key={idx} className="p-3 border text-center">
                      {capacity}
                    </td>
                  ))}
                  {Object.values(station.Remaining).map((remaining, idx) => (
                    <td key={idx} className="p-3 border text-center text-green-600">
                      {remaining}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyStations;
