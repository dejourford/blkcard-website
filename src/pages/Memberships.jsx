import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MembershipCard from "../components/MembershipCard";
import membershipData from "../../membershipData";

export default function Payments() {
    const membershipCardElement = membershipData.map(function(item) {
        return <MembershipCard key={item.id} stars={item.stars} rating={item.rating} title={item.title} description={item.description} />
    })
    
    
    return (
        <div className="container">
            <Navigation />
            <div className="membershipCardsSection">
                {membershipCardElement}
            
            </div>
            <Footer />
        </div>
        
    )
}