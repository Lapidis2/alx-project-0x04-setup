import { themecontextType } from "@/interface"
import React,{useContext,useEffect,useState,createContext,ReactNode} from"react"

const themeContext=createContext<themecontextType|undefined>(undefined)


export const ThemeProvider=({children}:{children:React.ReactNode})=>{
	const [theme, setTheme] = useState<"light" | "dark">(()=> {
		if (typeof window !== "undefined") {
		  return (localStorage.getItem("theme") as "light" | "dark" | null) || "light";
		}
		return "light";
	  });
	
	  useEffect(() => {
		const root = window.document.documentElement;
	
		if (theme === "dark") {
		  root.classList.add("dark");
		  localStorage.setItem("theme", "dark");
		} else {
		  root.classList.remove("dark");
		  localStorage.setItem("theme", "light");
		}
	  }, [theme]);
	
	  const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	  };
	
	  return (
		<themeContext.Provider value={{ theme, toggleTheme }}>
		  {children}
		</themeContext.Provider>
	  );
	

}
export const useTheme = () => {
	const context = useContext(themeContext);
	if (!context) throw new Error("useTheme must be used within ThemeProvider");
	return context;
  };

