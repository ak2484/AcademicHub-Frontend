import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../constants";

import { activePageFunction } from "../../../constants";
import { NavLink, useNavigate } from "react-router-dom";

// LoginForm for students
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_URL}/users/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 200 && res.data.token) {
        console.log("Login successful!"); // Check if this line is executed
        // localStorage.setItem("token", res.data.token);
        navigate("/layout");
      } else {
        console.error("Login failed:", res.data.message);
        alert("Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error(
        "Error during login:",
        error.response ? error.response.data : error
      );
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-white-smoke ">
        <div className="flex items-center h-screen">
          <form
            onSubmit={handleSubmit}
            className="w-[450px] mx-auto p-6 to-blue-50 shadow-md shadow-smoky-black rounded-lg bg-lavender-web text-dark-imperial-blue "
          >
            <div className="flex justify-center h-auto mb-5">
              <img
                className="h-12 w-auto mr-2"
                src="./src/assets/AcademicHubLogo2.png"
                alt="logo"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailInput}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordInput}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-palatinate-blue text-white-smoke px-5 py-3 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-200  text-xl"
            >
              Login
            </button>

            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post(`${API_URL}/api/v1/users/login`, {
//       email,
//       password,
//     });

//     if (res.status === 200 && res.data.token) {
//       // Assuming the token is a sign of successful login
//       console.log("Login successful!");
//       // Store the token if needed
//       localStorage.setItem("token", res.data.token);

//       // Navigate to the layout
//       navigate("/layout");
//     } else {
//       console.error("Login failed:", res.data.message);
//       alert("Invalid credentials, please try again.");
//     }
//   } catch (error) {
//     console.error(
//       "Error during login:",
//       error.response ? error.response.data : error
//     );
//     alert("An error occurred during login. Please try again.");
//   }
// };
