import "./navigation.css"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    
    const closeMenu = () => {
        console.log('closed')
        setIsOpen(prevState => !prevState)
    }
    
    const showMenu = () => {
        console.log('opened')
        setIsOpen(prevState => !prevState)
    }

    return (
        <nav>
            <div className={isOpen? "mobileNavActive" : "mobileNav"}>
                <button className="closeNavBtn" onClick={closeMenu}>
                   <i className="fa-solid fa-xmark"></i>
                </button>
                
                
                <div className="logo">
                    <i className="fa-solid fa-credit-card fa-rotate-270"></i>
                    <p className="logoText"><span className="emphasis">BLK</span>card</p>
                </div>
                
                <ul className="mobile-nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/memberships">Memberships</Link></li>
                    <li><Link to="/cards">Cards</Link></li>
                </ul>

                <button className="applyBtn mobileApplyBtn">
                    Apply Now
                </button>
            </div>

            {/* main navigation for page */}
            <div className= {isOpen? "mainNavInactive" : "mainNav"}>
            
                <div className="logo">
                    <i className="fa-solid fa-credit-card fa-rotate-270"></i>
                    <p className="logoText"><span className="emphasis">BLK</span>card</p>
                </div>

                <button className="openNavBtn" onClick={showMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>

                <ul className="main-nav-links">
                    <li><Link to="/">Home</Link></li>
                    <span>|</span>
                    <li><Link to="/features">Features</Link></li>
                    <span>|</span>
                    <li><Link to="/memberships">Memberships</Link></li>
                    <span>|</span>
                    <li><Link to="/cards">Cards</Link></li>
                    
                    
                    
                </ul>

                <button className="applyBtn mainApplyBtn">
                    Apply Now
                </button>
                
           
            </div>
        </nav>
    )
}