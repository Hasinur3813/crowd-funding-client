import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AuthProvider from "./contexts/AuthProvider";
import AddCampaign from "./Pages/AddCampaign";
import AllCampaigns from "./Pages/AllCampaigns";
import CampaignDetails from "./Pages/CampaignDetails";
import MyCampaign from "./Pages/MyCampaign";
import UpdateCampaign from "./Pages/UpdateCampaign";
import MyDonations from "./Pages/MyDonations";
import PrivteRoute from "./components/PrivteRoute";
import PublicRoute from "./components/PublicRoute";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () =>
          fetch("https://crowdcube-server-nu.vercel.app/running-campaigns"),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/add-campaign",
        element: (
          <PrivteRoute>
            <AddCampaign />
          </PrivteRoute>
        ),
      },
      {
        path: "/all-campaigns",
        element: <AllCampaigns />,
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivteRoute>
            <CampaignDetails />
          </PrivteRoute>
        ),
      },
      {
        path: "/my-campaigns",
        element: (
          <PrivteRoute>
            <MyCampaign />
          </PrivteRoute>
        ),
      },
      {
        path: "/update-campaign/:id",
        element: (
          <PrivteRoute>
            <UpdateCampaign />
          </PrivteRoute>
        ),
      },
      {
        path: "/my-donations",
        element: (
          <PrivteRoute>
            <MyDonations />
          </PrivteRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
