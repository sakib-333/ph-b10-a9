import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;

    updateUserProfile({ displayName, photoURL })
      .then(() => {
        toast.success("Profile updated.");
        navigate("/dashboard");
      })
      .catch(() => toast.error("Something went wrong!\n Please try anain."));
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="bg-white border-2 mt-4 rounded-lg w-full max-w-md p-6"
        onSubmit={handleUpdateProfile}
      >
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">Update profile</h1>
        </div>
        <div className="divider"></div>

        {/* Profile Section */}
        <div className="mt-6 flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt="Profile Photo"
            className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-md"
          />
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Your name</span>
            </div>
            <input
              type="text"
              required
              name="displayName"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold">Your photo URL</span>
            </div>
            <input
              type="text"
              required
              name="photoURL"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        {/* Update Button */}
        <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white px-4 w-full py-2 rounded hover:bg-blue-600 transition duration-200">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
