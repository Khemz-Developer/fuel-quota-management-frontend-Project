const StationModal = ({ data, type, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h3 className="text-2xl font-semibold mb-4 flex justify-center">
          {type === "owner" ? "Station Owner Details" : "Vehicle Registration Details"}
        </h3>

        {/* Station Details */}
        {type === "owner" && (
          <>
            <p><strong>Full Name:</strong> {data.fullName}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>User Name:</strong> {data.username}</p>
            <p><strong>ID Card Number:</strong> {data.idCardNumber}</p>
            <p><strong>Phone number:</strong> {data.phoneNumber}</p>
          </>
        )}

        {/* Vehicle Details */}
        {type === "vehicle" && (
          <>
            <p><strong>Registration Number:</strong> {data.registrationNumber}</p>
            <p><strong>Engine Number:</strong> {data.engineNumber}</p>
            <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
            <p><strong>Model:</strong> {data.model}</p>
            <p><strong>Engine Capacity:</strong> {data.engineCapacity}</p>
            <p><strong>Fuel Type:</strong> {data.fuelType}</p>
            <p><strong>Manufactured Year:</strong> {data.manufacturedYear}</p>
            <p><strong>Remaining Quota</strong> {data.remainingQuota}</p>
            {data.ownershipId && <p><strong>Ownership ID:</strong> {data.ownershipId}</p>}
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