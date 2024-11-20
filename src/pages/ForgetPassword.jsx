import React, { useContext, useEffect } from "react";

const ForgetPassword = () => {
  const handleForgetPassword = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(emailRef.current);
  }, []);

  return (
    <div className="max-w-screen-sm border mx-auto my-4 p-8 rounded-xl bg-gray-200">
      <h1 className="text-xl font-bold text-center">Reset Password</h1>
      <div className="divider"></div>
      <form className="p-4 space-y-4" onSubmit={handleForgetPassword}>
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
        <a href="#" className="btn btn-success w-full text-white">
          Reset Password
        </a>
      </form>
    </div>
  );
};

export default ForgetPassword;
