import './App.css';
import React from "react";
import Header from "./Header.js";
import Scraper from "./Scraper.js";
import Footer from "./Footer.js";
import About from "./About.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Scraper />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
    </Router>
  );
}


