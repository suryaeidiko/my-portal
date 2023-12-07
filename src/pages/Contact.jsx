import React, { useState } from "react";
// import "./contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(contactData);
  };

  return (
    <>
      <div className="contact-parent-element">
        {/* <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/Images/contact.webp"
              alt="contact page"
              height="350"
              width="400"
            />
          </div>
        </div> */}
        <div className="container grid grid-two-cols">
          <div className="contact" style={{background : "white", padding : "2rem",borderRadius : "2rem", boxShadow: "0 4px 8px 0 rgba(2, 2, 2, 2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"}}>
            <h6 style={{ fontSize: "2rem", fontWeight: "bold",borderBottom : "2px solid black" }}>Contact Us</h6>

            <form onSubmit={handlesubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="username"
                  required
                  autoComplete="off"
                  value={contactData.username}
                  onChange={handlechange}
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
                  value={contactData.email}
                  onChange={handlechange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Message
                </label>
                <textarea
                className="form-control"
                aria-describedby="emailHelp"
                name="message"
                placeholder="message"
                id="message"
                cols="30"
                rows="5"
                required
                autoComplete="off"
                value={contactData.message}
                onChange={handlechange}
              />
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
