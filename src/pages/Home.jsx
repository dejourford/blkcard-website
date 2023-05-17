import "./home.css"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"

export default function Home() {
    return (
        <div className="container">
            <Navigation />
            <Hero />
        </div>
    )
}