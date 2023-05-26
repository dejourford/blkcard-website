import "./footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footerWrapper">
                <div className="footerLogo">
                    <div className="logoTop">
                        <i className="fa-solid fa-credit-card fa-rotate-270"></i>
                        <p className="logoText"><span className="emphasis">BLK</span>card</p>
                    </div>
                    <div className="logoBottom">
                    <div className="logoSubText">
                            <p>Just a regular credit card,</p> 
                            <p>but better.</p>
                        </div> 
                    </div>
                    
                </div>

                <section className="linkGroups">
                    <div className="group">
                        <div className="groupHeader">
                        <h3>About</h3> 
                        </div>

                        <div className="links">
                            <li><a href="">Patch</a></li>
                            <li><a href="">Updates</a></li>
                            <li><a href="">Beta</a></li>
                            <li><a href="">Pricing</a></li>
                        </div>
                        
                    </div>

                    <div className="group">
                        <div className="groupHeader">
                        <h3>Help & Solutions</h3> 
                        </div>

                        <div className="links">
                            <li><a href="">Talk to Support</a></li>
                            <li><a href="">Support Docs</a></li>
                            <li><a href="">Approval Status</a></li>
                            <li><a href="">System Status</a></li>
                        </div>
                        
                    </div>

                    <div className="group">
                        <div className="groupHeader">
                        <h3>Support</h3> 
                        </div>

                        <div className="links">
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Account Information</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Contact Us</a></li>
                        </div>
                        
                    </div>
                </section>
            </div>
            
            <div className="copyright">
                <p className="copyrightText">
                    &copy; BLKcard Copyright and All rights reserved
                </p>
                <p className="termsText">Terms and Conditions Privacy Policy</p>
            </div>

            
            
        </footer>
    )
}