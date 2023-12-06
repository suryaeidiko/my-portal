import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div>
        <div>
          <p>This is a sample app</p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              // paddingLeft: "2rem",
            }}
          >
            Why Choose Us?
          </h1>
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-offset="0"
            className="scrollspy-example"
            tabIndex="0"
          >
            <p>
              Your about page can and will be more comprehensive than a single
              mission statement. However, to draw people in, you need to
              succinctly state your goal in the industry up front.
            </p>

            <p>
              What is your business here to do? Why should your website visitors
              care? This information will give the reader something to remember
              about your company long after they leave your website.
            </p>
            <p>
              Every business has a story to tell. Even if youre running a
              startup with a brief history, youll want to share your companys
              progress. Talk about how you got to where you are today on your
              about page.
            </p>
            <p>
              Every good company was founded on an idea — something the current
              marketplace might not yet offer. What was your idea?
            </p>
            {/* <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>...</p> */}
          </div>
          <section className="section-analytics">
          <div className="btn btn-group">
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
          </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
