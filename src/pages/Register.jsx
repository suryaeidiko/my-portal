import React, { useState } from "react";

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
      <div className="contact-parent-element">
        <div className="container grid grid-two-cols">
          <div className="registrationimg">
            <img
              src="/Images/registration.png"
              alt="Registration form"
              width="400"
              height="350"
            />
          </div>
        </div>
        <div className="container grid grid-two-cols">
          <h6 style={{ fontSize : "2rem",fontWeight : "bold" }} className="main-heading mb-3">
            Registration form
          </h6>
          <br />

          <form onSubmit={handlesubmition}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  required
                  placeholder="username"
                  name="username"
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  required
                  placeholder="email"
                  name="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mobile
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  aria-describedby="emailHelp"
                  required
                  placeholder="mobile"
                  name="mobile"
                  autoComplete="off"
                  value={user.mobile}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>

        </div>
      </div>
    </>
  );
};

export default Register;
