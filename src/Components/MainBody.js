import React from 'react'
import Introduction from './Introduction'

function MainBody() {

    // const []

    const obj = [
        {
            url: "/F&B.png",
            name: "F&B",
        },
        {
            url: "/Hotels.png",
            name: "Hotels",
        },
        {
            url: "/Healthcare.png",
            name: "Healthcare",
        },
        {
            url: "/Banking.png",
            name: "Banking & Finance",
        },
        {
            url: "/Manufacturing.png",
            name: "Manufacturing",
        },
        {
            url: "/Logistics.png",
            name: "Logistics",
        },
        {
            url: "/FMCG.png",
            name: "FMCG",
        },
        {
            url: "/Service.png",
            name: "Service",
        },
        {
            url: "/Pharmaceutical.png",
            name: "Pharmaceutical",
        },
        {
            url: "/Transport.png",
            name: "Transport",
        },
        {
            url: "/Public&Private.png",
            name: "Public & Private Sectors",
        },
        {
            url: "/Tourism.png",
            name: "Tourism",
        },
    ]

    return (
        <div className = "body-container">
            <Introduction />
            <div className = "line-div"></div>
            <div className = "body-expertise">
                <div className = "heading">
                    <span style = {{color: "#f0560e",marginRight: "15px"}}>Expertise</span> in the following Industries
                </div>
                <div className = "desc">
                    With our diverse Industry expertise, Copper Ants endeavors to deliver world class business solutions to clients across different walks of life. Over the years, we have experienced to 
                    provide the best quality for all our projects. 
                </div>
                <div className = "industry-container">
                    {obj.map((item) => {
                        return (
                            <div className = "block">
                                <div className = "left">
                                    <div className = "image">
                                        <img src = {item.url} height = "100%" width = "100%" />
                                    </div>
                                </div>
                                <div className = "right">
                                    {item.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className = "body-mission">
                <div className = "colored-background"></div>
                <div className = "background-image"></div>
                <div className = "left">
                    Our Mission
                </div>
                <div className = "right">
                    <div className = "data">
                        Dedication, commitment, innovation, team support, functional & technical skills are our major strengths in maintaining any client. We deliver the best for our clients with the result oriented & ROI driven analysis as our major goals.
                    </div>
                </div>
            </div>
            <div className = "body-services">
                <div className = "heading">Services</div>
                <div className = "services-container">
                    <div className = "block">
                        <div className = "left">
                            <div className = "image">
                                <img src = "/mobile.png" />
                            </div>
                        </div>
                        <div className = "right">
                            <div className = "heading">Mobile Solution</div>
                            <div className = "data">
                                iOS App / Android App development / Cross 
                                Platform Application / HTML5 Application / APP 
                                Re-engineering / Mobile App Conversion
                            </div>
                        </div>
                    </div>
                    <div className = "block">
                            <div className = "left">
                                <div className = "image">
                                    <img src = "/web.png" />
                                </div>
                            </div>
                            <div className = "right">
                                <div className = "heading">Web Development</div>
                                <div className = "data">
                                    Website Design & Development /  Static and Dynamic 
                                    Website / HTML 5, CSS 3, PHP, Magento, Drupal, 
                                    Wordpress
                                </div>
                            </div>
                    </div>
                    <div className = "block">
                            <div className = "left">
                                <div className = "image">
                                    <img src = "/digital.png" />
                                </div>
                            </div>
                            <div className = "right">
                                <div className = "heading">Digital Marketing</div>
                                <div className = "data">
                                    SEO / SEM / SMO /  SMM / Content Marketing /
                                    Analytical Marketing / Email Marketing
                                    Video Marketing
                                </div>
                            </div>
                    </div>
                    <div className = "block">
                        <div className = "left">
                            <div className = "image">
                                <img src = "/branding.png" />
                            </div>
                        </div>
                        <div className = "right">
                            <div className = "heading">Branding</div>
                            <div className = "data">
                                Logo Design / Business Stationery Collateral (Letterhead, 
                                Envelope, CD Cover etc.) / Presentation Template /
                                Tone of Voice / Business Card Design
                            </div>
                        </div>
                    </div>
                    <div className = "block">
                        <div className = "left">
                            <div className = "image">
                                <img src = "/richmedia.png" />
                            </div>
                        </div>
                        <div className = "right">
                            <div className = "heading">Rich Media</div>
                            <div className = "data">
                                2D/ 3D Animation / Motion Graphics / Corporate 
                                Presentation / Explainer Video Product / App Demo 
                                Video
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className = "body-clients">
                <div className = "desc">
                    Presently, we are extending our services to 2000+ happy clients globally.   
                </div>
                <div className = "client-images">
                    <div className = "image-block">
                        <div className = "image" style = {{}}>
                            <img src = "/bookina.png" height="100%" width="100%" />
                        </div>
                        
                    </div>
                    <div className = "image-block">
                        <div className = "image" style = {{}}>
                            <img src = "/groops.png" height="100%" width="100%" />
                        </div>
                        
                    </div>
                    <div className = "image-block">
                        <div className = "image" style = {{}}>
                            <img src = "/leaftech.png" height="100%" width="100%" />
                        </div>
                        
                    </div>
                    <div className = "image-block">
                        <div className = "image" style = {{}}>
                            <img src = "/henne.png" height="100%" width="100%" />
                        </div>
                        
                    </div>
                    <div className = "image-block">
                        <div className = "image" style = {{}}>
                            <img src = "/headlines.png" height="100%" width="100%" />
                        </div>
                        
                    </div>
                    <div className = "image-block">
                        <div className = "image" style = {{}}>
                            <img src = "/jared.png" height="100%" width="100%" />
                        </div>
                        
                    </div>
                    <div className = "image-block">
                        <div className = "image" style = {{}}>
                            <img src = "/lafabrique.png" height="100%" width="100%" />
                        </div>
                        
                    </div>
                    <div className = "image-block">
                        <div className = "image" style = {{}}>
                            <img src = "/hungift.png" height="100%" width="100%" />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className = "body-form">
                <div className = "heading">
                    Get in touch 
                </div>
                <div className = "heading">
                    to discuss your project
                </div>
                <form className = "form-container">
                    <div className = "form-block">
                        <input type = "text" placeholder = "Name" required />
                    </div>
                    <div className = "form-block">
                        <input type = "text" placeholder = "Company" required />
                    </div>
                    <div className = "form-block">
                        <input type = "tel" pattern="[6789][0-9]{9}"  placeholder = "Mobile No" required />
                    </div>
                    <div className = "form-block">
                        <input type = "email" placeholder = "Email Id" required />
                    </div>
                    <div className = "button">
                        <button>Submit</button>
                    </div>
                    
                </form>
            </div> 
        </div>
    )
}

export default MainBody
