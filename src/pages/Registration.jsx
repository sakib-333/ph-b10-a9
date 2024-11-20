import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const checkPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

const Registration = () => {
  const [view, setView] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { signinWithGoogle, setUser, createNewUser, updateUserProfile } =
    useContext(AuthContext);

  useEffect(() => {
    document.title = "Registration";
  }, []);

  const handleViewPassword = () => {
    setView((c) => !c);
  };

  const handleSigninWithGoogle = () => {
    signinWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Welcome ${result.user?.displayName}`);
        navigate("/");
      })
      .catch((err) => toast.error(`${err}`));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (checkPassword.test(password)) {
      setErrorMsg("");
      createNewUser(email, password)
        .then(() => {
          updateUserProfile({ displayName, photoURL, email, password }).then(
            () => {
              toast.success(`Welcome ${displayName}`);
              navigate("/");
            }
          );
        })
        .catch((err) => toast.error(`${err}`));
    } else {
      setErrorMsg(
        "Must have an uppercase letter, a lowercase letter and length at least 6."
      );
    }
  };

  return (
    <div className="px-2 max-w-screen-sm border mx-auto my-4 p-4 rounded-xl bg-gray-200">
      <h1 className="font-bold text-center md:text-xl lg:text-2xl">
        Registration
      </h1>
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
      <div className="px-4">
        <button
          className="btn btn-outline w-full"
          onClick={handleSigninWithGoogle}
        >
          <FaGoogle /> <span>Continue with Google</span>
        </button>
      </div>
      <div className="text-center my-4">
        Already have an account?{" "}
        <Link to={"/login"} className="text-red-500 hover:text-red-300">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Registration;
