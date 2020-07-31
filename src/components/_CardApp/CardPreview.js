import React from 'react';
import '../../index.scss';

const CardPreview = (props) => {
    console.log(props);
    /* 
    Clases js que usaban para pintar de otro color:

      const colorName = document.querySelector('.js-name-print');
      const colorIcons = document.querySelectorAll('.js-icon');
      const colorLeftSquare = document.querySelector('.js-square');
      const colorBorder = document.querySelectorAll('.js-border');
      const colorBackground = document.querySelector('.js-background');
  
    Elementos del array que utilizaban para cada parte. 
    Ejemplo: palette[0] puede ser: 'style-blue-dark', 'style-red-dark' o 'style-yellow-dark'
    
      colorName.classList.add(palette[0]);
      icon.classList.add(palette[0]); //colorIcons
      colorLeftSquare.classList.add(palette[1]);
      border.classList.add(palette[2]); //colorBorder
      colorBackground.classList.add(palette[3]);

    
    Los iconos se trataban ligeramente diferente:
    
    colorIconBackgroundLinkedin.classList.remove('style-blue-background-icon');
    const colorIconBackgroundLinkedin = document.querySelector(
      '.js-background-linkedin'
    );
    */
    const palettes = [      
      {
        nameAndIcon: ' style-blue-dark',
        leftSquare: ' style-blue-medium',
        border: ' style-blue-light',
        background: ' style-blue-background',
        backgroundIcon: ' style-blue-background-icon'
      },
      {
        nameAndIcon: ' style-red-dark',
        leftSquare:' style-red-medium',
        border:' style-red-light',
        background:' style-red-background',
        backgroundIcon:' style-red-background-icon',
      },
      {
        nameAndIcon: ' style-yellow-dark',
        leftSquare:' style-yellow-medium',
        border: ' style-yellow-light',
        background:' style-yellow-background',
        backgroundIcon:' style-yellow-background-icon',
      }
    ]
  
  // Con esto parseamos nuestro style para que sea un número y le restamos uno para que concuerde con el elemento del array al que corresponde 
  const styleToNumber = parseInt(props.user.style)-1
 
  return (
    <section className='imagen'>
      <div>
        <button className='button__reset js-reset-button'>
          <img className='img-button' src='./assets/images/basura.svg' alt='' />
          <p className='button__reset--word'>reset</p>
        </button>

        <div className='card'>
          <div className='card__top'>
            <div className={'js-square card__top__square-color'
              + palettes[styleToNumber].leftSquare}></div>
            <div className='card__top__title'>
              <div className={'js-name-print card__top__title__name' 
                + palettes[styleToNumber].nameAndIcon }>
                {props.user.name || 'Nombre Apellido'}
              </div>
              <div className='js-role card__top__title__role'>
                {props.user.job || 'Front-end developer'}
              </div>
            </div>
          </div>
          <div
            className={'card__photo js-background js__profile-image '
              + palettes[styleToNumber].background}
            id='photo'
          ></div>
          <div className='card__bottom'>
            <ul className='card__bottom__list'>
              <li className={
                  'card__bottom__list__li js-border js-background-phone' 
                  + palettes[styleToNumber].border 
                  + `${props.user.phone !== ''
                    ? palettes[styleToNumber].backgroundIcon
                    : ''}`
                }>
                <a
                  href={'tel:' + props.user.phone || ' '}
                  target='_blank'
                  className='js-phone-icon'
                >
                  <i className={'js-icon icon fas fa-mobile-alt' 
                    + palettes[styleToNumber].nameAndIcon }></i>
                </a>
              </li>
              <li className={'js-border js-background-email card__bottom__list__li'
                + palettes[styleToNumber].border 
                + `${props.user.email !== ''
                    ? palettes[styleToNumber].backgroundIcon
                    : ''}`
                }>
                <a
                  href={'mailto:' + props.user.email || ' '}
                  target='_blank'
                  className='js-email-icon'
                >
                  <i className={'js-icon icon far fa-envelope ' 
                    + palettes[styleToNumber].nameAndIcon }></i>
                </a>
              </li>
              <li className={'js-border js-background-linkedin card__bottom__list__li' 
                + palettes[styleToNumber].border 
                + `${props.user.linkedin !== ''
                    ? palettes[styleToNumber].backgroundIcon
                    : ''}`
                  }>
                <a
                  href={
                    'https://www.linkedin.com/in/' + props.user.linkedin || ' '
                  }
                  target='_blank'
                  className='js-linkedin-email js-linkedin-print'
                >
                  <i className={'js-icon icon fab fa-linkedin-in ' 
                    + palettes[styleToNumber].nameAndIcon }></i>
                </a>
              </li>
              <li className={'js-border js-background-github card__bottom__list__li' 
                + palettes[styleToNumber].border 
                + `${props.user.github !== ''
                    ? palettes[styleToNumber].backgroundIcon
                    : ''}`
                }>
                <a
                  href={'https://github.com/' + props.user.github || ' '}
                  target='_blank'
                  className='js-github-print'
                >
                  <i className={'js-icon icon fab fa-github-alt' 
                    + palettes[styleToNumber].nameAndIcon }></i>
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
