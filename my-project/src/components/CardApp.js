import React from 'react';
import '../index.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function CardApp() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default CardApp;
