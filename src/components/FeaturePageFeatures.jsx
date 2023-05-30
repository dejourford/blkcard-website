import Card from "../components/Card"
import dataFeaturePage from "../../dataFeaturePage.js"
import  "./FeaturePageFeatures.css"

export default function FeaturePageFeatures() {
    const newcardElement = dataFeaturePage.map(function(item) {
        
        return <Card key= {item.id} title={item.title} text={item.text} image={item.img}/>
    })
    
    return (
        <div className="FeaturePageSection">
            {newcardElement}
        </div>
        
    )
}