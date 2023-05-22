import "./card.css"


export default function Card(props) {
    
    let isOdd
    const index = props.index

    if (index % 2 == 0) {
        isOdd = false
    }
    else {
        isOdd = true
    }
    
    return (
            <section className={isOdd ? "cardFeatureReverse" : "cardFeature"}>
                <div className="cardFeatureLeft">
                    <h3 className="cardFeatureHeaderText">{props.title}</h3>
                    <p className="cardFeatureText">{props.text}</p>
                    <button className="applyBtn">Learn More</button>
                </div>
                <div className="cardFeatureRight">
                    <img className="cardImg" src={props.image} alt="" />
                </div>
            </section>
        
    )
}