import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [view, setView] = useState(false);
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
        <div>
          <span className="label-text">Password</span>
          <input
            type={view ? "text" : "password"}
            placeholder="Enter your password"
            className="input input-bordered input-primary w-full"
          />
        </div>

        <button className="btn btn-success w-full text-white">Log in</button>
      </form>
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
