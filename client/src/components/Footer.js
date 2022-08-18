import React from "react";
import { NavLink } from "react-router-dom"
import "./Footer.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer>
            <section className="Foot1">
                <article className="Contact">
                    <h3>KONTAKT</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faPhone} /> +45 86 35 10 03</li>
                        <li><a href="mailto:info@spaceadventure.dk"><FontAwesomeIcon icon={faEnvelope} /> info@spaceadventure.dk</a></li>
                        <li><FontAwesomeIcon icon={faLocationArrow} /> Galaksevej 39, 8000 Aarhus C</li>
                    </ul>
                </article>
                <article className="ArtLinks">
                    <h3>HURTIGE LINKS</h3>
                    <ul className="Links">
                    <li><NavLink to="/rumfargen">Rumfærgen</NavLink></li>
                    <li><NavLink to="/ture">Ture</NavLink></li>
                    <li><NavLink to="/#Team">Vores team</NavLink></li>
                    <li><NavLink to="/galleri">Galleri</NavLink></li>
                    <li><NavLink to="/sikkerhed">Sikkerhed</NavLink></li>
                    </ul>
                    <button><a href="mailto:info@spaceventure.dk">Kontakt</a></button>
                </article>
            </section>
            <section className="Foot2">
                <p>© 2021 Space Venture. All rights reserved</p>
                <ul>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                    <li><a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
                <button>^</button>
            </section>
        </footer>

    );
}

export default Footer;