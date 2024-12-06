import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthProvider";
import { Fade } from "react-awesome-reveal";

const Register = () => {
  const { signup, updateUser, setLoading, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Password does not match!");
      return;
    }

    // Password Validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      password.length < 6
    ) {
      setError(
        "Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    setError("");

    const { user } = await signup(email, password);
    await updateUser(name, photoURL, email);
    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        photoURL,
      }),
    });
    const result = await res.json();
    console.log(user);
    console.log(result);
    setLoading(false);
    Swal.fire("Success!", "Registration successful.", "success");
    navigate("/");
  };

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      await signInWithGoogle();
      navigate("/");
    } catch (e) {
      setError(e.code);
    }
  };

  return (
    <Fade duration={1000} delay={200}>
      <div className="hero min-h-screen py-10">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <div className="text-center lg:text-left lg:mr-10">
            <h1 className="text-4xl font-bold text-primaryColor">
              Register Now!
            </h1>
            <p className="py-6 dark:text-white text-textColor">
              Join us and make a difference today. Create your account to
              explore and contribute to our crowdfunding campaigns.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-md shadow-lg">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  // type="url"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
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
                <button className="btn bg-primaryColor hover:bg-secondaryColor text-lg text-white w-full">
                  Register
                </button>
              </div>
            </form>
            <div className="divider !mt-0">OR</div>
            <div className="form-control mt-0 px-4 pb-6">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline text-primaryColor text-lg w-full"
              >
                Sign in with Google
              </button>
            </div>
            <div className="form-control mt-0 mb-6">
              <p className="text-center text-sm text-textColor">
                Already have an account?{" "}
                <Link to="/login" className="text-primaryColor link link-hover">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Register;
