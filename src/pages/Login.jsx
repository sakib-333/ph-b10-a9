import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser, signinWithGoogle } = useContext(AuthContext);
  const [view, setView] = useState(false);
  const navigate = useNavigate();

  const handleViewPassword = () => {
    setView((c) => !c);
  };

  const handleSigninWithGoogle = () => {
    signinWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Welcome ${result.user.displayName}`);
        navigate("/");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div className="px-2 max-w-screen-sm border mx-auto mt-4 p-4 rounded-xl bg-gray-200">
      <h1 className="font-bold text-center md:text-xl lg:text-2xl">Log in</h1>
      <form className="p-4 space-y-4">
        <div>
          <span className="label-text">Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="relative">
          <span className="label-text">Password</span>
          <input
            type={view ? "text" : "password"}
            placeholder="Enter your password"
            className="input input-bordered input-primary w-full"
          />
          <button
            className="absolute right-4 top-10"
            type="button"
            onClick={handleViewPassword}
          >
            {view ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <button type="submit" className="btn btn-success w-full text-white">
          Log in
        </button>
      </form>
      <div className="p-4">
        <button
          className="btn btn-outline w-full"
          onClick={handleSigninWithGoogle}
        >
          <FaGoogle /> <span>Continue with Google</span>
        </button>
      </div>
      <div className="text-center">
        Don't have an account?{" "}
        <Link to={"/register"} className="text-red-500 hover:text-red-300">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
