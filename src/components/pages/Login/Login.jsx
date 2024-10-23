// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // Ensure the CSS file is placed in the same directory

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here, you can add logic for API call or authentication
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <span className="icon">
            <ion-icon name="person"></ion-icon>
          </span>
          <input
            type="text"
            placeholder="Username"
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <span className="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="sign-link">
          <p>
            Don't have an account? <a href="/register" className="register-link">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
