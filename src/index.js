import React from "react";
import {render} from "react-dom";

import "./index.css";

import App from "./App.js";
import slides from "./slides";


render(<App slides={slides}/>, document.getElementById('root'));
