
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const Modal = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage(""); // Clear previous error message

    try {
      const response = await axios.post("http://localhost:8081/api/auth/login", {
        username: userName, // Use email as username for this case
        password: password,
      });
      // If successful, show success alert
      Swal.fire("Login successful!", "", "success");
      // Optionally redirect or perform other actions
      console.log('Login response:', response.data);
    } catch (error) {
      // Handle errors and show an alert
      const errorMsg = error.response?.data?.message || "Login failed. Please try again.";
      setErrorMessage(errorMsg); // Set error message state
      Swal.fire("Error!", errorMsg, "error"); // Show error alert
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="flex flex-col justify-center mt-0 modal-action">
          <form className="card-body" onSubmit={onSubmit}>
            <h3 className="text-lg font-bold">Please Login!</h3>
            <div className="form-control">
              {/* UserName */}
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="userName"
                placeholder="userName"
                className="input input-bordered"
                required
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Forgot password */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Error message */}
            {errorMessage && (
              <p className="text-xs italic text-red">{errorMessage}</p>
            )}

            {/* Login button */}
            <div className="mt-6 form-control">
              <input
                type="submit"
                value="Login"
                className="text-white btn bg-green"
              />
            </div>

            <p className="my-2 text-center">
              Don't have an account?{" "}
              <Link className="ml-1 underline text-red" to="/signup">
                Signup Now
              </Link>
            </p>
            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            >
              ✕
            </button>
          </form>

          {/* Social sign in */}
          <div className="mb-5 space-x-3 text-center">
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
