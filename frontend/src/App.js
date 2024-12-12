import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; 
import ContactUs from "./pages/ContactUs"; 
import Navbar from "./components/Navbar"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || '');

  const handleLogin = (token, email) => {
    setAuthToken(token);
    setUserEmail(email); // Save email on login
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);
  };

  const handleLogout = () => {
    setAuthToken(null);
    setUserEmail('');
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
  };

  return (
    <Router>
      {/* Render Navbar only when the user is logged in */}
      {authToken && <Navbar userEmail={userEmail} onLogout={handleLogout} />}
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
          element={authToken ? <Navigate to="/home" /> : <Navigate to="/login" />}
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
