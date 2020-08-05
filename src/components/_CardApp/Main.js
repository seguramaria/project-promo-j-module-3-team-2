import React from 'react';
import '../../index.scss';
import CustomCard from './CustomCard';
import CardPreview from './CardPreview';

const Main = (props) => {
  return (
    <main className="page__main">
      <CustomCard
        user={props.user}
        handleChangeInput={props.handleChangeInput}
        collapsible={props.collapsible}
        handleCollapse={props.handleCollapse}
        updateAvatar={props.handleChangeInput}
        // isAvatarDefault={props.isAvatarDefault}
        fetchCardData={props.fetchCardData}
        //     cardSuccess={cardSuccess}
        //     cardURL={cardURL}
        //     availableButton={availableButton}
      />
      <CardPreview user={props.user} />
    </main>
  );
};

export default Main;
