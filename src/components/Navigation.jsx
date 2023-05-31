import "./navigation.css"
import React from "react"
import { useState } from "react"


export default function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false)
    
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/features">Features</a></li>
                    <li><a href="/memberships">Memberships</a></li>
                    <li><a href="">Cards</a></li>
                    <li><a href="">Services</a></li>
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
                    <li><a href="/">Home</a></li>
                    <span>|</span>
                    <li><a href="/features">Features</a></li>
                    <span>|</span>
                    <li><a href="/memberships">Memberships</a></li>
                    <span>|</span>
                    <li><a href="">Cards</a></li>
                    <span>|</span>
                    <li><a href="">Services</a></li>
                    
                    
                </ul>

                <button className="applyBtn mainApplyBtn">
                    Apply Now
                </button>
                
           
            </div>
        </nav>
    )
}