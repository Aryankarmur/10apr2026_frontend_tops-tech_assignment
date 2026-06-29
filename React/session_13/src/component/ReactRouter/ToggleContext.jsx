import { createContext, useEffect, useState } from "react";

export const ToggleContext = createContext();

export const ToggleContextProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

  const toggleTheme = (theme) => {
    setTheme(theme);
  };


  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty("--bg-color", "#121212");
      root.style.setProperty("--text-color", "#ffffff");
    } else {
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--text-color", "#000000");
    }
  }, [theme]);


return(
    <ToggleContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ToggleContext.Provider>
)


};

