
const StationModal = ({data, type, onClose})=>{
    if (!data) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h3 className="text-2xl font-semibold mb-4 flex justify-center">
              {type === "station" ? "Fuel Station Details" : "Vehicle Registration Details"}
            </h3>
            
            {type === "station" && (
            <>
            <p><strong>Fuel Station Name:</strong> {data.stationName}</p>
            <p><strong>Location:</strong> {data.location}</p>
            <p><strong>Owner Name:</strong> {data.ownerName}</p>
            <p><strong>Submitted Date:</strong> {new Date(data.submittedDate).toISOString().split('T')[0]}</p>
            </>
            )}

            {type === "vehicle" && (
            <>
            <p><strong>Registration No:</strong> {data.registrationNumber}</p>
            <p><strong>Owner Name:</strong> {data.ownerName}</p>
            <p><strong>Engine No:</strong> {data.engineNumber}</p>
            <p><strong>Vehicle Class:</strong>{data.vehicleClass}</p>
            <p><strong>Make:</strong> {data.make}</p>
            <p><strong>Model:</strong> {data.model}</p>
            <p><strong>Year Of Manufacture:</strong> {data.yearOfManufacture}</p>
            </>
            )}
            
            <div className="mt-6 flex justify-center">
              <button onClick={onClose} className="btn btn-secondary">Close</button>
            </div>
          
        </div>
        </div>
    );
};
export default StationModal;