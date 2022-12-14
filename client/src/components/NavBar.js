import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../assets/images/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    const [isDisplay, setIsDisplay] = useState(false);

    const handleClick = () => {
        setIsDisplay(current => !current);
    }
    return (
        <header>
            <div className="Burger" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} /></div>
            <div className="LogoBlock"><a href="/"><img src={Logo} alt="Our logo" className="Logo" /></a></div>
            <nav>
                <ul className="InternalNav" 
                style={{ 
                    display: isDisplay ? 'none' : 'flex' }}>
                    <li className="NavLi" ><NavLink activeClassName="active" to="/">Hjem</NavLink></li>
                    <li className="NavLi" ><NavLink to="/rumfargen">Rumfærgen</NavLink></li>
                    <li className="Dropdown NavLi"><NavLink to="/ture">Ture</NavLink>
                        <ul className="DropdownContent">
                            <li><NavLink to="/moon">Månen</NavLink></li>
                            <li><NavLink to="/mars">Mars</NavLink></li>
                        </ul>
                    </li>
                    <li className="NavLi"><NavLink to="/galleri">Galleri</NavLink></li>
                    <li className="NavLi"><NavLink to="/sikkerhed">Sikkerhed</NavLink></li>
                    <li className="NavLi"><NavLink to="/kontakt">Kontakt</NavLink></li>
                </ul>
                <ul className="ExternalNav">
                    <li><a rel="noreferrer" href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a rel="noreferrer" href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a rel="noreferrer" href="https://www.google.com" target="_blank"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                    <li><a rel="noreferrer" href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;