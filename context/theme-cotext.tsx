"use client";
import React, { useState, useEffect, createContext, useContext } from 'react';
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}

// step:01 --> create instance context;
const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeCotextProviderProps = {
  children: React.ReactNode;
}

// step:02 --> create Provider context and povide it to whole app for state management;
const ThemeCotextProvider = ({
  children
}: ThemeCotextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("Theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("Theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("Theme") as Theme | null;

    if(localTheme) {
      setTheme(localTheme);

      if(localTheme === "dark") {
        document.documentElement.classList.remove("dark");
      }
    } else if (matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const value = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeCotextProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if(context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};