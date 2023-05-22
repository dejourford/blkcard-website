import "./features.css"

export default function Features() {
    return (
        <section className="features">
            <div className="featuresHeader">
                <h2>BLKcard Features</h2>
                <p className="featureHeaderText">
                    It's pretty similar to other financial apps you've found out there.
                    However, we have multiple types of secured transactions utilizing the newest technologies. 
                </p>
            </div>
            

            <div className="featuresGroup">
                <div className="feature">
                    <div className="featureHeader">
                        <i className="fa-solid fa-hourglass"></i>
                        <h3>Transaction History</h3>
                    </div>
                    
                    <p className="featureText">
                        Your transaction history is never deleted as long as you're a BLK card holder. 
                        Trace transactions as far back as you need to
                    </p>
                </div>

                <div className="feature">
                    <div className="featureHeader">
                        <i className="fa-solid fa-building-columns"></i>
                        <h3>Multiple Locations</h3>
                    </div>
                    
                    <p className="featureText">
                        No matter where you are, we have a location near you. Travel with the peace of mind 
                        knowing we've got you covered, alway
                    </p>
                </div>

                <div className="feature">
                    <div className="featureHeader">
                        <i className="fa-solid fa-lock"></i>
                        <h3>Secure Transactions</h3>
                    </div>
                    
                    <p className="featureText">
                        Experience the most secure way of banking with BLK card and enjoy our 
                        fraud prevention program as a premium member
                    </p>
                </div>
            </div>

        
        
        </section>
        
        
    )
}