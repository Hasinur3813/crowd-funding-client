import { useState } from "react";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");

  const handleGoogleSignIn = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className="hero min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <div className="text-center lg:text-left lg:mr-10">
          <h1 className="text-4xl font-bold text-primaryColor">
            Welcome Back!
          </h1>
          <p className="py-6 text-textColor dark:text-white">
            We're glad to see you again! Log in to access your account, manage
            your campaigns, and continue making an impact with your
            contributions.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-md shadow-lg">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            {error && (
              <p className="text-error text-sm mt-2">
                <strong>Error:</strong> {error}
              </p>
            )}
            <div className="form-control mt-6">
              <button className="btn text-lg bg-primaryColor hover:bg-secondaryColor text-white w-full">
                Login
              </button>
            </div>
            <div className="form-control mt-4">
              <p className="text-center text-sm text-textColor">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primaryColor link link-hover"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
          <div className="divider !mt-0">OR</div>
          <div className="form-control mt-1 px-4 pb-6">
            <button
              className="btn btn-outline text-lg text-primaryColor w-full"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
