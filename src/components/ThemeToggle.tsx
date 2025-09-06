import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button
        className="
          transition-all duration-300 p-2 rounded-full border-2 border-white bg-card/70 text-white shadow-md 
          hover:scale-110 hover:border-yellow-300 hover:shadow-[0_0_24px_2px_rgba(254,247,205,0.6)] hover:bg-yellow-200/15
        "
        aria-label="Theme toggle"
      >
        <Sun size={20} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        transition-all duration-300 p-2 rounded-full border-2 border-white bg-card/70 text-white shadow-md 
        hover:scale-110 hover:border-yellow-300 hover:shadow-[0_0_24px_2px_rgba(254,247,205,0.6)] hover:bg-yellow-200/15
      "
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
