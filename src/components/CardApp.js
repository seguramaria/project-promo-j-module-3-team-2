import React, { useState } from 'react';
import '../index.scss';
import Footer from './Footer';
import Header from './_CardApp/Header';
import Main from './_CardApp/Main';
import { Route, Switch } from 'react-router-dom';
import MainLanding from './_Landing/MainLanding';

const CardApp = () => {
  const userLocalStorage = JSON.parse(localStorage.getItem('user_card'));

  const defaultUser = {
    style: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
    // isAvatarDefault: true,
    url: '',
  };
  const [user, setUser] = useState(
    userLocalStorage ? userLocalStorage : defaultUser
  );

  const [collapsible, setCollapsible] = useState('collapse-1');
  const [activeShare, setActiveShare] = useState('hidden');

  const handleCollapse = (targetId) => {
    if (targetId !== collapsible) {
      setCollapsible(targetId);
    } else {
      setCollapsible('');
    }
  };

  const handleChangeInput = (data, isReset) => {
    let newUser;
    if (isReset) {
      newUser = defaultUser;
      setActiveShare('hidden');
    } else {
      newUser = { ...user };
      newUser[data.key] = data.value;
    }
    localStorage.setItem('user_card', JSON.stringify(newUser));
    setUser({ ...newUser });
  };

  const fetchCardData = () => {
    const parsedUser = { ...user, palette: user.style };

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(parsedUser),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (result) {
        const url = {
          key: 'url',
          value: result.cardURL,
        };
        handleChangeInput(url);
        setActiveShare('');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
              fetchCardData={fetchCardData}
              activeShare={activeShare}
            />
            <Footer />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default CardApp;
