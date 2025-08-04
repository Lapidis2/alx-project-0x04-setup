import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContex";
import { useRouter } from "next/router";
function login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    router.push("/dashboard");
  };

  useEffect(()=>{
	console.log("state changes",email)
  },[email])
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-8">Login Page</h1>

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-lg  rounded-lg max-w-sm"
      >
        <div className="mb-4 ">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className=" w-full font-semibold border border-gray-500 py-1 rounded-lg px-2 "
            required
          />
        </div>
        <div className="relative">
          <label htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
            className="w-full  font-semibold border   border-gray-500 rounded-lg py-1 px-2"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-8 right-3 text-gray-600 hover:text-black"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 mt-4 rounded-full text-white py-2 hover:bg-blue-800 transform hover:scale-105 transition duration-300 "
        >
          Login
        </button>
        <p className="text-center">Or</p>
        <div className="flex justify-center items-center">
          <Image
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="text-sm text-gray-800 font-medium">
            Sign in with Google
          </span>
        </div>
      </form>
    </div>
  );
}

export default login;
