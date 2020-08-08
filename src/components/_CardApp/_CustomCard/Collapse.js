import React from "react";
import "../../../index.scss";
function Collapse(props) {
  const displayPanel = (evt) => props.handleCollapse(evt.currentTarget.id);

  return (
    <section className="collapsible">
      <div
        className="collapsible__clickable--container"
        id={props.id}
        onClick={displayPanel}
      >
        <i className={props.icon}></i>
        <h2 className="collapsible__title">{props.title}</h2>
        <div className="click">
          <i className="fas fa-moon moonicondown"></i>
          <i className="fas fa-moon hidden mooniconup"></i>
        </div>
      </div>
      <div
        className={`collapsible-container ${
          props.collapsible === props.id ? "" : "hidden"
        }`}
      >
        {props.children}
      </div>
    </section>
  );
}

export default Collapse;
