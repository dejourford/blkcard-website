import "./navigation.css"

export default function Navigation() {
    const closeMenu = () => {
        console.log('closed')
    }
    
    const showMenu = () => {
        console.log('opened')
    }

    return (
        <nav>
            <div className="mobileNav">
                <button className="closeNavBtn" onClick={closeMenu}>
                   <i className="fa-solid fa-xmark"></i>
                </button>
                
                
                <div className="logo">
                    <i className="fa-solid fa-credit-card fa-rotate-270"></i>
                    <p className="logoText">BLKcard</p>
                </div>
                
                <ul className="mobile-nav-links">
                    <li><a href="">Features</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Payments</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Services</a></li>
                </ul>

                <button className="applyBtn">
                    <a href="">Apply Now</a>
                </button>
            </div>

            <div className="main-nav">
            
                <button className="openNavBtn" onClick={showMenu}>
                    <i className="fa-solid fa-bars-sort"></i>
                </button>
                
                
                <div className="logo">
                    <i className="fa-solid fa-credit-card fa-rotate-270"></i>
                    <p className="logoText">BLKcard</p>
                </div>
                
                <ul className="mobile-nav-links">
                    <li><a href="">Features</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Payments</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Services</a></li>
                </ul>

                <button className="applyBtn">
                    <a href="">Apply Now</a>
                </button>
           
            </div>
        </nav>
    )
}