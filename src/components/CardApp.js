import React, { useState } from 'react';
import '../index.scss';
import Footer from './Footer';
import Header from './_CardApp/Header';
import Main from './_CardApp/Main';

const CardApp = () => {
  const [user, setUser] = useState({
    style: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  const [collapsible, setCollapsible] = useState('collapse-1');

  const handleCollapse = (targetId) => {
    //si el colapsable que he clickado es distinto que el guardado en el estado, seteo de nuevo el estado
    //con el valor del colapsable clickado, en caso contrario reseteo el valor del colapsable
    if (targetId !== collapsible) {
      setCollapsible(targetId);
    } else {
      setCollapsible('');
    }
  };

  const handleChangeInput = (data) => {
    user[data.key] = data.value;
    // user.name = 'foo'
    // user.job = 'foo'
    setUser({ ...user });
  };

  // const handleRadioInput = (data) => {
  //   user[data.key] = data.value;
  // };

  return (
    <div className="App">
      <Header />
      <Main
        user={user}
        handleChangeInput={handleChangeInput}
        collapsible={collapsible}
        handleCollapse={handleCollapse}
      />
      <Footer />
    </div>
  );
};

export default CardApp;

// const handleChangeInput = (data) => {
//   console.log("Cmabiando cosas...", data);
// };

// Main.handleChangeInput = CardApp.handleChangeInput

// CustomCard.handleChangeInput = Main.handleChangeInput

// Inputs.handleChangeInput = CustomCard.handleChangeInput
