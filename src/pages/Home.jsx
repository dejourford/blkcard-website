import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Features from "../components/Features"
import CardSection from "../components/CardSection"
import Newsletter from "../components/Newsletter"


export default function Home() {
    return (
        <div className="container">
            <Navigation />
            <Hero />
            <Features />
            <CardSection />
            <Newsletter />
        </div>
    )
}