
const StationModal = ({station, onClose})=>{
    if (!station) return null;
      
    return(
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h3 className="text-2xl font-semibold mb-4 flex justify-center">Fuel Station Details</h3>
            
            <p><strong>Fuel Station Name:</strong> {station.stationName}</p>
            <p><strong>Location:</strong> {station.location}</p>
            <p><strong>Owner Name:</strong> {station.ownerName}</p>
            <p><strong>Submitted Date:</strong> {new Date(station.submittedDate).toISOString().split('T')[0]}</p>
            
            <div className="mt-6 flex justify-center">
              <button onClick={onClose} className="btn btn-secondary">Close</button>
            </div>
          
        </div>
        </div>
    );
};
export default StationModal;