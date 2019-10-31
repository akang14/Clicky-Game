import React from "react";
import "./Header.css";


// Header
const Header = props => (

    <div id="header" className="container-fluid">
        <span className="headerSection" id="headerLeft">    
        </span>
        <span className="headerSection">
            <h4 id="instructions">Click on an image to earn points, but don't click on any of them more than once!</h4>
        </span>
    </div>
)
export default Header;