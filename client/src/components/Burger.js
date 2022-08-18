import { useState } from "react";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Burger() {
    const [isDisplay, setIsDisplay] = useState(false);

    const handleClick = () => {
        setIsDisplay(current => !current);
    };
    return (
        <div className="Burger" style={{ display: isDisplay ? 'none' : 'block' }}
        onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} /></div>

    )

    /*     const burger = document.querySelector(".Burger");
        const burgerMenu = document.getElementsByClassName(".InternalNav");
        burger.addEventListener("click", mobileMenu);
        function mobileMenu() {
            if (burgerMenu.style.display !== "flex") {
                burgerMenu.style.display = "flex";
                burger.lastChild.style.display = "block";
                burger.firstChild.style.display = "none";
    
            } else {
                burgerMenu.style.display = "none";
                burger.lastChild.style.display = "none";
                burger.firstChild.style.display = "block";
            }
        } */
}
export default Burger