import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const checkPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

const Register = () => {
  const [view, setView] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleViewPassword = () => {
    setView((c) => !c);
  };

  useEffect(() => {
    console.log(errorMsg);
  }, [errorMsg]);

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (checkPassword.test(password)) {
      console.log("Correct");
      setErrorMsg("");
    } else {
      setErrorMsg(
        "Must have an uppercase letter, a lowercase letter and length must be at least 6."
      );
    }
  };

  return (
    <div className="px-2 max-w-screen-sm border mx-auto mt-4 p-4 rounded-xl bg-gray-200">
      <h1 className="font-bold text-center md:text-xl lg:text-2xl">Register</h1>
      <form className="p-4 space-y-4" onSubmit={handleRegister}>
        <div>
          <span className="label-text">Name</span>
          <input
            type="text"
            required
            name="displayName"
            placeholder="Enter your name"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <span className="label-text">Photo URL</span>
          <input
            type="text"
            required
            name="photoURL"
            placeholder="Photo URL"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <span className="label-text">Email</span>
          <input
            type="email"
            required
            name="email"
            placeholder="Enter your email"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="relative">
          <span className="label-text">Password</span>
          <input
            type={view ? "text" : "password"}
            required
            name="password"
            placeholder="Enter your password"
            className="input input-bordered input-primary w-full"
          />
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          <button
            className="absolute right-4 top-10"
            type="button"
            onClick={handleViewPassword}
          >
            {view ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <button className="btn btn-success w-full text-white">Register</button>
      </form>
      <div className="text-center">
        Already have an account?{" "}
        <Link to={"/login"} className="text-red-500 hover:text-red-300">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Register;
