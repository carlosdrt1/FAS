import React from "react";
import "./App.css";
import CardsSociais from "./components/cardsCompartilhe";
import NavBar from "./components/navBar";
import WhatsButton from "./components/whatsButton";
import SobreNos from "./pages/SobreNos";

function App() {
  return (
    <>
      <NavBar />
      <SobreNos/>
      <WhatsButton />
    </>
  );
}

export default App;
