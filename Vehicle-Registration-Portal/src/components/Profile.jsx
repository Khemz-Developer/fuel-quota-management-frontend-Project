import PropTypes from "prop-types"; // Import PropTypes

import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Profile = ({ user }) => {
  return (
    <div>
      <div className="z-50 drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user.photoURL ? (
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL} // Corrected property name
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full ">
                  <FaUserCircle className="p-1 text-blue-400 transition-transform duration-300 transform w-11 h-11 hover:scale-110" />
                </div>
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a href="/update-profile">Profile</a>
            </li>
            {/* <li>
              <a href="/order">Order</a>
            </li> */}
            
            {/* <li>
              <Link to="/dashboard">Dashboard</Link>
            </li> */}
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Define propTypes for the Profile component
Profile.propTypes = {
  user: PropTypes.shape({
    photoURL: PropTypes.string.isRequired, // Define shape of the user prop
  }).isRequired,
};

export default Profile;
