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
    <div className="background">
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" onSubmit={handlesubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
              autoComplete="off"
              value={login.email}
              onChange={handlechange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              autoComplete="off"
              value={login.password}
              onChange={handlechange}
            />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button className="sign">Sign in</button>
        </form>
        <div>
          <p className="signup">
            Don't have an account?
            <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
