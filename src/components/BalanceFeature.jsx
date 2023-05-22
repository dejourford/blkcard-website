import "./balancefeature.css"
import transactionImg from "../assets/images/transaction-history.jpg"
export default function BalanceFeature() {
    return (
        <section className="balanceFeature">
            <div className="balanceFeatureLeft">
                <h3 className="balanceFeatureHeaderText">Seamless & Instant Balance Reflection</h3>
                <p className="balanceFeatureText">Get your current balance as soon as a transaction 
                is completed. No more waiting for transactions to post before your actual balance is reflected</p>
                <button className="applyBtn">Balance Feature</button>
            </div>
            <div className="balanceFeatureRight">
                <img className="transactionImg" src={transactionImg} alt="balance image" />
            </div>
        </section>
    )
}