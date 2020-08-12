import React from 'react';
import '../../index.scss';
import Profile from './GetAvatar/Profile';
import IconReset from '../../images/basura.svg';
const CardPreview = (props) => {
  const palettes = [
    {
      nameAndIcon: ' style-blue-dark',
      leftSquare: ' style-blue-medium',
      border: ' style-blue-light',
      background: ' style-blue-background',
      backgroundIcon: ' style-blue-background-icon',
    },
    {
      nameAndIcon: ' style-red-dark',
      leftSquare: ' style-red-medium',
      border: ' style-red-light',
      background: ' style-red-background',
      backgroundIcon: ' style-red-background-icon',
    },
    {
      nameAndIcon: ' style-yellow-dark',
      leftSquare: ' style-yellow-medium',
      border: ' style-yellow-light',
      background: ' style-yellow-background',
      backgroundIcon: ' style-yellow-background-icon',
    },
  ];

  const handleReset = (ev) => {
    ev.preventDefault();
    props.handleChangeInput('', true);
  };

  const styleToNumber = parseInt(props.user.style) - 1;

  return (
    <section className="imagen">
      <div>
        <button onClick={handleReset} className="button__reset">
          <img className="img-button" src={IconReset} alt="basura icon" />
          <p className="button__reset--word">reset</p>
        </button>

        <div className="card">
          <div className="card__top">
            <div
              className={
                'card__top__square-color' + palettes[styleToNumber].leftSquare
              }
            ></div>
            <div className="card__top__title">
              <div
                className={
                  'card__top__title__name' + palettes[styleToNumber].nameAndIcon
                }
              >
                {props.user.name || 'Nombre Apellido'}
              </div>
              <div className="card__top__title__role">
                {props.user.job || 'Front-end developer'}
              </div>
            </div>
          </div>

          <Profile
            photo={props.user.photo}
            backgroundClass={palettes[styleToNumber].background}
          />

          <div className="card__bottom">
            <ul className="card__bottom__list">
              <li
                className={
                  'card__bottom__list__li' +
                  palettes[styleToNumber].border +
                  `${
                    props.user.phone !== ''
                      ? palettes[styleToNumber].backgroundIcon
                      : ''
                  }`
                }
              >
                <a
                  href={'tel:' + props.user.phone || ' '}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={
                      'icon fas fa-mobile-alt' +
                      palettes[styleToNumber].nameAndIcon
                    }
                  ></i>
                </a>
              </li>
              <li
                className={
                  'card__bottom__list__li' +
                  palettes[styleToNumber].border +
                  `${
                    props.user.email !== ''
                      ? palettes[styleToNumber].backgroundIcon
                      : ''
                  }`
                }
              >
                <a
                  href={'mailto:' + props.user.email || ' '}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={
                      'icon far fa-envelope ' +
                      palettes[styleToNumber].nameAndIcon
                    }
                  ></i>
                </a>
              </li>
              <li
                className={
                  'card__bottom__list__li' +
                  palettes[styleToNumber].border +
                  `${
                    props.user.linkedin !== ''
                      ? palettes[styleToNumber].backgroundIcon
                      : ''
                  }`
                }
              >
                <a
                  href={
                    'https://www.linkedin.com/in/' + props.user.linkedin || ' '
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={
                      'icon fab fa-linkedin-in ' +
                      palettes[styleToNumber].nameAndIcon
                    }
                  ></i>
                </a>
              </li>
              <li
                className={
                  'card__bottom__list__li' +
                  palettes[styleToNumber].border +
                  `${
                    props.user.github !== ''
                      ? palettes[styleToNumber].backgroundIcon
                      : ''
                  }`
                }
              >
                <a
                  href={'https://github.com/' + props.user.github || ' '}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={
                      'icon fab fa-github-alt' +
                      palettes[styleToNumber].nameAndIcon
                    }
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPreview;
