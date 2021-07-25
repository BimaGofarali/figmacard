import React from 'react'
import image from "../Image/montain.jpg"
import "./Figma.css"

function FigmaCard() {
    return (
        <div className="Body">
            <div className="Card">
                <div className="Card-header">
                    <img src={image} alt="gambar"/>
                </div>
                <div className="Card-body">
                <div className="Card-title"> 
                 <h1>An Above Average Experience</h1>
                 </div>
                <div className="Card-paragraf">
                <p>
                Travel to the premiere mountain tops of New Zealand with our guided tours. Take in the majestic scenary and witness beauty.
                </p>
                </div>
                <button>Vector</button>
            </div>
            </div>
        </div>
    )
}

export default FigmaCard
