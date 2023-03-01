import React from "react"
import ReactDOM from "react-dom"


function MyName() {
    return(
        <div>
            <h1>
                Hello World
            </h1>
            <p> My Name is Israel</p>
        </div>
    )
}

ReactDOM.render(<MyName />, document.getElementById("root"))