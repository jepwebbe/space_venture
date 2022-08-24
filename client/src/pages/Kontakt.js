import React from "react";
import KontaktForm from "../components/KontaktForm"
import "./Kontakt.scss"
function Kontakt() {
    return (
        <section className="Kontakt">
            <div className="MapWrap"><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=12.608892917633057%2C55.688562613985%2C12.623054981231691%2C55.693938692085794&amp;layer=mapnik"></iframe></div>
            <div className="KontaktWrap"><h1>Kontakt</h1><p>Skulle du have et spørgsmål eller to, så skriv endelig til os og vi vil kontakte dig hurtigst muligt</p></div>
            <KontaktForm />
        </section>
    )
}

export default Kontakt;