import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";

const BRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="links-uteis" />
        <Route path="certidoes" />
        <Route path="contatos" />
      </Routes>
    </>
  );
};

export default BRoutes;
