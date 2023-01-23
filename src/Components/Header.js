import React from "react";
import Image from "../images/troll-face.png"

export default function Header () {
    return (
        <header className="app-header">
            <img src={Image} alt="troll-face" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h6 className="header--text">React - Project 3</h6>
        </header>
    )
}