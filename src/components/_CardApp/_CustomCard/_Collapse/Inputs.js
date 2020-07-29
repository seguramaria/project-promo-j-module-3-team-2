import React from "react";
import "../../../../index.scss";

const Inputs = (props) => {
  return (
    <div>
      <label htmlFor="name"> {props.label}</label>
      <span className="asterisk">*</span>
      <input
        //className='js-input js-name'
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        name={props.name}
        required
      />
    </div>
  );
};

export default Inputs;
