import React, { useState } from 'react';
import '../index.scss';
import Inputs from './_Form/Inputs';

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <section className='collpasable'>
        {/* <Collapse title="Diseña" icon="fa-object-ungroup"> */}
        <h2 className='collpasable__title'>
          <i className='far fa-object-ungroup icon'></i>
          {props.title}
          <div className='click'>
            <button>
              <i className='fas fa-moon moonicondown'></i>
            </button>
            <button>
              <i className='fas fa-moon hidden mooniconup'></i>
            </button>
          </div>
        </h2>
        <div className='collpasable-container hidden'>{props.children}</div>
      </section>
    </div>
  );
};

export default Collapse;
