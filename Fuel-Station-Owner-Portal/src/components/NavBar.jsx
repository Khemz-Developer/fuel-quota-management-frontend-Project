import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "./SignInModal";
import Profile from "./Profile";
import { useAuth } from "../providers/AuthProvider";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [isSticky, setSticky] = useState(false);
  const location = useLocation(); 
  const defaultPhotoURL = "https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"; // Replace with your default photo URL
  
  const { userName,token } = useAuth();
  console.log(userName,token);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isActive = (path) => location.pathname === path;
  const navItems = (
    <>
      <li>
        <Link to="/" className={`text-black ${isActive("/") ? "text-[#176B87]" : ""}`}>Home</Link>
      </li>
      
      <li>
        <Link to="/dashboard" className={`text-black ${isActive("/dashboard") ? "text-[#176B87]" : ""}`}>DashBoard</Link>
      </li>
      <li>
        <Link to="/help" className={`text-black ${isActive("/help") ? "text-[#176B87]" : ""}`}>Help & Support</Link>
      </li>
    </>
  );

  // const navItems = (
  //   <>
  //     <li>
  //       <a className="text-black" href="/">
  //         Home
  //       </a>
  //     </li>
  //     <li>
  //       <a className="text-black" href="/dashboard">
  //         DashBoard
  //       </a>
  //     </li>

  //     <li>
  //       <details>
  //         <summary>Management Page</summary>
  //         <ul className="p-2">
  //           <li>
  //             <a href="/order">Vehical Management Page</a>
  //           </li>
  //           <li>
  //             <a href="/accepted-orders">Fuel Station Management Page</a>
  //           </li>
           
  //         </ul>
  //       </details>
  //     </li>
     
  //   </>
  // );
  return (
    <header
      className={`container mx-auto max-w-screen-2xl ${
        isSticky ? "sticky top-0 bg-white z-10 shadow" : ""
      }`}
    >
      <div className="navbar xl:px-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a href="/">
            <p className="text-sm text-bold" style={{ width: "200px" }}>
              <span className="text-sm text-bold text-green">Fuel Station Owner </span>
              Portal
            </p>
          </a>
          {/* <a href="/">
          <img src={logo}></img>
        </a> */}
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navItems}</ul>
        </div>
        <div className="navbar-end">        
        {
          userName? (
            <Profile user={{ name: userName, photoURL: defaultPhotoURL }} />
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="flex items-center gap-2 px-6 text-white rounded-full btn bg-green"
            >
              <FaRegUser />
              Login
            </button>
          )
         }

         
          <Modal />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
