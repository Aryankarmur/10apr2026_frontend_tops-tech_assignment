import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  let userName = "Aryan";
  let loginStatus = true;
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.style.setProperty("--bg-color", "#121212");
      root.style.setProperty("--text-color", "#ffffff");
    } else {
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--text-color", "#000000");
    }
  }, [darkMode]);

  return (
    <UserContext.Provider
      value={{ userName, loginStatus, darkMode, toggleTheme }}
    >
      {children}
    </UserContext.Provider>
  );
};
