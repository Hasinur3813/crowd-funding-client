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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("http://localhost:4000/home-campaigns"),
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add-campaign",
        element: <AddCampaign />,
      },
      {
        path: "/all-campaigns",
        element: <AllCampaigns />,
      },
      {
        path: "/campaign/:id",
        element: <CampaignDetails />,
      },
      {
        path: "/my-campaigns",
        element: <MyCampaign />,
      },
      {
        path: "/update-campaign/:id",
        element: <UpdateCampaign />,
      },
      {
        path: "/my-donations",
        element: <MyDonations />,
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
