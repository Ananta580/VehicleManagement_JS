import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import React, { useState } from "react";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const handleLogin = (token) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token);
  };

  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;