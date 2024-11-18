import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
