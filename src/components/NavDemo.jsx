import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import "./nav.css";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  List,
  AppBar,
  Button,
  Drawer,
  Toolbar,
  ListItem,
  Typography,
  IconButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";

const Navbar = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    // Add more refs for additional sections
  };

  const content =
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.";

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleNavigationClickBtn = (ref, buttonName) => {
    if (buttonName === "GET STARTED") {
      const clientSectionRef = sectionRefs.section2?.current;
      if (clientSectionRef) {
        clientSectionRef.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      scrollToRef(ref); // For other sections, perform the usual navigation
    }
    setDrawerOpen(false); // Close the drawer after navigation click
    setActiveButton(buttonName); // Set the active button
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // State to track the active button

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigationClick = (ref, buttonName) => {
    scrollToRef(ref);
    setDrawerOpen(false); // Close the drawer after navigation click
    setActiveButton(buttonName); // Set the active button
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const handleScroll = () => {
      const offset = 100; // Adjust the offset as needed
      if (window.scrollY > offset) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const section1Styles = {
    height: "100vh",
    backgroundColor: "#f0f0f0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1512950050685-b1d4ae63d2df?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    paddingTop: "64px",
    marginTop: "-64px", // Adjusted margin to remove the blank space
  };

  const section1StylesHome = {
    height: "100vh",
    backgroundColor: "#f0f0f0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url(https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    paddingTop: "32px", // Adjusted padding for better spacing
    marginTop: "-64px",
  };

  const section1StylesAbout = {
    height: "120vh",
    // backgroundColor: "#f0f0f0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url(https://plus.unsplash.com/premium_photo-1674729243673-0b5e871a8a24?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      paddingTop: "5rem", // Adjusted padding for better spacing
    // marginTop: "10px",
      marginBottom : "-15rem"
  };

  const section1StylesContact = {
    height: "90vh",
    backgroundColor: "#f0f0f0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      // paddingTop: "5rem",

    // marginTop: "-100px", // Adjusted margin to remove the blank space 
  };

  
  // Update contentStyles for better readability on smaller screens
const contentstyles = {
  marginTop: "-10rem", // Adjust the margin for better spacing
  width: "100%",
  textAlign: "center",
  padding: "20px",
  color: "black",
  // Additional styles for better readability on smaller screens
};


  const imageStyles = {
    // width: '100%', // Adjust image width according to your design
    // borderRadius: '10px', // Add border radius for image if needed
  };

  const navHeight = 64; // Replace this with your Navbar height (in pixels)

  // Inside the Navbar component
  const sectionStyles = {
    minHeight: `calc(100vh - ${navHeight}px)`,
    paddingTop: `${navHeight}px`,
    marginBottom: "-64px",
    marginTop: "-64px", // Adjusted margin to remove the blank space
  };

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "white" }}>
        <Toolbar>
          {/* Logo and Title */}
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              marginLeft: "30px",
              marginRight: "30px",
              fontStyle: "oblique",
              color: "#070707 ",
              fontSize: "30px",
            }}
          >
            Sapp
          </Typography>

          {/* Navigation Items */}
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                // style={{ backgroundColor: "#313233" }}
                sx={{ display: { sm: 'none', md: 'flex',backgroundColor: "#313233" } }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{
                  width: "100%", // Set the width as per your requirement
                  "& .MuiDrawer-paper": {
                    width: "100%", // Set the width for the drawer paper content
                    boxSizing: "border-box",
                    display: "flex", // Use flexbox
                    flexDirection: "column",
                    // flexDirection: "column", // Arrange items vertically
                    //   justifyContent: "center", // Center items vertically
                    // alignItems: "center", // Center items horizontally
                    backgroundColor: "#313233",
                    color: "#fff",
                  },
                }}
              >
                <List style={{ display: "flex", flexDirection: "column" }}>
                  <ListItem
                    button
                    onClick={() =>
                      handleNavigationClick(sectionRefs.section1, "HOME")
                    }
                  >
                    <ListItemText primary="HOME" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() =>
                      handleNavigationClick(sectionRefs.section2, "ABOUT")
                    }
                  >
                    <ListItemText primary="ABOUT" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() =>
                      handleNavigationClick(sectionRefs.section3, "CONTACT")
                    }
                  >
                    <ListItemText primary="CONTACT" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() =>
                      handleNavigationClick(sectionRefs.section4, "SERVICE")
                    }
                  >
                    <ListItemText primary="SERVICE" />
                  </ListItem>
                  {/* <ListItem
                    button
                    onClick={() =>
                      handleNavigationClick(sectionRefs.section4, "TEAM")
                    }
                  >
                    <ListItemText primary="TEAM" />
                  </ListItem> */}

                  <ListItem button component={Link} to="/login">
                    <ListItemText primary="LOGIN" />
                  </ListItem>
                  {/* Add more ListItems for additional navigation items */}
                </List>
              </Drawer>
            </>
          ) : (
            <div style={{ display: "flex", gap: "30px", color: "#070707",marginLeft : "auto",marginRight : "30px" }}>
              <Button
                color="inherit"
                onClick={() =>
                  handleNavigationClick(sectionRefs.section1, "HOME")
                }
                style={{
                  textDecoration:
                    activeButton === "HOME" ? "underline" : "none",
                }}
              >
                HOME
              </Button>
              <Button
                color="inherit"
                onClick={() =>
                  handleNavigationClick(sectionRefs.section2, "ABOUT")
                }
                style={{
                  textDecoration:
                    activeButton === "ABOUT" ? "underline" : "none",
                }}
              >
                ABOUT
              </Button>
              <Button
                color="inherit"
                onClick={() =>
                  handleNavigationClick(sectionRefs.section3, "CONTACT")
                }
                style={{
                  textDecoration:
                    activeButton === "CONTACT" ? "underline" : "none",
                }}
              >
                CONTACT
              </Button>
              <Button
                color="inherit"
                onClick={() =>
                  handleNavigationClick(sectionRefs.section4, "SERVICE")
                }
                style={{
                  textDecoration:
                    activeButton === "SERVICE" ? "underline" : "none",
                }}
              >
                SERVICE
              </Button>
              {/* <Button
                color="inherit"
                onClick={() =>
                  handleNavigationClick(sectionRefs.section4, "TEAM")
                }
                style={{
                  textDecoration:
                    activeButton === "TEAM" ? "underline" : "none",
                }}
              >
                TEAM
              </Button> */}

              <Button component={Link} to="/login" color="inherit">
                LOGIN
              </Button>
              {/* Add more Buttons for additional navigation items */}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* To compensate for the fixed AppBar height */}
      {/* Sections */}
      <section ref={sectionRefs.section1} style={sectionStyles}>
        <div style={section1StylesHome}>
          <div style={contentstyles}>
            <Typography variant="h3" gutterBottom>
              HI, WELCOME TO OUR PLACE!
            </Typography>
            <Typography variant="body1" style={{ fontStyle: "italic" }}>
              {content}
            </Typography>

            <button
              className="btn-new"
              onClick={() => handleNavigationClickBtn(null, "GET STARTED")}
            >
              Get Started
              <span></span>
            </button>
          </div>
          <div style={imageStyles} />
        </div>
      </section>
      <section ref={sectionRefs.section2} style={sectionStyles}>
        <div style={section1StylesAbout}>
          <div style={contentstyles}>
          <div style={{marginTop:'-10rem'}}>
            <div style={{ textAlign: "center", height:'auto' }}>
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  marginTop : "5rem",
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#333",
                }}
              >
                ABOUT
              </Typography>
              <About />
              {/* <Typography
              variant="body1"
              style={{ fontStyle: "italic", color: "#333" }}
            >
              Our custom software development services are designed to match
              your exact requirements. Whether it is a web-based application or
              enterprise software, we build solutions that align with your goals
              and give your business a competitive edge.
            </Typography> */}
              {/* <Services /> */}
            </div>
          </div>
          </div>
        </div>
      </section>
      <section ref={sectionRefs.section3} style={sectionStyles}>
        <div style={section1StylesContact}>
          <div contentstyles>
            {/* <Typography variant="h3" style={{ margin: "20px", textAlign: "center",fontStyle: "italic", color: "#333" }}>CONTACT</Typography> */}
            <Contact />
          </div>
        </div>
      </section>
      <section ref={sectionRefs.section4} style={sectionStyles}>
        <div style={{ height: "100vh", backgroundColor: "#dcdcdc" }}>
          {/* <Typography variant="h3">SERVICE</Typography> */}
          <Service />
        </div>
      </section>
      {/* <section ref={sectionRefs.section5} style={sectionStyles}>
        <div style={{ height: "100vh", backgroundColor: "#a0a0a0" }}>
          <Typography variant="h3">Section 5</Typography>
          <p>ABOUT...</p>
        </div>
      </section>
      <section ref={sectionRefs.section6} style={sectionStyles}>
        <div style={{ height: "100vh", backgroundColor: "#a0a0a0" }}>
          <Typography variant="h3">Section 6</Typography>
          <p>CONTACT...</p>
        </div>
      </section> */}
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#2B2A4C",
            color: "white",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </div>
      )}
    </div>
  );
};

export default Navbar;
