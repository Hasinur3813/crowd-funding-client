import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const { login, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      await signInWithGoogle();
      state?.path ? navigate(state.path) : navigate("/");
    } catch (e) {
      setError(e.code);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setError(null);
      setLoading(true);
      await login(email, password);
      setLoading(false);
      state?.path ? navigate(state.path) : navigate("/");
    } catch (e) {
      setLoading(false);
      Swal.fire("Error!", `${e.code}`, "error");
      setError(e.code);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fade duration={1000} delay={200}>
      <div className="hero min-h-screen py-10">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <div className="text-center lg:text-left lg:mr-10">
            <h1 className="text-4xl font-bold text-primaryColor">
              Welcome Back!
            </h1>
            <p className="py-6 text-textColor dark:text-white">
              We&apos;re glad to see you again! Log in to access your account,
              manage your campaigns, and continue making an impact with your
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
                <button
                  disabled={loading}
                  className="btn text-lg bg-primaryColor hover:bg-secondaryColor text-white w-full"
                >
                  {loading ? "Loggin in..." : "Log In"}
                </button>
              </div>
              <div className="form-control mt-4">
                <p className="text-center text-sm text-textColor">
                  Don&apos;t have an account?{" "}
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
    </Fade>
  );
};

export default Login;
