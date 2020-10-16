import React from 'react'

function Footer() {
    return (
        <div className = "footer-container">
            <div className = "footer-logo-block">
                <div className = "footer-logo">
                    <img src = "/Layer_19.png" height = "100%" width = "100%" />
                </div>
                
            </div>
            <div className = "address-block">
                <div className = "heading">Address</div>
                <div className = "data">
                    Copperants, 70 Bowman St. South Windsor, 
                    Bangalore, Karnataka - 560000.
                </div>
            </div>
            <div className = "social-media-block">
                <div className = "social-media-accounts">
                    <div className = "image">
                        <img src = "/linkedin.png" height = "100%" width = "100%" />
                    </div>
                    <div className = "image">
                        <img src = "/twitter.png" height = "100%" width = "100%" />
                    </div>
                    <div className = "image">
                        <img src = "/facebook.png" height = "100%" width = "100%" />
                    </div>
                </div>
                <div className = "data">All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer
