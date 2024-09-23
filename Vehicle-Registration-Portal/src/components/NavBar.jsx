import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "./SignInModal";

function NavBar() {
  const [isSticky, setSticky] = useState(false);

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

  const navItems = (
    <>
      <li>
        <a className="text-black" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="text-black" href="/register">
          Register Vehicle
        </a>
      </li>
      <li>
        <a className="text-black" href="/dashboard">
          Dashboard
        </a>
      </li>
      <li>
        <a className="text-black" href="/help">
          Help & Support
        </a>
      </li>
    </>
  );

  return (
    <header
      className={`container mx-auto max-w-screen-2xl ${
        isSticky ? "sticky top-0 bg-white z-10 shadow" : ""
      }`}
    >
      <div className="navbar xl:px-24">
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
            <p className="text-bold" style={{ width: "200px" }}>
              <span className="text-md text-green">Vehicle Registration</span> Portal
            </p>
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="flex items-center gap-2 px-6 text-white rounded-full btn bg-green"
          >
            <FaRegUser />
            Login / Register
          </button>
          <Modal />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
