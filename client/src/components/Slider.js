import React from "react";
import { useState, useRef, useEffect } from "react";
import Banner1 from "../assets/images/banner1.jpg";
import Banner2 from "../assets/images/banner2.jpg";
import Banner3 from "../assets/images/banner3.jpg";
import "./Slider.scss";
const images = [Banner1, Banner2, Banner3];

const delay = 5000;
// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
export default function Slideshow() {
    /*     const [index, setIndex] = React.useState(0);
    
        React.useEffect(() => {
            setTimeout(
                () =>
                    setIndex((prevIndex) =>
                        prevIndex === images.length - 1 ? 0 : prevIndex + 1
                    ),
                delay
            );
    
            return () => { };
        }, [index]); */
    // Daniels code below, as code above acted out bc of setTimeout apparently

    //Keeps track of the current index
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <section className="slideshow">
            {/* translate moves the slider so that the next image is showed */}
            <div className="slideshowSlider"
                style={{ transform: `translateY(${-index * 38}%)` }}>
                {/* Maps through the images array */}
                {images.map((image, index) => (
                    <img className="slide" key={index} src={image} alt="Rummet er mægtigt" />
                ))}
            </div>
            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </section>
    );
}
