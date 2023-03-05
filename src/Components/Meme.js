import React from "react";

export default function Meme() {
    return  (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top Text"/>
                <input type="text" className="form--input" placeholder="Bottom Text"/>
                <button className="form--button" onClick={getMemesImage}>Get a new meme image 🖼</button>
            </div>
        </main>
    )
}