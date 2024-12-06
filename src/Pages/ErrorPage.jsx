import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();
  const errorCode = error?.status || "404";
  const errorMessage =
    error?.statusText || "Oops! The page you're looking for doesn't exist.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-white px-6">
      <div className="text-center max-w-3xl">
        <FaExclamationCircle className="text-8xl text-red-600 mb-6 mx-auto" />
        <h1 className="text-6xl font-bold mb-4">{errorCode}</h1>
        <p className="text-xl font-light mb-8">{errorMessage}</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 text-lg font-medium  bg-primaryColor text-white rounded-lg shadow-md hover:bg-secondaryColor transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
