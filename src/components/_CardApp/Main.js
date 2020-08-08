import React from "react";
import "../../index.scss";
import CustomCard from "./CustomCard";
import CardPreview from "./CardPreview";

const Main = (props) => {
  return (
    <main className="page__main">
      <CustomCard
        user={props.user}
        handleChangeInput={props.handleChangeInput}
        collapsible={props.collapsible}
        handleCollapse={props.handleCollapse}
        updateAvatar={props.handleChangeInput}
        fetchCardData={props.fetchCardData}
      />
      <CardPreview
        user={props.user}
        handleChangeInput={props.handleChangeInput}
      />
    </main>
  );
};

export default Main;
