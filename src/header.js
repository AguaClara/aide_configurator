import './header.css'
import React from "react"
import logo from "./aguaclara_logo.png"


function Title() {
    return (
        <div>
            <h1>
                <a href="http://aguaclara.cornell.edu/">
                    <img class="logo" src={logo} alt="logo"/>
                </a>
            </h1>
        </div>
    )
}


export default Title
