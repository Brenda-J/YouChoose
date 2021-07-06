import React, { useState, useEffect } from 'react';

export default function Slideshow({ images = [], interval = 3000 }) {
    const [thumbnails, setThumnails] = useState([]);
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(() => {
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + images[currentSlide] + "')"
        });

        if (currentSlide > 0) {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[currentSlide - 1] + "')"
            });
        } else {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[images.length - 1] + "')"
            });
        }

        if (currentSlide === images.length - 1) {
            setNextSlideStyle({
                backgroundImage: "url('" + images[0] + "')"
            });
        } else {
            setNextSlideStyle({
                backgroundImage: "url('" + images[currentSlide + 1] + "')"
            });
        }

        const loop = setInterval(() => {
            if (currentSlide === images.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, interval);
        return () => clearInterval(loop);
    }, [images, currentSlide, interval]);

    function previous() {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(thumbnails.length - 1);
        }
    }

    function next() {
        if (currentSlide === thumbnails.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    //     render() {
    //         var slideshows = document.querySelectorAll('[data-component="slideshow"]');
    //         slideshows.forEach(initSlideShow);

    //         function initSlideShow(slideshow) {
    //             var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
    //             var index = 0, time = 4000;
    //             slides[index].classList.add('active');

    //             setInterval(() => {
    //                 slides[index].classList.remove('active');

    //                 index++;
    //                 if (index === slides.length) index = 0;

    //                 slides[index].classList.add('active');

    //             }, time);
    //         }

    //         // this.forceUpdate();

    //         return (
    //             <div className="slide-show" >
    //                 <div id="slideshow-example" data-component="slideshow">
    //                     <div role="list">
    //                         <div class="slide">
    //                             <img src="https://static.vecteezy.com/system/resources/previews/000/463/565/original/healthy-food-clipart-vector.jpg" alt="First Image"></img>
    //                         </div>
    //                         <div class="slide">
    //                             <img src="https://i.ytimg.com/vi/krgkUXrOpvg/maxresdefault.jpg" alt="Second Image"></img>
    //                         </div>
    //                         <div class="slide">
    //                             <img src="https://image.freepik.com/free-vector/panda-eat-pizza-slice-cartoon-illustration_138676-1500.jpg" alt="Third Image"></img>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }

     return (
        <section className="slideshow">
            <div className="slide-holder">
                <section className="slide previous-slide">
                    <div style={previousSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail"></div>
                </section>
                <section className="slide next-slide">
                    <div style={nextSlideStyle} className="slide-thumbnail"></div>
                </section>
            </div>

            <div className="slideshow-controller">
                <span onClick={previous}>Previous</span>
                <span onClick={next}>Next</span>
            </div>
        </section>
    )
}