import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/api";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });

      if (data) {
        onLogin(data.token, email);
        navigate("/");
      } else {
        setError("Login failed");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr flex justify-center items-center">
      <div className="flex gap-5">
        <div className="w-1/2 flex justify-center">
          <img src="./login.svg" alt="login" className="w-4/5 h-full" />
        </div>
        <div className="w-1/2 flex justify-center">
          <form onSubmit={handleSubmit} className="p-6 rounded-md w-3/4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-2 mb-4 border outline-none focus:ring-2 focus:ring-indigo-700"
            />
            <button
              type="submit"
              className="w-full p-2 mt-6 bg-gradient-to-tr from-indigo-800 to-indigo-900 text-white rounded"
            >
              Login
            </button>
            <p className="mt-3">
              Not Registered yet?
              <Link to="/register" className="text-emerald-700 font-semibold">
                {" "}
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
