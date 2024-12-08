import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useEffect, useState } from "react";

const NavbarCenter = () => {
  const { currentUser } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [currentUser]);

  return (
    <div className="navbar-center hidden xl:flex">
      <ul className="menu menu-horizontal px-1 space-x-6">
        <li>
          <NavLink
            to="/"
            className="hover:text-primary  font-semibold text-base text-textColor dark:text-white"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all-campaigns"
            className="hover:text-primary font-semibold text-base text-textColor dark:text-white"
          >
            All Campaign
          </NavLink>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <NavLink
                to="/add-campaign"
                className="hover:text-primary font-semibold text-base text-textColor dark:text-white"
              >
                Add New Campaign
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/my-campaigns"
                className="hover:text-primary font-semibold text-base text-textColor dark:text-white"
              >
                My Campaign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-donations"
                className="hover:text-primary font-semibold text-base text-textColor dark:text-white"
              >
                My Donation
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavbarCenter;
