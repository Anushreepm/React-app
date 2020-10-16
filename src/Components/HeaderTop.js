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
                <div style = {{marginLeft: "20px"}} className = "header-font-style">about</div>
                <div style = {{marginLeft: "20px"}} className = "header-font-style">services</div>
                <div style = {{marginLeft: "20px"}} className = "header-font-style">clientele</div>
                <div style = {{width: "177px", height: "60px", marginLeft: "20px", boxShadow: "0 8px 35px rgba(0, 0, 0, 0.21)", borderRadius: "30px", backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className = "header-font-style" style={{color: "#2c2a29"}}>let's talk</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
