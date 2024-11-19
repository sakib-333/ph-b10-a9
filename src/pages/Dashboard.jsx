import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white border-2 mt-4 rounded-lg w-full max-w-md p-6">
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700">
            Welcome, <span className="text-blue-500">{user?.displayName}</span>!
          </h1>
        </div>

        {/* Profile Section */}
        <div className="mt-6 flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt="Profile Photo"
            className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-md"
          />
          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            Display Name:{" "}
            <span className="text-blue-500">{user?.displayName}</span>
          </h2>
          <p className="text-gray-600">
            Email: <span className="text-blue-500">{user?.email}</span>
          </p>
        </div>

        {/* Update Button */}
        <div className="mt-6 text-center">
          <Link
            to={"/update-profile"}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
