import React, { useState } from "react";
import "../index.scss";
import Footer from "./Footer";
import Header from "./_CardApp/Header";
import Main from "./_CardApp/Main";

const CardApp = () => {
  const [state, setState] = useState({
    palette: 1,
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    // photo: "",
  });

  // const handleCollapse = (targetId) => {
  //   //si el colapsable que he clickado es distinto que el guardado en el estado, seteo de nuevo el estado
  //   //con el valor del colapsable clickado, en caso contrario reseteo el valor del colapsable
  //   if (targetId !== state.activePanel) {
  //     setState({ activePanel: targetId });
  //   } else {
  //     setState({ activePanel: "" });
  //   }
  // };

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default CardApp;
