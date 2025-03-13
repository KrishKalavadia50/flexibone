import React from "react"; 
import "./App.css";
import Feedbackpopup from "./Components/Feedbackpopup";
import Main from "./Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Nav from "./Components/Nav.jsx"
import Flexibone_info from "./Components/Flexibone_info.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Feedbackpopup" element={<Feedbackpopup />} />
        <Route path="/Nav" element={<Nav />} />
        <Route path="/Flexibone_info" element={<Flexibone_info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
