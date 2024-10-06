import React, { useState } from 'react';

const StationRegisterform = ()=>{
    const [formData, setFormData] = useState({
        ownerName:"",
        stationName: "",
        location: "",

    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return(
        <div className="container p-6 mx-auto mt-10 mb-5 bg-white rounded-lg shadow-lg ">
           <h4 className="mb-8 text-2xl font-bold text-center text-green">
                Fuel Station Registration
           </h4>   
           <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex-1 mr-4">
                    <label className="block mb-2 text-sm font-medium text-green">
                    Your Name (Fuel Station Owner)
                    </label>
                    <input
                    type="text"
                    name="ownerName"
                    placeholder="Owner's Name"
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
                    />
                </div>

                <div className="flex-1 mr-4">
                    <label className="block mb-2 text-sm font-medium text-green">
                    Fuel Station Name
                    </label>
                    <input
                    type="text"
                    name="stationName"
                    placeholder="Station Name"
                    value={formData.stationName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
                    />
                </div>

                <div className="flex-1 mr-4">
                    <label className="block mb-2 text-sm font-medium text-green">
                    Location of Fuel Station
                    </label>
                    <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-custom placeholder-custom"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-8 py-2 font-semibold transition duration-300 border-2 rounded-full w-80 text-green border-green hover:text-white hover:bg-green"
                    >
                        Submit
                    </button>
                </div>    
           </form>
        </div>
    );
}

export default StationRegisterform;