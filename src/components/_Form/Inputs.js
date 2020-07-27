import React from 'react';
import '../../index.scss';

const Inputs = () => {
  return (
    <div>
      <label for="name"> Nombre Completo</label>
      <span className="asterisk">*</span>
      <input
        className="js-input js-name"
        placeholder="Ej: Merche Lios"
        id="name"
        type="text"
        name="name"
        required
      />
    </div>
  );
};

export default Inputs;
