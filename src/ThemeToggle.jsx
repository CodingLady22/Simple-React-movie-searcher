import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};


export default ThemeToggle;
