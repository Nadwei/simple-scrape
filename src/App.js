import './App.css';
import React from "react";
import Header from "./components/Header.js";
import Scraper from "./components/Scraper.js";
import Footer from "./components/Footer.js";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
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


