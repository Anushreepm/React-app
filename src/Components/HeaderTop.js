import React from 'react'

function HeaderTop() {
    return (
        <div className = "header-top">
            <div className = "logo-block">
                <div className = "logo">
                    <img src = "/logo.png" height="100%" width="100%" />
                </div>
                
            </div>
            <div className = "header-data">
                <div style = {{}} className = "header-font-style">about</div>
                <div style = {{}} className = "header-font-style">services</div>
                <div style = {{}} className = "header-font-style">clientele</div>
                <div className = "curved-block">
                    <div className = "header-font-style" style={{color: "#2c2a29"}}>let's talk</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
