import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <form className="form_main" onSubmit={handlesubmit}>
      <p className="heading">Login</p>

      <div className="inputContainer">
      <svg
            viewBox="0 0 16 16"
            fill="#2e2e2e"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            className="inputIcon"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
          </svg>
        <input
          placeholder="email"
          name="email"
          id="email"
          className="inputField"
          type="email"
          value={login.email}
          onChange={handlechange}
        />
      </div>

      <div className="inputContainer">
        <svg
          viewBox="0 0 16 16"
          fill="#2e2e2e"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="inputIcon"
        >
          <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
        </svg>
        <input
          placeholder="Password"
          id="password"
          className="inputField"
          type="password"
          required
          autoComplete="off"
          value={login.password}
          onChange={handlechange}
          name="password"
        />
      </div>
      
      <span class="span">
        <Link href="#">Forgot password?</Link>
      </span>
      <button id="button" type="submit">
        Sign in
      </button>
      <div className="signupContainer">
        <p>Don't have any account?</p>
        <Link to="/register">Sign up</Link>
      </div>
    </form>
  );
};

export default Login;
