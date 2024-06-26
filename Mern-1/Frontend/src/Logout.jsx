import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
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
        console.log('registering data:', loginData);
        try {
          const response = await axios.post('http://localhost:8000/register', loginData);
          console.log(response.data)
          const { success, message } = response.data;
          if (success) {
            console.log("regustered successful");
          } else {
            console.log(message);
          }
        } catch (error) {
          console.error("reguster error:", error);
        }
        setLoginData({
          username: "",
          password: ""
        });
      };
  return (
    <div>
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
        <button type="submit">regitsrr</button>
        <p>Not registered yet?
          <Link to="/login">login here</Link>
        </p>
      </form>
    </div>
    </div>
  );
}

export default Logout;
