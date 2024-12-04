import { NavLink } from "react-router-dom";

const Navbar = () => {
  const currentUser = false;

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm border border-borderColor bg-background dropdown-content bg-cardBg text-textPrimary rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className="hover:text-primary font-semibold text-base text-textColor"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-campaigns"
                className="hover:text-primary font-semibold text-base text-textColor"
              >
                All Campaign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-campaign"
                className="hover:text-primary font-semibold text-base text-textColor"
              >
                Add New Campaign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-campaigns"
                className="hover:text-primary font-semibold text-base text-textColor"
              >
                My Campaign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-donations"
                className="hover:text-primary font-semibold text-lg text-textColor"
              >
                My Donation
              </NavLink>
            </li>
          </ul>
        </div>
        <a href="/" className="font-bold text-secondaryColor text-2xl">
          Crowd Funding
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <li>
            <NavLink
              to="/"
              className="hover:text-primary font-semibold text-base text-textColor"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-campaigns"
              className="hover:text-primary font-semibold text-base text-textColor"
            >
              All Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-campaign"
              className="hover:text-primary font-semibold text-base text-textColor"
            >
              Add New Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-campaigns"
              className="hover:text-primary font-semibold text-base text-textColor"
            >
              My Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-donations"
              className="hover:text-primary font-semibold text-base text-textColor"
            >
              My Donation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!currentUser ? (
          <div className="flex gap-2">
            <NavLink
              to="/signup"
              className="btn  text-white bg-primaryColor hover:bg-secondaryColor rounded-lg px-6 py-2 transition duration-300 ease-in-out text-lg"
            >
              Register
            </NavLink>

            <NavLink
              to="/login"
              className="btn text-lg outline outline-1 outline-primaryColor text-secondaryColor rounded-lg px-6 py-2 transition duration-300 ease-in-out"
            >
              Login
            </NavLink>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-cardBg text-textPrimary rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <p className="text-primary">Hasinur Rahman</p>
              </li>
              <li>
                <a className="hover:text-primary">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
