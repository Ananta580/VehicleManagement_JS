import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; // Import the AboutUs component
import ContactUs from "./pages/ContactUs"; // Import the ContactUs component
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  const handleLogin = (token) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token);
  };

  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
  };

  return (
    <Router>
      {/* Render Navbar only when the user is logged in */}
      {authToken && <Navbar onLogout={handleLogout} />}
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            authToken ? (
              <Navigate to="/home" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* Register Route */}
        <Route path="/register" element={<Register />} />

        {/* Default Route */}
        <Route
          path="/"
          element={
            authToken ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />

        {/* Home Route */}
        <Route path="/home" element={<Home />} />

        {/* About Us Route */}
        <Route path="/about" element={<AboutUs />} />

        {/* Contact Us Route */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
