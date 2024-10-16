import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../images/Infoziant Logo Final.png'; // Import your logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your login logic
    if (email === '123' && password === '123') {
      navigate('/dashboard'); // Navigate to dashboard after login
    } else {
      alert('Invalid login details');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <img src={logo} alt="Infoziant Logo" className="logo" />
        </div>
        <h2>LOGIN</h2>
       
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-me">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <button className="submit-btn" type="submit">LOGIN</button>
        </form>
       
      </div>
    </div>
  );
};

export default Login;
