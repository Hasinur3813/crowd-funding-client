import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const PublicRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (currentUser) {
        navigate("/");
      } else {
        setShouldRender(true);
      }
    }
  }, [loading, currentUser, navigate]);

  if (loading || !shouldRender) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return children;
};

export default PublicRoute;
