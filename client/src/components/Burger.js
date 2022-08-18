import React from "react"

function Burger() {
    const burger = document.querySelector(".Burger");
    const burgerMenu = document.querySelector(".InternalNav");
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
    }
}
export default Burger