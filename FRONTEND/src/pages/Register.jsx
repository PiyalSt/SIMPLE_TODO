import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!username) {
      toast.error("Please enter your full name!");
      return;
    }
    if (!email) {
      toast.error("Please enter email address!");
      return;
    }
    if (!password) {
      toast.error("Please enter password!");
      return;
    }
    if (!confirmPassword) {
      toast.error("Please enter confirm password!");
      return;
    }
    if (confirmPassword !== password) {
      toast.error("Please enter same confirm password!");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:4000/api/todo/v1/users", {
        username,
        email,
        password,
      });

      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      // backend থেকে পাঠানো error message দেখাবে
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-bglight flex items-center justify-center">
      <div className="p-12 bg-white rounded-md">
        <h2 className="text-2xl font-semibold tracking-wider text-center">
          Register Form
        </h2>

        <div className="space-y-3 mt-8">
          <div className="space-y-2">
            <p className="font-medium">Full Name</p>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              className="w-100 py-2 px-4 border border-gray-300 rounded-md outline-0"
              type="text"
              placeholder="your name"
            />
          </div>
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
            <p className="font-medium">Confirm Password</p>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="w-100 py-2 px-4 border border-gray-300 rounded-md outline-0"
              type="text"
              placeholder="confirm password"
            />
          </div>
          <div className="space-y-2">
            <button
              onClick={handleSignUp}
              disabled={loading}
              className="w-full bg-black text-white rounded-md py-2 mt-8 active:scale-95 transition-all duration-300 cursor-pointer font-medium"
            >
              Sign up
            </button>
            <p className="text-center">
              I have already account ?{" "}
              <span
                onClick={() => navigate("/login")}
                className="hover:underline cursor-pointer"
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
