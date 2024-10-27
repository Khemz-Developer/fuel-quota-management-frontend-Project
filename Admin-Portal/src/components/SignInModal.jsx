import axios from "axios";
import { useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
const Modal = () => {
  const { saveUser } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState("");
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post('http://localhost:8080/api/auth/admin/login', {
        username: formData.username,
        password: formData.password,
      });
    
      const { jwtToken } = response.data;
      saveUser(formData.username, jwtToken);
      document.getElementById("my_modal_5").close();
    } catch (error) {
      console.error('Error during login:', error); // Log the error for debugging
    
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Login failed. Please check your credentials.');
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };
  
  // google signin
  const handleLogin = () => {
    
  };
  
   // Facebook sign-in
   const handleFacebookLogin = () => {
    
  };
  
  const handleGithubLogin = () => {
    
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className=" modal-box">
        <div className="flex flex-col justify-center mt-0 modal-action">
          <form
            onSubmit={handleSubmit}
            className="card-body"
            method="dialog"
          >
            <h3 className="text-lg font-bold">Please Login!</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="username" 
                placeholder="username"
                className="input input-bordered"
                required
                value={formData.username} 
                onChange={handleChange}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password" 
                placeholder="password"
                className="input input-bordered"
                required
                value={formData.password} 
                onChange={handleChange} 
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
              <Link className="ml-1 underline text-red">
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

          {/* social sign in */}
          <div className="mb-5 space-x-3 text-center">
            <button
              className="btn btn-circle hover:bg-green hover:text-white"
              onClick={handleLogin}
            >
              <FaGoogle />
            </button>

            <button
              className="btn btn-circle hover:bg-green hover:text-white"
              onClick={handleFacebookLogin}
            >
              <FaFacebookF />
            </button>

            <button className="btn btn-circle hover:bg-green hover:text-white"
            onClick={handleGithubLogin}>
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
