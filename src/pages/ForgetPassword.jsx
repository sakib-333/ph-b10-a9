import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { inputEmail, forgetPassword } = useContext(AuthContext);

  const handleForgetPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    forgetPassword(email)
      .then(() => {
        window.location.href = "https://mail.google.com/mail/u/0/";
      })
      .catch(() => toast.error("Something went wrong!"));
  };

  return (
    <div className="max-w-screen-sm border mx-auto my-4 p-8 rounded-xl bg-gray-200">
      <h1 className="text-xl font-bold text-center">Reset Password</h1>
      <div className="divider"></div>
      <form className="p-4 space-y-4" onSubmit={handleForgetPassword}>
        <div>
          <span className="label-text">Email</span>
          <input
            type="email"
            defaultValue={inputEmail}
            required
            name="email"
            placeholder="Enter your email"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <button className="btn btn-success w-full text-white">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
