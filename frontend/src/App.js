import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/Navbar'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail")); // Save user email

  const handleLogin = (token, email) => {
    setAuthToken(token);
    setUserEmail(email); // Save email on login
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email); // Save email in localStorage
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={authToken ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={authToken ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route 
          path="/home" 
          element={<Home userEmail={userEmail} />}  // Pass userEmail to Home
        />
      </Routes>
    </Router>
  );
}

export default App;
