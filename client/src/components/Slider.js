import React from "react";
import Banner1 from "../assets/images/banner1.jpg";
import Banner2 from "../assets/images/banner2.jpg";
import Banner3 from "../assets/images/banner3.jpg";
import "./Slider.scss";
const images = [Banner1, Banner2, Banner3];

const delay = 10000;
// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
export default function Slideshow() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => { };
    }, [index]);


    return (
        <section className="slideshow">
            <div className="slideshowSlider"
                style={{ transform: `translateY(${-index * 720}px)` }}>
                {images.map((image, index) => (
                    <img className="slide" key={index} src={image} />
                ))}
            </div>
            <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                    ></div>
                ))
                }
            </div>
        </section>
    );
}
