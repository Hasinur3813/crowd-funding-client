import { NavLink } from "react-router-dom";

const NavbarEnd = () => {
  return (
    <div className="flex gap-2">
      <NavLink
        to="/signup"
        className="btn text-white bg-primaryColor hover:bg-secondaryColor rounded-lg px-6 py-2 transition duration-300 hidden sm:block ease-in-out text-lg"
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
  );
};

export default NavbarEnd;
