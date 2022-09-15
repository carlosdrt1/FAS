import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import WhatsButton from "./components/whatsButton";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <WhatsButton />
    </>
  );
}

export default App;
