/**
 * ************************************
 *
 * @module  index.js
 * @author  julie, tim
 * @date    apr 26, 2018
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */
// import everything

import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("app"));
