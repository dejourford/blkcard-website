import "./mainfeatures.css"
import transactionImg from "../assets/images/transaction-history.jpg"
import expenseImg from "../assets/images/expense-tracker.jpg"



export default function MainFeatures() {
    return (
        <section className="mainFeatureSection">
            <div className="mainFeatureHeader">
                <h2 className="mainFeatureHeaderText">Experience Revolutionary With <span className="emphasis">BLK</span></h2>
                
            </div>
            
            <section className="balanceFeature">
                <div className="balanceFeatureLeft">
                    <h3 className="balanceFeatureHeaderText">Seamless & Instant Balance Reflection</h3>
                    <p className="balanceFeatureText">Get your current balance as soon as a transaction 
                    is completed. No more waiting for transactions to post before your actual balance is reflected</p>
                    <button className="applyBtn">Learn More</button>
                </div>
                <div className="balanceFeatureRight">
                    <img className="transactionImg" src={transactionImg} alt="balance image" />
                </div>
            </section>

            <section className="expenseFeature">
                <div className="expenseFeatureLeft">
                    <h3 className="expenseFeatureHeaderText">Seamless & Instant Balance Reflection</h3>
                    <p className="expenseFeatureText">Get your current balance as soon as a transaction 
                    is completed. No more waiting for transactions to post before your actual balance is reflected</p>
                    <button className="applyBtn">Learn More</button>
                </div>
                <div className="expenseFeatureRight">
                    <img className="expenseImg" src={expenseImg} alt="balance image" />
                </div>
            </section>
            
        </section>
    )
}