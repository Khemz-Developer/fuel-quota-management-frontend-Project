import React, { useEffect, useState } from 'react';

const MyStations = () => {
    const [stationRows, setStationRows] = useState([]);

    const dummyData = [
        {
            _id: '1',
            fuelStationNo: '1',
            location: 'Colombo',
            FuelStockCapacity:{
                Petrol:2500,
                Diesel:1700,
            },
            Used:{
                Petrol:250,
                Diesel:210,
            },
        },
        {
            _id: '1',
            fuelStationNo: '2',
            location: 'Gampaha',
            FuelStockCapacity:{
                Petrol:2500,
                Diesel:1700,
            },
            Used:{
                Petrol:250,
                Diesel:210,
            },
        },
    ]
    // Now calculate the remaining values after the object is created
    dummyData.forEach(station => {
        station.Remaining = {
        Petrol: station.FuelStockCapacity.Petrol - station.Used.Petrol,
        Diesel: station.FuelStockCapacity.Diesel - station.Used.Diesel,
        };
    });
    
    useEffect(()=>{
        setStationRows(dummyData);   
    },[])

    return (
        <div className='container mx-auto my-6'>
            <h2 className="text-2xl font-semibold mb-6">My Fuel Stations</h2>
            <div className="card shadow-x1 bg-gray-100">
                <div className='overflow-x-auto transition-transform transform hover:scale-105 hover:bg-gray-300  duration-300'>
                    <table className='w-full bg-gray-100'>
                        <thead> 
                            <tr className='border border-black'>
                                <th rowSpan={2} className='border border-black'>Fuel Station No.</th>
                                <th rowSpan={2} className='border border-black'>Location</th>
                                <th colSpan={2} className='border border-black'>Fuel Stock Capacity</th>
                                <th colSpan={2} className='border border-black'>Used Amount</th>
                                <th colSpan={2} className='border border-black'>Remaining Stock</th>
                            </tr>
                            <tr className='border border-black'>
                                <th className='border border-black'>Petrol</th>
                                <th className='border border-black'>Diesel</th>
                                <th className='border border-black'>Petrol</th>
                                <th className='border border-black'>Diesel</th>
                                <th className='border border-black'>Petrol</th>
                                <th className='border border-black'>Diesel</th>
                            </tr>
                        </thead>
                        <tbody className='border border-black'>
                            {stationRows.map((row)=>(
                                <tr key={row._id} className='text-center border border-black'>
                                        <td className='border border-black'>{row.fuelStationNo}</td>
                                        <td className='border border-black'>{row.location}</td>
                                        <td className='border border-black'>{row.FuelStockCapacity.Petrol}</td> 
                                        <td className='border border-black'>{row.FuelStockCapacity.Diesel}</td> 
                                        <td className='border border-black'>{row.Used.Petrol}</td> 
                                        <td className='border border-black'>{row.Used.Diesel}</td>  
                                        <td className='border border-black'>{row.Remaining.Petrol}</td> 
                                        <td className='border border-black'>{row.Remaining.Diesel}</td>   
                                </tr>
                                ))
                            }         
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyStations;
