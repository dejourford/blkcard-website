import "./hero.css"
import heroImage from "../assets/images/card-image.png"

export default function Hero() {
    return (
        <div className="heroSection">
            <div className="heroLeft">
                <h1>wtf</h1>
            </div>

            <div className="heroRight">
                <img className="cardImage" src={heroImage} alt="" />
            </div>
        </div>
    )
}