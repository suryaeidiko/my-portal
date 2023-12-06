import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import NavDemo from "./components/NavDemo";

function App() {
  
  
  return (
    <>
      <BrowserRouter>
      {/* <Navbar /> */}
      
        <Routes>
          <Route path="/" element = {<NavDemo />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/service" element = {<Service />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/register" element = {<Register />} />
        </Routes>
        {/* <BottomNavbar /> */}
      </BrowserRouter>
    </>
  )
}

export default App
