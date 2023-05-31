import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CreditCard from "../components/CreditCard"
import CreditCardData from "../../cardData"


export default function Cards() {
    const creditCardElement = CreditCardData.map(function(item) {
        return <CreditCard key={item.id} title={item.title} image={item.image} offerHeading={item.offerHeading} 
        offerText={item.offerText} glanceHeader={item.glanceHeader} glanceText={item.glanceText}
        aprHeader={item.aprHeader} aprText={item.aprText} annualFeeHeader={item.annualFeeHeader}
        annualFeeText={item.annualFeeText}  />
    })
    
    return (
        <div className="container">
           <Navigation />
           {creditCardElement}
           <Footer /> 
        </div>
        
    )
}