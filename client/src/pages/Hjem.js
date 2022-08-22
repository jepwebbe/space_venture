import React from "react";
import { NavLink } from "react-router-dom";
import "./Hjem.scss";
import Slideshow from "../components/Slider";
import Moon from "../assets/images/moon-btn.jpg";
import Mars from "../assets/images/mars-btn.jpg";
import OmosImg from "../assets/images/om-os.jpg";
import Diana from "../assets/images/diana.jpg";
import Peter from "../assets/images/peter.jpg";
import Jill from "../assets/images/jill.jpg";
import James from "../assets/images/james.jpg";
import NyhedsbrevForm from "../components/NyhedsbrevForm";
import BaggrundNyhedsbrev from "../assets/images/newsmail-bg.jpg";

function Hjem() {

    return (
        <main>
            <Slideshow />
            <section className="TureLinks">
                <NavLink to="/ture#TureMoon•"><div className="ImageContainer">
                    <h3>Månen</h3>
                    <div className="HoverImage" style={{ backgroundImage: `url(${Moon})` }}>
                    </div>
                </div>
                </NavLink>

                <NavLink to="/ture#TureMars"><div className="ImageContainer">
                    <h3>Mars</h3>
                    <div className="HoverImage" style={{ backgroundImage: `url(${Mars})` }}>
                    </div>
                </div>
                </NavLink>
            </section>
            <section className="Omos">
                <img src={OmosImg} alt="Rummet er for alle" />
                <div>
                    <h2>Lidt om os</h2>
                    <h3>Oplev nye horisonter</h3>
                    <div className="Line"></div>
                    <p>I foråret 2075 blev Space Venture lanceret som det første danske firma, der udbyder charterrejser til Mars og Månen. Det betyder, at også du nu får mulighed for at sætte dit fodaftryk på Månen eller Mars. Vi er stolte af at byde dig velkommen til vores nye hjemmeside, hvor vi håber, du finder lige netop de oplevelser og den information, du søger.</p>
                    <button><NavLink to="/kontakt">Kontakt</NavLink></button>
                </div>
            </section>
            <section id="Team">
                <h2>Vores team</h2>
                <div className="TeamGrid">
                    <article><img src={Diana} alt="Vores ansatte" />
                        <h3>Diana Robinson</h3>
                        <h4>C.E.O</h4>
                        <p>+45 23 34 45 56</p>
                    </article>
                    <article><img src={Peter} alt="Vores ansatte" />
                        <h3>Peter McMillan</h3>
                        <h4>Rejseagent</h4>
                        <p>+45 84 58 20 23</p>
                    </article>
                    <article><img src={Jill} alt="Vores ansatte" />
                        <h3>Jill Peterson</h3>
                        <h4>Turkonsulent</h4>
                        <p>+45 34 15 56 34</p>
                    </article>
                    <article><img src={James} alt="Vores ansatte" />
                        <h3>James Smith</h3>
                        <h4>PR-manager</h4>
                        <p>+45 89 47 67 36</p>
                    </article>
                </div>
            </section>
            <section className="Nyhedsbrev" style={{ backgroundImage: `url(${BaggrundNyhedsbrev})` }}>
                <h2>Tilmeld dig og få 25% rabat</h2>
                <p>Tilmeld dig vores nyhedsbrev og få 25% rabat på din første tur!</p>
                <NyhedsbrevForm />
            </section>
        </main>
    )
}

export default Hjem;