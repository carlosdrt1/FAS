import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import LinksUteis from "./pages/linksUteis";
import Servico1 from "./pages/servicos/servico1";
import Servico2 from "./pages/servicos/servico2";
import Servico3 from "./pages/servicos/servico3";
import SobreNos from "./pages/SobreNos";

const BRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/links-uteis" element={<LinksUteis/>}/>
        <Route path="/certidoes" />
        <Route path="/contatos" />
        <Route path="/servicos/1" element={<Servico1/>} />
        <Route path="/servicos/2" element={<Servico2/>} />
        <Route path="/servicos/3" element={<Servico3/>} />
      </Routes>
    </>
  );
};

export default BRoutes;
