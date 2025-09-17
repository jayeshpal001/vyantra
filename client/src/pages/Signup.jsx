import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function Signup() {
 
  const [formData, setFormData] = useState({ name: "", email: "", password: "", otp: "" });
  const { sendRegiterOtp, verifyRegisterOtp, otpHandler } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendOtp = async (e) => {
    e.preventDefault();
    sendRegiterOtp(formData);
  }

  const verifyOtp = (e) => {
    e.preventDefault();
    verifyRegisterOtp(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-indigo-100 to-purple-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Create Account
        </h2>
        <p className="text-gray-600 text-center mt-2">Join us and start shopping</p>

        <form className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-300 focus:outline-none shadow-sm"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-300 focus:outline-none shadow-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-300 focus:outline-none shadow-sm"
              placeholder="Create a password"
            />
          </div>
          {otpHandler&&<div>
            <label className="block text-sm font-medium text-gray-700">Otp</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-300 focus:outline-none shadow-sm"
              placeholder="Enter OTP"
            />
          </div>}
          {!otpHandler&&<button
            type="submit"  onClick={sendOtp}
            className="w-full py-3 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-all duration-300"
          >
            Send OTP
          </button>}
          {otpHandler&&<button
            type="submit"  onClick={verifyOtp}
            className="w-full py-3 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition-all duration-300"
          >
            Sign Up
          </button>}
        </form>

        <p className="text-center text-gray-600 mt-5 text-sm">
          Already have an account?{" "}
          <Link to="/logIn" className="text-indigo-500 font-medium hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup 