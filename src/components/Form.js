import React from 'react';
import '../index.scss';
import Collapse from './Collapse';

const Form = () => {
  return (
    <section className="form">
      <div className="wrapper">
        <form className="js-form">
          <Collapse />
        </form>
      </div>
    </section>
  );
};

export default Form;
