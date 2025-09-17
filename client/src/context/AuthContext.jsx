import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UIContext } from "./UIContext";
import Swal from "sweetalert2";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { setIsLoggedIn } = useContext(UIContext);
    const navigate = useNavigate();
    const [otpHandler, setOtpHandler] = useState(false);
    const sendRegiterOtp = async (formData) => {
        try {
            const res = await axios.post("http://localhost:5000/api/users/register/sendOtp", {
                name: formData?.name,
                email: formData?.email,
                password: formData?.password
            }, { withCredentials: true })
            console.log(res.data);
            alert("OTP sent to your email!");
            setOtpHandler(true);
        } catch (error) {
            console.error("Error sending OTP:", error.response.data.message);
        }
    }

    const verifyRegisterOtp = async (formData) => {
        try {
            const res = await axios.post("http://localhost:5000/api/users/register/verifyOtp", {
                email: formData.email,
                otp: formData.otp
            }, { withCredentials: true })
            console.log(res.data);
            alert("Registration successful! You can now log in.");
            navigate("/logIn");
            setOtpHandler(false);
        } catch (error) {
            console.error("Error verifying OTP:", error.response.data.message);
        }
    }

    const sendLoginOtp = async (formData) => {
        try {
            const res = await axios.post("http://localhost:5000/api/users/login/sendOtp", {
                email: formData.email,
                password: formData.password
            }, { withCredentials: true })
            console.log(res?.data);
            alert("OTP sent to your email!");
            setOtpHandler(true);
        } catch (error) {
            console.error("Error sending OTP:", error.message);
            console.log(error.response.data.message);
            alert(error.response.data.message);

        }
    }

    const verifyLoginOtp = async (formData) => {
        try {
            const res = await axios.post("http://localhost:5000/api/users/login/verifyOtp", {
                email: formData.email,
                otp: formData.otp
            }, { withCredentials: true })
            console.log(res.data);
            alert("Login successful! Redirecting to your dashboard.");
            navigate("/");
            setOtpHandler(false);
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error.response.data.message);
            console.log(error.message);
        }
    }

      const logout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.get(
            "http://localhost:5000/api/users/logout",
            { withCredentials: true }
          );
          console.log(res.data);
          setIsLoggedIn(false);

          Swal.fire({
            title: "Logged Out!",
            text: "You have been logged out successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });

          navigate("/logIn");
        } catch (error) {
          console.error(error.response?.data?.message || error.message);
          Swal.fire("Error!", "Something went wrong. Try again.", "error");
        }
      }
    });
  };

    return (
        <AuthContext.Provider value={{ otpHandler, sendRegiterOtp, verifyRegisterOtp, sendLoginOtp, verifyLoginOtp, logout }}>
            {children}
        </AuthContext.Provider>
    );
}