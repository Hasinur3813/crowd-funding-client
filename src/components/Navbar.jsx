import { useAuth } from "../contexts/AuthProvider";
import { useEffect, useState } from "react";
import Theme from "./Theme";
import NavbarEnd from "./NavbarEnd";
import Profile from "./Profile";
import NavbarCenter from "./NavbarCenter";
import NavbarStart from "./NavbarStart";

const Navbar = () => {
  const { currentUser, loading, logout } = useAuth();
  const [theme, setThem] = useState("light");

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThem(storedTheme);
      document.documentElement.classList = storedTheme;
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThem(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList = newTheme;
  };

  return (
    <div className="navbar shadow-md">
      <NavbarStart />
      <NavbarCenter />

      <div className="navbar-end">
        <Theme theme={theme} handleThemeChange={handleThemeChange} />

        {loading ? (
          <div className="flex items-center justify-center">
            <div className="loading loading-spinner loading-lg text-primaryColor"></div>
          </div>
        ) : currentUser ? (
          <Profile currentUser={currentUser} handleLogout={handleLogout} />
        ) : (
          <NavbarEnd />
        )}
      </div>
    </div>
  );
};

export default Navbar;
