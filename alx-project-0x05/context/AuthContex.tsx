import { authContextType } from "@/interface";
import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  Children,
} from "react";


const authContex = createContext<authContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const login = (email: string) => {
    if (!email) return;
    setIsLoggedIn(true), setUser({ email });
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };
  return (
    <authContex.Provider value={{ isLoggedIn, logout, login, user }}>
      {children}
    </authContex.Provider>
  );
};


export const useAuth=()=>{
	const context=useContext(authContex)
	if(!context) 
		throw new Error("useAuth must be nested in authProvider")
	return context
	
}

