import React from "react"; 
import "./App.css";
import Feedbackpopup from "./Components/Feedbackpopup";
import Main from "./Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Nav from "./Components/Nav.jsx"
import Flexibone_info from "./Components/Flexibone_info.jsx";
import Services_info from "./Components/Services_info.jsx";
import Articles from "./Components/Articles.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Feedbackpopup" element={<Feedbackpopup />} />
        <Route path="/Nav" element={<Nav />} />
        <Route path="/Flexibone_info" element={<Flexibone_info />} />
        <Route path="/Service_info" element={<Services_info />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
