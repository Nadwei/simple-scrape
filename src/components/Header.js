import React from "react";
import {Link} from "react-router-dom";
import Home from "../pages/Home.js"
import About from "../pages/About.js"


export default function Header(){
return(
    <header>
        <h1 className="title"><span className="title-accent">S</span>imple Scrape</h1>
        <nav id="nav">
            <Link className="nav-link" to="./">Home</Link>
            <Link className="nav-link" to="./About">About</Link>
        </nav>
    </header>

)}