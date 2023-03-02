import React from "react"
import github from "../images/GitHub Icon.png"
import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"

function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com/EffiongIsrael8"><img src={twitter} /></a>
            <a href="https://web.facebook.com/israel.effiongrobert"><img src={facebook} /></a>
            <a href="https://github.com/trend87"> <img src={github} /></a>
            
           

        </div>
    )
}

export default Footer