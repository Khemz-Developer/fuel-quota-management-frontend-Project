const DashBoard = () => {
  return (
    <div className="mt-10" >
      <div className="flex items-center justify-center">
        <div className="flex p-6 bg-white rounded-lg shadow-lg">
          {/* Left Side - User Image */}
          <div className="mr-8">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User Avatar"
                />
              </div>
            </div>
          </div>

          {/* Right Side - User Information */}
          <div className="flex flex-col justify-center">
            <div className="text-lg font-bold text-gray-800">
              Username: John Doe
            </div>
            <div className="mt-2 text-gray-600">ID Number: 123456789</div>
            <div className="mt-2 text-gray-600">Number of Vehicles: 3</div>
          </div>
        </div>
      </div>
      <div className= "mx-10 my-10 ovrflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="text-white rounded-lg bg-green">
            <tr>
              <th ></th>
              <th>Vehicle Type</th>
              <th>Model</th>
              <th>Owner Name</th>
              <th>Year of Manufacture</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="">
              <th  className="hover:bg-gray-100">1</th>
              <td>Car</td>
              <td>Toyota</td>
              <td>John Doe</td>
              <td>2019</td>
              <td>
                <button className="btn btn-sm ">View</button>
              </td>
            </tr>
            {/* row 2 */}
            <tr  className="hover:bg-gray-100">
              <th>2</th>
              <td>Motorcycle</td>
              <td>Yamaha</td>
              <td>Jane Doe</td>
              <td>2020</td>
              <td>
                <button className="btn btn-sm ">View</button>
              </td>
            </tr>
            {/* row 3 */}
            <tr  className="hover:bg-gray-100">
              <th>3</th>
              <td>Truck</td>
              <td>Volvo</td>
              <td>John Doe</td>
              <td>2018</td>
              <td>
                <button className="btn btn-sm ">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
