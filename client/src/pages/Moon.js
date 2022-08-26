import React from "react";
import "./MoonMars.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Moon1 from "../assets/images/moon1.jpg"
import Moon2 from "../assets/images/moon2.jpg"

function Moon() {
    return (
        <section className ="TurePage">
            <div className="Images">
                <img src={Moon1} alt="Månen er flot" />
                <img src={Moon2} alt="Månen er flot" />
            </div>
            <div className="Text">
                <div className="TextHead">
                    <div>
                        <h1>Månen</h1>
                        <div className="Line"></div>
                        <p>Velkommen til Månen</p>
                    </div>
                    <p className="Price">1.5 MIO</p>
                </div>
                <div className="TextPara">
                    <p>
                        Du har her mulighed for at nyde et 14-dages luksusophold i nogle af de mest unikke omgivelser i vores solsystem - nærmere betegnet vores egen Måne.</p>
                    <p>På denne tur kan du opleve jorden dække for solen i en ”jord-formørkelse”, køre en tur på egen hånd i en af vores komfortable månebiler, springe op til 50 meter uden tilløb i de så godt som vægtløse omgivelser og ikke mindst nyde jorden stå op, når det bliver lyst. Du får desuden en helt unik mulighed for at opleve det uendelige univers, når du kigger ud på det fra den mørke side af månen. </p>
                    <p>Rejsen er inkluderet: Fuldpension, guidede ture til diverse rumhistoriske månesteder, observationsaften, hvor vi vil se nærmere på jorden, samt ikke mindst et ophold på vores klimatiserede månehotel med samme komfort som på et 6-stjernet hotel.</p>
                    <hr/>
                    <div>
                        <p><span>Tekst:</span> Anden tekst</p>
                        <p><span>Tekst:</span> Anden tekst</p>
                        <p><span>Tekst:</span> Anden tekst</p>
                        <p><span>Tekst:</span> Anden tekst</p>
                    </div>
                    <hr/>
                    <ul className="SomeNav">
                        <li>SHARE</li>
                        <li><a rel="noreferrer" href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a rel="noreferrer" href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a rel="noreferrer" href="https://www.google.com" target="_blank"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                        <li><a rel="noreferrer" href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Moon;