import React from "react";
import "./style.css";

function Navbar(props) {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="">
            <ul className="navbar-nav">
                <li className="brand">
                    Clicky Game
            </li>
                <li className="nav-item">
                    {props.resultText}
            </li>
                <li className="nav-item">
                    Score: {props.score}  |  Top Score: {props.topScore}
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar;