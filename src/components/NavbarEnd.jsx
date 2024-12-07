import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const NavbarEnd = () => {
  return (
    <div className="flex gap-2">
      <>
        <NavLink
          data-tooltip-id="register"
          data-tooltip-content="Create an account"
          data-tooltip-place="top"
          to="/signup"
          className="btn text-white bg-primaryColor hover:bg-secondaryColor rounded-lg px-6 py-2 transition duration-300 hidden sm:block ease-in-out text-lg"
        >
          Register
        </NavLink>
        <Tooltip id="register" className="z-10" />
      </>

      <>
        <NavLink
          data-tooltip-id="login"
          data-tooltip-content="Login your account"
          data-tooltip-place="left"
          to="/login"
          className="btn text-lg outline outline-1 outline-primaryColor text-secondaryColor rounded-lg px-6 py-2 transition duration-300 ease-in-out"
        >
          Login
        </NavLink>
        <Tooltip id="login" />
      </>
    </div>
  );
};

export default NavbarEnd;
