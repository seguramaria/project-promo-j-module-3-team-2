import React from 'react';
import '../../index.scss';
import CustomCard from './CustomCard';
import CardPreview from './CardPreview';

const Main = () => {
  return (
    <main className='page__main'>
      <CustomCard />
      <CardPreview />
    </main>
  );
};

export default Main;
