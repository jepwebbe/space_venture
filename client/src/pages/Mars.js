import React from "react";
import "./MoonMars.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Mars1 from "../assets/images/mars1.jpg"
import Mars2 from "../assets/images/mars2.jpg"

function Mars() {
    return (
        <section className="TurePage">
            <div className="Images">
                <img src={Mars1} alt="Månen er flot" />
                <img src={Mars2} alt="Månen er flot" />
            </div>
            <div className="Text">
                <div className="TextHead">
                    <div>
                        <h1>Mars</h1>
                        <div className="Line"></div>
                        <p>Velkommen til Mars</p>
                    </div>
                    <p className="Price">1.5 MIO</p>
                </div>
                <div className="TextPara">
                    <p>
                    Du har her muligheden for med egne sanser at opleve den sagnomspundne røde planet Mars på et 14-dages luksusophold.</p>
                    <p>Hvis du går og drømmer om at veje 1/3 del af, hvad du vejer på jorden. Hvis du mener, at et døgn burde vare 40 minutter længere. Hvis du gerne vil holde ferie lidt længere væk end Spanien - nærmere betegnet 60 millioner kilometer væk! Hvis du tænker, at det kunne være dejligt med én måne mere at kigge på om natten. Ja, så er Mars stedet for dig.</p>
                    <p>Inkluderet i denne rejse er: Fuldpension på vores klimatiserede Mars-hotel med samme komfort som et 6-stjernet hotel, oplevelsestur til Mars-polernes fantastiske is-formationer, som du kan udforske på egen hånd i en af vore Mars-biler, observationsaften med studier af de to måner Phobos og Deimos samt guidede ture til diverse rumhistoriske steder.</p>
                    <hr />
                    <div>
                        <p><span>Tekst:</span> Anden tekst</p>
                        <p><span>Tekst:</span> Anden tekst</p>
                        <p><span>Tekst:</span> Anden tekst</p>
                        <p><span>Tekst:</span> Anden tekst</p>
                    </div>
                    <hr />
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

export default Mars;