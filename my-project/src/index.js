import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./components/CardApp"; //Aquí vamos cambiando la línea (CardApp o Landing) hasta la lección 3.9.

ReactDOM.render(
  <React.StrictMode>{<App />}</React.StrictMode>,
  document.getElementById("root")
);
