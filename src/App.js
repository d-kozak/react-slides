import React, {useEffect, useState} from "react";

import "./App.css";

const App = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
            document.onkeydown = (e) => {
                switch (e.keyCode) {
                    case 37:
                        setCurrentSlide((currentSlide + slides.length - 1) % slides.length);
                        break;
                    case 39:
                        setCurrentSlide((currentSlide + 1) % slides.length);
                        break;
                }
            };
            return () => {
                document.onkeydown = () => {
                };
            };
        }
    );

    const CurrentSlideComponent = slides[currentSlide];
    return (<div className="content">
        <CurrentSlideComponent setCurrentSlide={setCurrentSlide}/>
    </div>);
};

export default App;