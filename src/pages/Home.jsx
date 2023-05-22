import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Features from "../components/Features"
import MainFeatures from "../components/MainFeatures"

export default function Home() {
    return (
        <div className="container">
            <Navigation />
            <Hero />
            <Features />
            <MainFeatures />
        </div>
    )
}