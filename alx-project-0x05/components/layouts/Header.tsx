"use client";

import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";
import { useTheme } from "@/context/themeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const pathname = usePathname();
  const { count } = useCount();

  return (
    <header className="fixed w-full dark:bg-black dark:text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Splash App
        </Link>

        {/* Button Group */}
        <div className="flex gap-4">
          {!["/counter-app"].includes(pathname) ? (
            <>
              <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
              <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
            </>
          ) : (
            <p className=" font-semibold text-lg">Current count : {count}</p>
          )}
        </div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
