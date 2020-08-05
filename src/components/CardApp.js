import React, { useState } from 'react';
import '../index.scss';
import Footer from './Footer';
import Header from './_CardApp/Header';
import Main from './_CardApp/Main';
import { Route, Switch } from 'react-router-dom';
// import Landing from "./Landing";
import MainLanding from './_Landing/MainLanding';

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
    isAvatarDefault: true,
    // profile: { photo: '' },
  });

  // updateAvatar(img) {
  //   const {profile} = useState;
  //   setProfile(prevState => {
  //     const newProfile = {...profile, avatar: img};
  //     return {
  //       profile: newProfile,
  //       isAvatarDefault: false,
  //     }
  //   });
  // }

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
    setUser({ ...user });
  };

  // const handleRadioInput = (data) => {
  //   user[data.key] = data.value;
  // };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="landing">
            <MainLanding />
            <Footer />
          </div>
        </Route>
        <Route exact path="/cardApp">
          <div className="cardApp">
            <Header />
            <Main
              user={user}
              handleChangeInput={handleChangeInput}
              collapsible={collapsible}
              handleCollapse={handleCollapse}
              updateAvatar={handleChangeInput}
            />
            <Footer />
          </div>
        </Route>
      </Switch>
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
