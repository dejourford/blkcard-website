import "./features.css"

export default function Features() {
    return (
        <section className="features">
            <h2>Our Key Features</h2>
            <p>
                It's pretty similar to other financial apps you've found out there.
                However, we have multiple types of secured transactions utilizing the newest technologies. 
            </p>

            <div className="featuresGroup">
                <div className="feature">
                    <i className="fa-solid fa-hourglass"></i>
                    <h3>Timeless Transaction History</h3>
                    <p>Your transaction history is never deleted as long as you're a BLK card holder</p>
                </div>

                <div className="feature">
                    <i className="fa-solid fa-bank"></i>
                    <h3>Multiple Locations</h3>
                    <p>
                        No matter where you are, we have a location near you. Travel with the peace of mind 
                        knowing we've got you covered, alway
                    </p>
                </div>

                <div className="feature">
                    <i className="fa-solid fa-lock"></i>
                    <h3>Secure Transactions</h3>
                    <p>
                        Experience the most secure way of banking with BLK card and enjoy our 
                        fraud prevention program
                    </p>
                </div>
            </div>
        </section>
        
        
    )
}