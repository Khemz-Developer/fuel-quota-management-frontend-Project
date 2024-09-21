import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from "./SignInModal";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic
  };

  // login with google
  const handleRegister = () => {
    // Google login logic here
  };

  return (
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto mt-20 bg-white shadow">
      <div className="flex flex-col justify-center w-full mt-0 modal-action">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full card-body" method="dialog">
          <h3 className="text-lg font-bold">Fuel Station Registration</h3>

          {/* Owner's Name & Station Name */}
          <div className="flex flex-row space-x-4 form-control">
            {/* Owner's Name */}
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Owner's Name</span>
              </label>
              <input
                type="text"
                placeholder="Owner's name"
                className="w-full input input-bordered"
                {...register("ownerName", { required: true })}
              />
              {errors.ownerName && <span className="text-red-500">Owner's Name is required</span>}
            </div>

            {/* Station Name */}
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Fuel Station Name</span>
              </label>
              <input
                type="text"
                placeholder="Station name"
                className="w-full input input-bordered"
                {...register("stationName", { required: true })}
              />
              {errors.stationName && <span className="text-red-500">Station Name is required</span>}
            </div>
          </div>

          {/* Station Registration Number & Location */}
          <div className="flex flex-row mt-4 space-x-4 form-control">
            {/* Station Registration Number */}
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Station Registration Number</span>
              </label>
              <input
                type="text"
                placeholder="Registration number"
                className="w-full input input-bordered"
                {...register("registrationNumber", { required: true })}
              />
              {errors.registrationNumber && <span className="text-red-500">Registration Number is required</span>}
            </div>

            {/* Station Location */}
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Station Location</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="w-full input input-bordered"
                {...register("stationLocation", { required: true })}
              />
              {errors.stationLocation && <span className="text-red-500">Station Location is required</span>}
            </div>
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
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>

          {/* Password & Confirm Password */}
          <div className="flex flex-row mt-4 space-x-4 form-control">
            {/* Password */}
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && <span className="text-red-500">Password must be at least 6 characters</span>}
            </div>

            {/* Confirm Password */}
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && <span className="text-red-500">Please confirm your password</span>}
            </div>
          </div>

          {/* Signup Button */}
          <div className="mt-6 form-control">
            <input type="submit" value="Signup" className="w-full text-white btn bg-green" />
          </div>

          <p className="my-2 text-center">
            Have an account?{" "}
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="ml-1 underline text-red"
            >
              Login
            </button>
            <Modal />
          </p>

          <Link to="/" className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
        </form>

        {/* Social sign-in buttons */}
        <div className="mb-5 space-x-3 text-center">
          <button onClick={handleRegister} className="btn btn-circle hover:bg-green hover:text-white">
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
  );
};

export default Signup;
