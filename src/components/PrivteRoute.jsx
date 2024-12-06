import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useEffect } from "react";
import Loader from "./Loader";

const PrivteRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(currentUser);
  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/login", { state: pathname });
    }
  }, [loading, currentUser, navigate, pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return children;
};

export default PrivteRoute;
