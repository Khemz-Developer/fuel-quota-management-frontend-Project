import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      // Post the form data to the backend (assuming your backend runs on localhost:8080 and has an endpoint /register)
      const response = await axios.post('http://localhost:8080/register', data);
      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('There was an error registering the user:', error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto mt-20 bg-white shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-6">
        <h3 className="text-lg font-bold text-center">Signup</h3>

        {/* Full Name */}
        <div className="mt-4 form-control">
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
        <div className="mt-4 form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="pt-2 text-sm text-red">Email is required</span>}
        </div>

        {/* Username */}
        <div className="mt-4 form-control">
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

        {/* Identity Card Number */}
        <div className="mt-4 form-control">
          <label className="label">
            <span className="label-text">Identity Card Number</span>
          </label>
          <input
            type="text"
            placeholder="Identity Card Number"
            className="w-full input input-bordered"
            {...register("identityCardNumber", { required: true })}
          />
          {errors.identityCardNumber && <span className="pt-2 text-sm text-red">Identity Card Number is required</span>}
        </div>

        {/* Password */}
        <div className="mt-4 form-control">
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

        {/* Signup Button */}
        <div className="mt-6 form-control">
          <input type="submit" value="Signup" className="w-full text-white btn bg-green" />
        </div>
        <Link to="/" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
      </form>
    </div>
  );
};

export default Signup;
