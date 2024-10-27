
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import Modal from "./SignInModal";
import Swal from "sweetalert2";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8081/api/auth/register/station-owner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle successful registration, e.g., redirecting the user
        console.log("Registration successful!");
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You can now log in with your credentials.",
          confirmButtonText: "OK"
        });
      } else {
        console.error("Registration failed!");
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: "Please check your details and try again.",
          confirmButtonText: "Try Again"
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "An error occurred",
        text: "Something went wrong. Please try again later.",
        confirmButtonText: "Close"
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto mt-20 bg-white shadow">
      <div className="flex flex-col justify-center w-full mt-0 modal-action">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full card-body"
          method="dialog"
        >
          <h3 className="text-lg font-bold">Fuel Station Registration</h3>

          <div className="flex flex-row space-x-4 form-control">
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="fullName"
                className="w-full input input-bordered"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">Full Name is required</span>
              )}
            </div>
          </div>

          <div className="flex flex-row mt-4 space-x-4 form-control">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Station Id</span>
              </label>
              <input
                type="text"
                placeholder="stationId"
                className="w-full input input-bordered"
                {...register("stationId", { required: true })}
              />
              {errors.stationId && (
                <span className="text-red-500">Station ID is required</span>
              )}
            </div>

            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="w-full input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
          </div>

          <div className="flex flex-row mt-4 space-x-4 form-control">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="w-full input input-bordered"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-red-500">Username is required</span>
              )}
            </div>

            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="phoneNumber"
                className="w-full input input-bordered"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <span className="text-red-500">Phone Number is required</span>
              )}
            </div>
          </div>

          <div className="mt-4 form-control">
            <label className="label">
              <span className="label-text">Id Card Number</span>
            </label>
            <input
              type="text"
              placeholder="idCardNumber"
              className="w-full input input-bordered"
              {...register("idCardNumber", { required: true })}
            />
            {errors.idCardNumber && (
              <span className="text-red-500">ID Card Number is required</span>
            )}
          </div>

          <div className="flex flex-row mt-4 space-x-4 form-control">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-full input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <span className="text-red-500">
                  Password must be at least 6 characters
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirmPassword"
                className="w-full input input-bordered"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <span className="text-red-500">Please confirm your password</span>
              )}
            </div>
          </div>

          <div className="mt-6 form-control">
            <input
              type="submit"
              value="Signup"
              className="w-full text-white btn bg-green"
            />
          </div>

          <p className="my-2 text-center">
            Have an account?{" "}
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="ml-1 underline text-red"
            >
              Login
            </button>
           
          </p>
          <Modal />
          <Link
            to="/"
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
          >
            ✕
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
