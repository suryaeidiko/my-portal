import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlesubmition = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form className="form_main" onSubmit={handlesubmition}>
        <p className="heading">Sign up</p>

        <div className="inputContainer">
          <svg
            viewBox="0 0 16 16"
            fill="#2e2e2e"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            className="inputIcon"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
          </svg>
          <input
            placeholder="username"
            name="username"
            id="username"
            className="inputField"
            type="text"
            value={user.username}
            onChange={handleInput}
            required
            autoComplete="off"
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
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
          </svg>
          <input
            placeholder="email"
            name="email"
            id="email"
            className="inputField"
            type="email"
            value={user.email}
            onChange={handleInput}
            required
            autoComplete="off"
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
            <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
          </svg>
          <input
            placeholder="mobile"
            id="mobile"
            className="inputField"
            type="number"
            required
            autoComplete="off"
            value={user.mobile}
            onChange={handleInput}
            name="mobile"
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
            value={user.password}
            onChange={handleInput}
            name="password"
          />
        </div>

        <button id="button" type="submit">
          Register
        </button>

        <div className="signupContainer">
          <p>Already have an acount ? </p>
          <Link to="/login">Sign in</Link>
        </div>
      </form>
    </>
  );
};

export default Register;
