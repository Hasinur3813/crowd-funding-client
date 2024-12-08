import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
const NavbarStart = () => {
  return (
    <div className="navbar-start !w-11/12 sm:w-1/2">
      <div
        className="dropdown"
        data-tooltip-id="menu"
        data-tooltip-content="Menu"
        data-tooltip-place="top"
      >
        <Tooltip id="menu" className="z-10" />
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost dark:text-white xl:hidden"
        >
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
              className="hover:text-primary font-semibold text-base text-textColor"
            >
              My Donation
            </NavLink>
          </li>
        </ul>
      </div>
      <Link
        to="/"
        className="font-bold text-secondaryColor text-xl sm:text-2xl"
      >
        CROWDCUBE
      </Link>
    </div>
  );
};

export default NavbarStart;
