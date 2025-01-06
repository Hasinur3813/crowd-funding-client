import { useAuth } from "../contexts/AuthProvider";
import { useEffect, useState } from "react";
import Theme from "./Theme";
import NavbarEnd from "./NavbarEnd";
import Profile from "./Profile";
import NavbarCenter from "./NavbarCenter";
import NavbarStart from "./NavbarStart";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [theme, setThem] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (currentUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThem(storedTheme);
      document.documentElement.classList = storedTheme;
    }
  }, [currentUser]);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThem(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList = newTheme;
  };

  return (
    <div className="navbar shadow-md fixed top-0 w-full z-20 bg-white dark:bg-darkMode">
      <NavbarStart isAuthenticated={isAuthenticated} />
      <NavbarCenter isAuthenticated={isAuthenticated} />

      <div className="navbar-end">
        <Theme theme={theme} handleThemeChange={handleThemeChange} />

        {currentUser ? (
          <Profile currentUser={currentUser} handleLogout={handleLogout} />
        ) : (
          <NavbarEnd />
        )}
      </div>
    </div>
  );
};

export default Navbar;
