import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (!email) {
      toast.error("Please enter email address!");
      return;
    }
    if (!password) {
      toast.error("Please enter password!");
      return;
    }
  };

  return (
    <div className="w-full h-screen bg-bglight flex items-center justify-center">
      <div className="p-12 bg-white rounded-md">
        <h2 className="text-2xl font-semibold tracking-wider text-center">
          Login Form
        </h2>

        <div className="space-y-3 mt-8">
          <div className="space-y-2">
            <p className="font-medium">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-100 py-2 px-4 border border-gray-300 rounded-md outline-0"
              type="text"
              placeholder="email address"
            />
          </div>
          <div className="space-y-2">
            <p className="font-medium">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-100 py-2 px-4 border border-gray-300 rounded-md outline-0"
              type="text"
              placeholder="password"
            />
          </div>
          <div className="space-y-2">
            <button
              onClick={handleSignIn}
              className="w-full bg-black text-white rounded-md py-2 mt-8 active:scale-95 transition-all duration-300 cursor-pointer font-medium"
            >
              Sign in
            </button>
            <p className="text-center">
              Create a new account ?{" "}
              <span
                onClick={() => navigate("/register")}
                className="hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
