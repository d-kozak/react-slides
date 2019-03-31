import React, {useEffect, useState} from "react";

import "./App.css";

const App = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesCount = Object.keys(slides).length;

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

export default App;