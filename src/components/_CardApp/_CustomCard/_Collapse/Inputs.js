import React from "react";
import "../../../../index.scss";

const Inputs = (props) => {
  const handleChange = (ev) => {
    const target = ev.target;
    const value = target.value;
    const id = target.id;
    props.handleChangeInput({
      key: id,
      value: value,
    });
  };
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
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Inputs;
