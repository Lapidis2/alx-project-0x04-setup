import { ReactNode } from 'react';
export interface LayoutProps {
	children: ReactNode;
  }
 export  interface ButtonProps {
	buttonLabel: string
	buttonSize?: string
	buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
	action?: () => void
  }
 export  interface PageRouteProps {
	pageRoute: string;
  }
   export type authContextType = {
	isLoggedIn: boolean;
	login: (email: string) => void;
	logout: () => void;
	user: { email: string } | null;
  };


  export type themecontextType={
	theme: "light" | "dark"
	toggleTheme:()=>void;
  }