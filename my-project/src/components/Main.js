import React from 'react';
import '../index.scss';
import Form from './Form';
import CardPreview from './CardPreview';

const Main = () => {
  return (
    <main className="page__main">
      <Form />
      <CardPreview />
    </main>
  );
};

export default Main;
