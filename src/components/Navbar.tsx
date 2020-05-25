import React from "react";
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper grey darken-3">
            <NavLink to="/" className="brand-logo left ml-4">ToDoApp</NavLink>
            <ul id="nav-mobile" className="right">
                <li><NavLink to="/">Todos</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    </nav>
)

export default Navbar;