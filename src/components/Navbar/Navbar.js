import React from "react";
import "./Navbar.css";

const Navbar = props => (

    <div id="navbar" className="container-fluid">

        <span className="navItem" id="navbarLeft">   
        </span>
        <span className="navItem" id="navbarMiddle">
        <img id="logo" src="https://fontmeme.com/permalink/191028/3b699a1acdaf6c59eb4f9e4a4ee8b72b.png" alt="pokemon-font" border="0" style={{height:50,width:200,marginTop:20,marginLeft:-100}}></img>
        </span>
        <span className="navItem" id="navbarRight">
                <p className="score">
                    TOP SCORE: {props.topScore}
                </p>
                <p className="score">
                    CURRENT SCORE: {props.score}
                </p>
        </span>

    </div>

)

export default Navbar;