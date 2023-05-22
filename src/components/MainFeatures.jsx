import "./mainfeatures.css"
import BalanceFeature from "./BalanceFeature"
export default function MainFeatures() {
    return (
        <section className="mainFeatureSection">
            <div className="mainFeatureHeader">
                <h2 className="mainFeatureHeaderText">Experience Revolutionary With <span className="emphasis">BLK</span></h2>
                
            </div>
            
            {/* insert feature component here */}
            <BalanceFeature />
        </section>
    )
}