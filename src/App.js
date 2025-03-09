import React from "react"; 
import "./App.css";
import Feedbackpopup from "./Components/Feedbackpopup";
import Main from "./Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/feedbackpopup" element={<Feedbackpopup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
