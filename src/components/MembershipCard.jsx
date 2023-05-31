import "./membershipcard.css"

export default function MembershipCard(props) {
    return (
        <div className="membershipCardWrapper">
            <div className="membershipCardHeader">
                <img className="stars" src={props.stars} alt="" />
                <p className="rating">{props.rating}</p>
            </div>

            <h1 className="membershipCardTitle">{props.title}</h1>

            <p className="membershipCardDescription">{props.description}</p>

            <button className="applyBtn membershipapplyBtn">Learn More</button>
        </div>
    )
}