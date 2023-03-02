import React from "react"
import profileImage from "../images/me.jpg"
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
                <button className="mail-button" > <a href="mailto:israelrobert87@gmail.com" ><img src={mail}/> Email </a> </button>
                <button className="link-button"> <a href="https://linkedin.com/in/israel-robert/"><img src={linkedin} />Linkedin </a> </button>
            </div>
            
        </div>
    )
}


export default Info
