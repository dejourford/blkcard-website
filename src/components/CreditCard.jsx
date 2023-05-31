import cardData from "../../cardData"
import "./creditcard.css"

export default function CreditCard(props) {
    
    return (
        <div className="creditCard">
            <div className="creditCardWrapper">
                <h1 className="creditCardHeader">{props.title}</h1>

                <div className="creditCardBody">
                    <img className="creditCardImage" src={props.image} alt="" />
                    <div className="offerSection">
                        <h3 className="offerHeader">{props.offerHeading}</h3>
                        <p className="offerText">{props.offerText}</p>
                    </div>
                    <div className="glanceSection">
                        <h3 className="glanceHeader">{props.glanceHeader}</h3>
                        <p className="glanceText">{props.glanceText}</p>
                    </div>
                    <div className="aprSection">
                        <h3 className="aprHeader">{props.aprHeader}</h3>
                        <p className="aprText">{props.aprText}</p>
                    </div>
                    <div className="annualFeeSection">
                        <h3 className="annualFeeHeader">{props.annualFeeHeader}</h3>
                        <p className="annualFeeText">{props.annualFeeText}</p>
                    </div>
                    <button className="applyBtn creditCardApplyBtn">Apply Now</button>
                </div>
            </div>
        </div>
    )
}