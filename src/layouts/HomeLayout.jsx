import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <Navbar />
        <div className="min-h-screen">
          {loading ? (
            <h1 className="md:text-xl lg:text-2xl font-bold text-center">
              Loading...
            </h1>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
