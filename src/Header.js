import React from "react";
import {Link} from "react-router-dom";
import Home from "./Home.js"
import About from "./About"


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