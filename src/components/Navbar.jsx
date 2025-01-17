import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import logo from "/logo.png";

const Navbar = () => {
  const { user, setUser, signoutUser } = useContext(AuthContext);

  const handleLogoutUser = () => {
    signoutUser().then(() => {
      toast.success(`Bye ${user.displayName}`);
      setUser(null);
    });
  };

  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/donation-campaigns"}>Donation Campaigns</NavLink>
      </li>
      <li>
        <NavLink to={"/how-to-help"}>How to Help</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-sky-200 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-16 h-16 p-1 rounded-full" src={logo} alt="logo" />
        </div>
        {/* <h1 className="font-bold md:text-xl lg:text-2xl">Winter Donation</h1> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user === null ? (
          <Link to={"/login"} className="btn btn-outline">
            Log in
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <img
              title={user?.displayName}
              className="w-10 rounded-full"
              src={`${user.photoURL}`}
              alt="user"
            />
            <button className="btn btn-outline" onClick={handleLogoutUser}>
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
