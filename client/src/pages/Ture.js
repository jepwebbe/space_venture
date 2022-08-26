import React from "react";
import { NavLink } from "react-router-dom";

import BannerTure from "../assets/images/banner-ture.jpg";
import Mars1 from "../assets/images/mars1.jpg";
import Moon1 from "../assets/images/moon1.jpg";

import "./Ture.scss";

function Ture() {
    return (
        <section className="Ture">
            <h1 style={{ backgroundImage: `url(${BannerTure})` }}>Ture</h1>
            <div className="TureWrap">
                <article id="TureMoon">
                    <img src={Mars1} alt="Rummet er mægtigt" />
                    <div className="TureRight">
                        <p className="Price">1.5 MIO</p>
                        <h2>Månen</h2>
                        <p>Lorem ipsum innit</p>
                        <button><NavLink to="/moon">Se mere</NavLink>
</button>
                    </div>
                </article>
                <article id="TureMars">
                    <img src={Moon1} alt="Rummet er mægtigt" />
                    <div className="TureRight">
                        <p className="Price">1.5 MIO</p>
                        <div>
                        <h2>Mars</h2>
                        <p>Lorem ipsum innit</p>
                        <button><NavLink to="/mars">Se mere</NavLink></button>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Ture;