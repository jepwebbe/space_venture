import React from "react";
import { NavLink } from "react-router-dom"
import "./NavBar.scss"
import Logo from "../assets/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

function NavBar() {
    return (
        <header>
            <div className="Burger"><p>Burger</p></div>
            <a href="/"><img src={Logo} alt="Our logo" className="Logo" /></a>
            <nav>
                <ul className="InternalNav">
                    <li><NavLink activeClassName="active" to="/">Hjem</NavLink></li>
                    <li><NavLink to="/rumfargen">Rumfærgen</NavLink></li>
                    <li className="Dropdown"><NavLink to="/ture">Ture</NavLink>
                        <ul className="DropdownContent">
                            <li><NavLink to="/ture#manen">Månen</NavLink></li>
                            <li><NavLink to="/ture#mars">Mars</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/galleri">Galleri</NavLink></li>
                    <li><NavLink to="/sikkerhed">Sikkerhed</NavLink></li>
                    <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                </ul>
                <ul className="ExternalNav">
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;