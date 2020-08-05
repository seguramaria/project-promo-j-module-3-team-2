import React, { useEffect, useState } from 'react';
import '../index.scss';
import Footer from './Footer';
import Header from './_CardApp/Header';
import Main from './_CardApp/Main';
import { Route, Switch } from 'react-router-dom';
import MainLanding from './_Landing/MainLanding';

const CardApp = () => {
  const userLocalStorage = JSON.parse(localStorage.getItem('user_card'));
  debugger;
  const defaultUser = {
    style: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
    isAvatarDefault: true,
    url: '',
  };
  const [user, setUser] = useState(
    userLocalStorage ? userLocalStorage : defaultUser
  );

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
    localStorage.setItem('user_card', JSON.stringify(user));
    setUser({ ...user });
  };

  // const validateButton = () => {
  //   const {
  //     name,
  //     job,
  //     email,
  //     linkedin,
  //     github,
  //     phone,
  //     photo,
  //   } = this.state.userInfo;

  //   if (
  //     name !== '' &&
  //     job !== '' &&
  //     email !== '' &&
  //     linkedin !== '' &&
  //     github !== '' &&
  //     phone !== '' &&
  //     photo !== ''
  //   ) {
  //     return 'available';
  //   } else {
  //     return 'disable';
  //   }
  // };

  const fetchCardData = () => {
    /* const json = {
      email: 'saraalite@gmail.com',
      github: 'saraalite',
      job: 'sdfsd',
      linkedin: 'sergio-valero-garcia',
      name: 'fsdfs',
      palette: '1',
      phone: '653851305',
      photo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
    };
 */
    // const json = JSON.parse(localStorage.getItem('user'));
    // fetchCardData(json).then((result) => setURL(result));
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(user),
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
      })
      .catch(function (error) {
        console.log(error);
      });

    // .catch((error) => handleError(error));
    // setUser({
    //   isLoading: true,
    // });
  };
  // useEffect(() => {
  //   fetchCardData().then((result) => {
  //     setURL(result);
  //     console.log('result');
  //   });
  // }, []);

  const setURL = (result) => {
    if (result.success) {
      setUser({
        cardSuccess: true,
        cardURL: result.cardURL,

        // isLoading: false,
      });
    } else {
      setUser({
        cardSuccess: false,
        // isLoading: false,
      });
    }
  };

  // const handleError = (error) => {
  //   setUser({
  //     cardSuccess: false,
  //     cardURL: error,
  //     isLoading: false,
  //   });
  // };

  ////////////

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
