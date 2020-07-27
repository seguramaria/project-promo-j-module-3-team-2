import React, { useState } from "react";
import "../index.scss";
import Inputs from "./_Form/Inputs";

function Collapse(props) {
  // const displayPanel = (evt) => props.handleCollapse(evt.currentTarget.id);
  // const Collapse = (props) => {
  //   const [isOpen, setIsOpen] = useState(true);
  return (
    <section className="collapsible">
      <div
        className="collapsible__clickable--container"
        // onClick={displayPanel}
        // className={`collapse-item ${
        //   props.activePanel === props.id ? "active" : ""
        // }`}
      >
        <i className={props.icon}></i>
        <h2 className="collapsible__title">{props.title}</h2>
        <div className="click">
          <i className="fas fa-moon moonicondown"></i>
          <i className="fas fa-moon hidden mooniconup"></i>
        </div>
      </div>
      <div className="collapsible-container">{props.children}</div>
    </section>
  );
}

export default Collapse;
