import StationRegisterform from "./StationRegisterform";

const Banner = () => {
    return (
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="flex items-center justify-between gap-0 py-24 md:flex-row-reverse">
          {/* Image */}
          <div className="ml-10"> {/* Increase width and move right */}
            <img src="/images/home/2.png" alt="" className="w-full transition-all duration-500 animate-zoomIn hover:rotate-1" /> {/* Make image take full width */}
          </div>
  
          {/* Text */}
          <div className="px-4 space-y-6 md:w-1/2">
            <h2 className="text-4xl font-extrabold leading-snug md:leading-snug md:text-6xl">
            Manage Your Fuel Station  {" "}
              <span className=" text-green"> Efficiently</span>
            </h2>
            <p className="text-xl text-[#4A4A4A]">
            Register your fuel station, manage fuel distribution, and keep track of fuel stock all in one place.
            </p>
            <button className="px-8 py-3 font-semibold text-white rounded-full btn bg-green">
              Manage Now
            </button>
           
            {/* <button onClick={() => document.getElementById("my_modal_6").showModal()} className="px-8 py-2 ml-4 font-semibold transition duration-300 border-2 rounded-full text-green border-green hover:text-white hover:bg-green">
              Register Fuel Station
            </button> */}
            <StationRegisterform/>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  