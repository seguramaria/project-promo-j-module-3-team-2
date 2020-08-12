import React from 'react';
import '../../index.scss';
import Collapse from './_CustomCard/Collapse';
import Inputs from './_CustomCard/_Collapse/Inputs';
import GetAvatar from './GetAvatar/GetAvatar';

const CustomCard = (props) => {
  const handleFetchCardData = (ev) => {
    ev.preventDefault();
    props.fetchCardData();
  };

  return (
    <section className='form'>
      <div className='wrapper'>
        <form>
          {/* DESIGN */}

          <Collapse
            handleCollapse={props.handleCollapse}
            collapsible={props.collapsible}
            //activePanel={props.activePanel}
            id='collapse-1'
            icon='far fa-object-ungroup icon'
            title='Diseña'
          >
            <div className='colors-container'>
              <span className='form__design__subtitle'>colores</span>
              <div className='styles'>
                <div className='form__design__style1'>
                  <label className='style-blue'>
                    <div className='option'>
                      <Inputs
                        palette='1'
                        id='1'
                        type='radio'
                        value='green'
                        name='style'
                        required
                        handleChangeInput={props.handleChangeInput}
                        checked={props.user.style === '1'}
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
                      <Inputs
                        id='2'
                        type='radio'
                        value='red'
                        name='style'
                        required
                        handleChangeInput={props.handleChangeInput}
                        checked={props.user.style === '2'}
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
                      <Inputs
                        id='3'
                        type='radio'
                        value='yellow'
                        name='style'
                        required
                        handleChangeInput={props.handleChangeInput}
                        checked={props.user.style === '3'}
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
            </div>
          </Collapse>

          {/* FILL */}
          <Collapse
            handleCollapse={props.handleCollapse}
            collapsible={props.collapsible}
            id='collapse-2'
            title='Rellena'
            icon='far fa-keyboard icon'
          >
            <section className='form__section'>
              <div className='form__section__signup '>
                <Inputs
                  label='Nombre Completo'
                  asterisk='*'
                  placeholder='Ej: Merche Lios'
                  id='name'
                  type='text'
                  name='name'
                  handleChangeInput={props.handleChangeInput}
                  value={props.user.name}
                />
                <Inputs
                  label='Puesto'
                  asterisk='*'
                  placeholder='Ej: Front-end'
                  id='job'
                  type='text'
                  name='job'
                  handleChangeInput={props.handleChangeInput}
                  value={props.user.job}
                />
                <GetAvatar
                  photo={props.user.photo}
                  // isAvatarDefault={props.user.isAvatarDefault}
                  updateAvatar={props.handleChangeInput}
                />

                <Inputs
                  label='Email'
                  asterisk='*'
                  placeholder='Ej: merche@gmail.com'
                  id='email'
                  type='email'
                  name='email'
                  handleChangeInput={props.handleChangeInput}
                  value={props.user.email}
                />
                <Inputs
                  label='Teléfono'
                  asterisk='*'
                  placeholder='Ej: 779744561'
                  id='phone'
                  type='number'
                  name='phone'
                  handleChangeInput={props.handleChangeInput}
                  value={props.user.phone}
                />

                <Inputs
                  label='Linkedin'
                  asterisk='*'
                  placeholder='Ej: merche'
                  id='linkedin'
                  type='text'
                  name='linkedin'
                  handleChangeInput={props.handleChangeInput}
                  target='_blank'
                  value={props.user.linkedin}
                />
                <Inputs
                  label='Github'
                  className='input__github'
                  asterisk='*'
                  placeholder='Ej: merchelios'
                  id='github'
                  type='text'
                  name='github'
                  handleChangeInput={props.handleChangeInput}
                  value={props.user.github}
                  target='_blank'
                />
              </div>
            </section>
          </Collapse>

          {/* SHARE */}
          <Collapse
            handleCollapse={props.handleCollapse}
            collapsible={props.collapsible}
            id='collapse-3'
            icon='fa fa-share-alt icon'
            title='Comparte'
          >
            <section className='form__share'>
              <div className='form__share__button '>
                <button
                  type='submit'
                  value='Enviar'
                  className={`form__share__button__button ${props.availableButton}`}
                  onClick={handleFetchCardData}
                >
                  <i className='far fa-address-card'></i>
                  crear tarjeta
                </button>
              </div>
              <div className=' twitter '>
                <p className=' twitter-paragraph'>
                  ✨ Aquí tienes tu tarjeta de visita Sailor Code ✨
                </p>
                <a
                  href={props.user.url}
                  className='twitter-url response'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {props.user.url}
                </a>
                <a
                  className='twitter-share-button twitter-button'
                  href={`https://twitter.com/intent/tweet?text=✨He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards%20by%20Sailor%20Moon✨%0A&hashtags=adalaber,promoJemison ${props.user.url}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='twitter-link'>
                    <i className='fab fa-twitter'></i>
                    Compartir en twitter
                  </span>
                </a>
              </div>
            </section>
          </Collapse>
        </form>
      </div>
    </section>
  );
};

export default CustomCard;
