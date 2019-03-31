import React from "react";

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

export default slides;