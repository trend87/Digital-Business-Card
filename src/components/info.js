import React from "react"
import profileImage from "../images/library1.jpg"
import mail from "../images/mail.png"
import linkedin from "../images/linkedin.png"

function Info() {
    return(
        <div className="image-container">
            <img src={profileImage} className="profile-image"/>
            
            <div className="image-content">
                
                <h3>Israel E. Robert</h3>
                <p>Frontend Developer</p>
               
                
            </div>

            <div className="info-buttons">
                <button className="mail-button"> <img src={mail}/> Email</button>
                <button className="link-button"> <img src={linkedin} /> LinkedIn</button>
            </div>
            
        </div>
    )
}


export default Info
