import React from "react";
import "../../index.scss";
import CustomCard from "./CustomCard";
import CardPreview from "./CardPreview";

const Main = (props) => {
  return (
    <main className="page__main">
      <CustomCard user={props.user} handleChangeInput={props.handleChangeInput} />
      <CardPreview user={props.user} />
    </main>
  );
};

export default Main;
