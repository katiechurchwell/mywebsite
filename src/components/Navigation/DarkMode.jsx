import "../../assets/styles/dark-mode.css";

import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme);

  // TODO: animate icon

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (localTheme === undefined) {
      setTheme("light");
    }
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <i
        id="theme-toggle"
        className={
          theme === "dark"
            ? "bi bi-cloud-moon spin-animated"
            : "bi bi-sun spin-animated"
        }
        onClick={toggleTheme}
        aria-label="Dark mode toggle"
      />
    </>
  );
};

export default DarkMode;