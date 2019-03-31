import React, {useEffect, useState} from "react";
import {render} from "react-dom";

import "./index.css";

const slides = {
    0: () => <div>
        <h1>Hello</h1>
    </div>,
    1: () => <div>
        <h1>Slide 1</h1>
    </div>,
    2: () => <div>
        <h1>Slide 2</h1>
    </div>,
    3: ({setCurrentSlide}) => <div>
        <h1>The end</h1>
        <button className="main-button" onClick={() => setCurrentSlide(0)}>Go back</button>
    </div>

};

const slidesCount = Object.keys(slides).length;

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
            document.onkeydown = (e) => {
                switch (e.keyCode) {
                    case 37:
                        setCurrentSlide((currentSlide + slidesCount - 1) % slidesCount)
                        break;
                    case 39:
                        setCurrentSlide((currentSlide + 1) % slidesCount);
                        break;
                }
            };
            return () => {
                document.onkeydown = undefined;
            };
        }
    );


    const CurrentSlideComponent = slides[currentSlide];


    return (<div className="content">
        <CurrentSlideComponent setCurrentSlide={setCurrentSlide}/>
    </div>);
};

render(<App/>, document.getElementById('root'));
