import "./newsletter.css"

export default function Newsletter() {
    return (
        <section className="newsletter">
            <h2 className="newsletterHeader">Sign Up For Our Newsletter</h2>

            <form className="newsletterForm" action="">
                <input className="newsletterInput" type="text" placeholder="Enter your email  here" />
                <i className="fa-solid fa-arrow-right"></i>
            </form>
            <p className="newsletterText">By entering your email, you will get notified about our latest updates and features</p>
        </section>
    )
}