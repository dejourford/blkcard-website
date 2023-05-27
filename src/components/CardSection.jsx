import "./cardsection.css"
import Card from "../components/Card"
import data from "../../data.js"

export default function CardSection() {
    const cardElement = data.map(function(item, index) {
        
        return <Card key= {item.id} title={item.title} text={item.text} image={item.img} index = {index}/>
    })
    
    return (
        <section className="mainFeatureSection">
            <div className="mainFeatureHeader">
                <h2 className="mainFeatureHeaderText">Experience Revolutionary With <span className="emphasis">BLK</span></h2>
                
            </div>

            {cardElement}
        </section>
    )
}