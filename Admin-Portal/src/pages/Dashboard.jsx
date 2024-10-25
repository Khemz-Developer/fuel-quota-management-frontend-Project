import React from 'react'
import StationList from '../components/StationList'
import StationRegisterform from '../components/StationRegisterform'

const Dashboard = () => {
  return (
    <div className="container p-2 mx-auto">
    <div className="flex flex-col items-center justify-between">
      <button
          onClick={() => document.getElementById("my_modal_6").showModal()}
          className="px-8 py-2 ml-4 font-semibold transition duration-300 border-2 rounded-full text-green border-green hover:text-white hover:bg-green"
        >
          Register a Fuel Station
        </button>
        <StationRegisterform/>
      <StationList/>
    </div>
    </div>
  )
}

export default Dashboard
