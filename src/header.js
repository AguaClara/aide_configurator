import './header.css'
import React from "react"
import logo from "./aguaclara_logo.png"


function Title() {
    return (
        <div>
            <h1>
                {/* <a href="http://aguaclara.cornell.edu/">
                    <img class="logo" src={logo} alt="logo"/>
                </a> */}
                <div className="topnav">
                <a className="active" href="http://aguaclara.cornell.edu/">
                    <img className="logo" src={logo} alt="logo"/>
                </a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#about">AIDE Configurator</a>
            </div>
            </h1>
            
        </div>
    )
}


export default Title
