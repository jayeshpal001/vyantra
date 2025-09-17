import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Hash,
  Edit,
  ShoppingBag,
  Heart,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Profile = () => {
  const [data, setData] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          withCredentials: true,
        });
        setData(res.data.user);
      } catch (error) {
        console.error(
          "Error fetching profile data:",
          error.response?.data?.message || error.message
        );
      }
    };
    fetchProfile();
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading Profile...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-lg p-6">
        <div className="flex items-center gap-3 mb-10">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`}
            alt="Profile Avatar"
            className="w-14 h-14 rounded-full border-2 border-indigo-500 shadow-sm"
          />
          <div>
            <h3 className="font-bold text-gray-800">{data.name}</h3>
            <p className="text-sm text-gray-500">Customer</p>
          </div>
        </div>

        <nav className="flex flex-col gap-4 text-gray-700">
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">
            <User className="w-5 h-5" /> Profile
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">
            <ShoppingBag className="w-5 h-5" /> Orders
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">
            <Heart className="w-5 h-5" /> Wishlist
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition mt-auto">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </nav>
      </aside>

      {/* Sidebar Drawer for Mobile */}
      {isSidebarOpen && (
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 md:hidden"
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-10 mt-6">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`}
              alt="Profile Avatar"
              className="w-14 h-14 rounded-full border-2 border-indigo-500 shadow-sm"
            />
            <div>
              <h3 className="font-bold text-gray-800">{data.name}</h3>
              <p className="text-sm text-gray-500">Customer</p>
            </div>
          </div>
          <nav className="flex flex-col gap-4 text-gray-700">
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">
              <User className="w-5 h-5" /> Profile
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">
              <ShoppingBag className="w-5 h-5" /> Orders
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">
              <Heart className="w-5 h-5" /> Wishlist
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition">
              <Settings className="w-5 h-5" /> Settings
            </button>
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition mt-auto">
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </nav>
        </motion.aside>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between mb-4 md:hidden">
          <h1 className="text-xl font-bold">My Profile</h1>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Cover + Profile */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl h-40 mb-20">
          <div className="absolute -bottom-12 left-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`}
              alt="Profile"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                {data.name}
              </h1>
              <p className="text-indigo-100 break-all">{data.email}</p>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left Info */}
          <div className="col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Personal Information
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <User className="w-5 h-5 text-indigo-600" />
                <span>{data.name}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-purple-600" />
                <span className="break-all">{data.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Hash className="w-5 h-5 text-pink-600" />
                <span className="break-all">{data._id}</span>
              </div>
            </div>
            <button className="mt-6 px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition flex items-center gap-2">
              <Edit className="w-4 h-4" /> Edit Profile
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Account Stats
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Total Orders</span>
                <span className="font-semibold">15</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Wishlist Items</span>
                <span className="font-semibold">8</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Member Since</span>
                <span className="font-semibold">Sep 2023</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Orders */}
        <div className="mt-10 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Orders
          </h2>
          <div className="divide-y">
            {[1, 2, 3].map((order) => (
              <div
                key={order}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-2"
              >
                <div>
                  <p className="font-medium text-gray-700">
                    Order #{order} • Product Name
                  </p>
                  <p className="text-sm text-gray-500">
                    Placed on Sep 12, 2025
                  </p>
                </div>
                <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full w-max">
                  Delivered
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
