import React from "react"
import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"

function MyPage() {

    return(
        <div className="container">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
        
    )
    
}


export default MyPage