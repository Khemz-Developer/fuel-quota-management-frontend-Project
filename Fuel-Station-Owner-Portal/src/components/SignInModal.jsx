import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "../providers/AuthProvider";

const Modal = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();
  const { saveUser } = useAuth(); // Using the saveUser function from AuthProvider

  // Function to handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8081/api/auth/login",
        {
          username: userName,
          password: password,
        }
      );

      // Save user and token to localStorage
      const { jwtToken } = response.data;

      console.log("jwtToken response:", jwtToken);
      console.log("Login response:", response.data);

      // Call saveUser to store the username and token
      saveUser(userName, jwtToken); // Pass the username and token

      // Set login success state
      setLoginSuccess(true);

      // Close the modal
      document.getElementById("my_modal_5").close();
      Swal.fire("Login successful!", "", "success").then(() => {
        navigate("/dashboard");
      });
    } catch (error) {
      // Handle errors and show an alert
      const errorMsg =
        error.response?.data?.message || "Login failed. Please try again.";
      setErrorMessage(errorMsg); // Set error message state
      console.error("Login failed:", error); // Log error to console
    }
  };

  // Function to handle modal close
  const handleClose = () => {
    document.getElementById("my_modal_5").close();
    if (loginSuccess) {
      Swal.fire("Login successful!", "", "success").then(() => {
        navigate("/dashboard");
      });
      setLoginSuccess(false); // Reset login success state
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className=" modal-box">
        <div className="flex flex-col justify-center mt-0 modal-action">
          <form className="card-body" onSubmit={onSubmit}>
            <h3 className="text-lg font-bold">Please Login!</h3>
            <div className="form-control">
              {/* mail */}
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                required
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
            </div>

            {/* password */}
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

              {/* forget password */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error */}
            {errorMessage ? (
              <p className="text-xs italic text-red">{errorMessage}</p>
            ) : (
              ""
            )}

            {/* login btn */}
            <div className="mt-6 form-control">
              <input
                type="submit"
                value="Login"
                className="text-white btn bg-green"
              />
            </div>

            <p className="my-2 text-center">
              Donot have an account?{" "}
              <Link className="ml-1 underline text-red" to="/signup">
                Signup Now
              </Link>
            </p>
            <button
              htmlFor="my_modal_5"
              onClick={handleClose}
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            >
              ✕
            </button>
          </form>

          {/* social sign in */}
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
