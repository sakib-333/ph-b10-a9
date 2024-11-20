import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DonationCampaigns from "../pages/DonationCampaigns";
import HowToHelp from "../pages/HowToHelp";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import Home from "../pages/Home";
import DonationCampaignDetails from "../pages/DonationCampaignDetails";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";
import Blogs from "../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/donation-campaigns",
        element: <DonationCampaigns />,
        loader: () => fetch("/DonationCampaigns.json"),
      },
      {
        path: "/donation-campaign/:id",
        element: (
          <PrivateRoute>
            <DonationCampaignDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/DonationCampaigns.json"),
      },
      {
        path: "/how-to-help",
        element: <HowToHelp />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
