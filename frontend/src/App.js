import React, { useState } from "react";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import AboutUs from "./pages/miscellaneous/AboutUs";
import ContactUs from "./pages/miscellaneous/ContactUs";
import AddCarForm from "./pages/cars/AddCarForm";

import Navbar from "./components/Navbar";
import CarDetails from "./pages/cars/CarDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || ""
  );

  const handleLogin = (token, email) => {
    setAuthToken(token);
    setUserEmail(email);
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);
  };

  const handleLogout = () => {
    console.log("Logging out from App js...");
    setAuthToken(null);
    setUserEmail("");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
  };

  return (
    <Router>
      {/* Render Navbar only when the user is logged in */}
      {authToken && <Navbar userEmail={userEmail} onLogout={handleLogout} />}
      <Routes>
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
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            authToken ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/car/add" element={<AddCarForm />} />
        <Route path="/car/edit/:id" element={<AddCarForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
