import React from 'react';
import '../index.scss';
import Collapse from './Collapse';

const Form = () => {
  return (
    <section className='form'>
      <div className='wrapper'>
        <form className='js-form'>
          <Collapse title='Diseña'>
            <span className='form__design__subtitle'>colores</span>
            <div className='styles'>
              <div className='form__design__style1'>
                <label className='style-blue'>
                  <div className='option'>
                    <input
                      id='style1'
                      type='radio'
                      value='green'
                      name='style'
                      className='js-input-blue'
                      required
                      checked
                    />
                  </div>
                  <div className='colors'>
                    <div className='square one'></div>
                    <div className='square two'></div>
                    <div className='square three'></div>
                  </div>
                </label>
              </div>
              <div className='form__design__style2'>
                <label className='style-red'>
                  <div className='option'>
                    <input
                      id='style2'
                      type='radio'
                      value='red'
                      name='style'
                      className='js-input-red'
                      required
                    />
                  </div>
                  <div className='colors'>
                    <div className='square one'></div>
                    <div className='square two'></div>
                    <div className='square three'></div>
                  </div>
                </label>
              </div>
              <div className='form__design__style3'>
                <label className='style-yellow'>
                  <div className='option'>
                    <input
                      id='style3'
                      type='radio'
                      value='colorMix'
                      name='style'
                      className='js-input-yellow'
                      required
                    />
                  </div>
                  <div className='colors'>
                    <div className='square one'></div>
                    <div className='square two'></div>
                    <div className='square three'></div>
                  </div>
                </label>
              </div>
            </div>
          </Collapse>
        </form>
      </div>
    </section>
  );
};

export default Form;
