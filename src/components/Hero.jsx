import "./hero.css"
import heroImage from "../assets/images/card-image.png"

export default function Hero() {
    const rightArrow = '\u2192'
    
    return (
        <div className="heroSection">
            <div className="heroLeft">
                <h1>The revolutionary BLK card is finally here.</h1>
                <p className="heroText">Apply now and become one of the very few to witness 
                    the power of BLK. <span className="heroTextEmphasis">*while supplies last*</span>
                </p>
                <div className="buttonGroup">
                    <button className="applyBtn">Apply Now</button>
                    <p className="learnMoreText">Learn More {rightArrow}</p>
                </div>
                
            </div>

            <div className="heroRight">
                <img className="cardImage" src={heroImage} alt="" />
            </div>
        </div>
    )
}