RollSlides();
function RollSlides() {
    let SlideCount = 0;
    let Slides = document.getElementsByClassName("SliderImage");
    let i;
    for (i = 0; i < Slides.length; i++) {
        Slides[i].style.display = "none";
    }
    SlideCount++;
    if (SlideCount > Slides.length) { SlideCount = 1 }
    Slides[SlideCount - 1].style.display = "block";
    setTimeout(RollSlides, 2000);
}

export default RollSlides;