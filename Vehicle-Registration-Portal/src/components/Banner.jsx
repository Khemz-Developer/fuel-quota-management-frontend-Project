import { useNavigate } from "react-router-dom";
const Banner = () => {

  const navigate = useNavigate();
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="relative flex items-center justify-between gap-0 py-24 md:flex-row-reverse">
        {/* Decorative background element */}
        <div className="absolute w-[300px] h-[300px] bg-green rounded-full opacity-20 right-0 top-1/4 -z-10 animate-pulse"></div>

        {/* Image */}
        <div className="hidden ml-10 transition-transform duration-300 ease-out transform md:w-1/2 hover:scale-105 md:block">
          <img
            src="/images/home/banner1.png"
            alt="Vehicle Registration"
            className="w-full transition-all duration-500 animate-zoomIn hover:rotate-2"
          />
        </div>

        {/* Text */}
        <div className="px-4 space-y-8 md:w-1/2">
          <h2 className="text-3xl font-extrabold leading-snug md:leading-snug md:text-6xl">
            Manage Your Fuel Quota with <span className="text-green">Ease</span>
          </h2>
          <p className="max-w-md text-xl text-gray-600">
            Register your vehicle and track your fuel usage with our convenient
            online portal.
          </p>

          <div className="flex hidden space-x-4 md:block">
            <button onClick={()=>navigate("/registration")}  className="px-8 py-2 font-semibold text-white transition duration-300 rounded-full shadow-lg bg-green hover:bg-green-700 hover:shadow-xl">
              Register Now
            </button>
            <button className="px-8 py-2 font-semibold transition duration-300 border-2 rounded-full text-green border-green hover:text-white hover:bg-green">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
