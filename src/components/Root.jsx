import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
