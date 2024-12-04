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
