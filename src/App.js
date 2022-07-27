import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Features from "./pages/features";
import Contact from "./pages/contact";
import "./app.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" exact element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
