import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const section1Styles = {
    color:'#fff',
    height: "100vh",
    backgroundColor: "#f0f0f0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1437419764061-2473afe69fc2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", // Updated image URL
  };

  return (
    <>
      <div className="card mb-3" style={section1Styles}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">Welcome to my page</h1>
              <p className="card-text">
                For those to whom much is given, much is required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>This is a sample app</p>
              <h1>Welcome to all</h1>
              <p>
                Well see that the ability to embed fonts with @font-face is not
                by itself a solution to all of our typographic challenges.
              </p>
              <div className="btn btn-group">
                <Link to="/contact">
                  <button className="btn">connect now</button>
                </Link>
                <Link to="/service">
                  <button className="btn secondary-btn">learn more</button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/Images/home.png"
                alt="home page"
                width="400"
                height="350"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>well known users</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/Images/OIP.jpg"
              alt="home page"
              width="400"
              height="350"
            />
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h2>Get started today</h2>
            <p>
              Well see that the ability to embed fonts with @font-face is not by
              itself a solution to all of our typographic challenges.
            </p>
            <div className="btn btn-group">
              <Link to="/contact">
                <button className="btn">connect now</button>
              </Link>
              <Link to="/service">
                <button className="btn secondary-btn">learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
