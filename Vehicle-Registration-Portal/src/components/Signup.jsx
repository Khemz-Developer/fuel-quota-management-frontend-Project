import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // Watch the password field
  const password = watch("password");

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      // Post the form data to the backend API
      const response = await axios.post('http://localhost:8081/api/auth/register/vehicle-owner', {
        fullName: data.fullName,
        email: data.email,
        username: data.username,
        password: data.password,
        idCardNumber: data.idCardNumber,
        phoneNumber: data.phoneNumber
      });

      console.log('User registered successfully:', response.data);
      
      navigate('/registration'); // Redirect to the homepage
      
      // Display success alert
      Swal.fire({
        title: 'Success!',
        text: 'User registered successfully!',
        icon: 'success',
        confirmButtonText: 'Okay',
        customClass: {
          popup: 'my-popup' // Custom class for styling if needed
        }
      });
      
    } catch (error) {
      console.error('There was an error registering the user:', error);
      
      
      // Display error alert
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Registration failed. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay',
        customClass: {
          popup: 'my-popup' // Custom class for styling if needed
        }
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto mt-10 bg-white shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-6">
        <h3 className="text-lg font-bold text-center">Signup</h3>

        {/* Full Name */}
        <div className="mt-3 form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full input input-bordered"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span className="pt-2 text-sm text-red">Full Name is required</span>}
        </div>

        {/* Email */}
        <div className="mt-3 form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="w-full input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="pt-2 text-sm text-red">Email is required</span>}
        </div>

        {/* Username */}
        <div className="mt-3 form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            className="w-full input input-bordered"
            {...register("username", { required: true })}
          />
          {errors.username && <span className="pt-2 text-sm text-red">Username is required</span>}
        </div>

        {/* Identity Card Number and Phone Number in one line */}
        <div className="flex justify-between mt-4">
          {/* Identity Card Number */}
          <div className="w-1/2 mr-2 form-control">
            <label className="label">
              <span className="label-text">Identity Card Number</span>
            </label>
            <input
              type="text"
              placeholder="Identity Card Number"
              className="w-full input input-bordered"
              {...register("idCardNumber", { required: true })}
            />
            {errors.idCardNumber && <span className="pt-2 text-sm text-red">Identity Card Number is required</span>}
          </div>

          {/* Phone Number */}
          <div className="w-1/2 ml-2 form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full input input-bordered"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && <span className="pt-2 text-sm text-red">Phone Number is required</span>}
          </div>
        </div>

        {/* Password */}
        <div className="mt-3 form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full input input-bordered"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <span className="pt-2 text-sm text-red">Password must be at least 6 characters</span>}
        </div>

        {/* Confirm Password */}
        <div className="mt-3 form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full input input-bordered"
            {...register("confirmPassword", { required: true,
              validate: (value) => value === password || "The passwords do not match"
            })}
          />
          {errors.confirmPassword && <span className="pt-2 text-sm text-red">Please confirm your password</span>}
        </div>

        {/* Signup Button */}
        <div className="mt-4 form-control">
          <input type="submit" value="Signup" className="w-full text-white btn bg-green" />
        </div>
        <Link to="/" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
      </form>
    </div>
  );
};

export default Signup;
