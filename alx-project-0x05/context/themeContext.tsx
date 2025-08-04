import React, {
	useContext,
	useState,
	createContext,
	useEffect,
	ReactNode,
  } from "react";
  
  type Theme = "light" | "dark";
  
  type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
  };
  
  const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
  
  export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>("light");
	const [mounted, setMounted] = useState(false);
  
	useEffect(() => {
	  // This will run only on the client
	  const storedTheme = (localStorage.getItem("theme") as Theme) || "light";
	  setTheme(storedTheme);
	  setMounted(true); // now it is safe to render
	}, []);
  
	useEffect(() => {
	  if (!mounted) return;
	  const root = window.document.documentElement;
  
	  if (theme === "dark") {
		root.classList.add("dark");
		localStorage.setItem("theme", "dark");
	  } else {
		root.classList.remove("dark");
		localStorage.setItem("theme", "light");
	  }
	}, [theme, mounted]);
  
	const toggleTheme = () => {
	  setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};
  
	if (!mounted) return null; // Avoid hydration mismatch
  
	return (
	  <ThemeContext.Provider value={{ theme, toggleTheme }}>
		{children}
	  </ThemeContext.Provider>
	);
  };
  
  export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within ThemeProvider");
	return context;
  };
  