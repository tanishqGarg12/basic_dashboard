import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting login data:', loginData);
    try {
      const response = await axios.post('http://localhost:8000/login', loginData);
      console.log(response.data)
      const { success, message } = response.data;
      if (success) {
        console.log("Login successful");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
    setLoginData({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleLoginChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />
        <button type="submit">Login</button>
        <p>Not registered yet?
          <Link to="/">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
