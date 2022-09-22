import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import FaleConosco from "../../../components/faleConosco";

const Servico2 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Assessoria em controle interno</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle">Assessoria em controle interno</h1>
          <p>
            A assessoria em controle interno tem um importante papel, por
            resguardar a entidade pública por meio de orientações preventivas
            nas áreas contábil, financeira, econômica e patrimonial e
            administrativa, sempre com vistas a atender os princípios
            norteadores da Administração pública, preservar recursos e proteger
            os bens patrimoniais.
          </p>
          <p>
            Os controles internos ajudam a prevenir erros e irregularidades, por
            isto, um planejamento organizacional de todos os métodos e
            procedimentos adotados dentro de uma empresa devem ser elaborados,
            com a finalidade de identificar quais controles internos são mais
            apropriados para cada empresa
          </p>
          <h6>Importancia:</h6>
          <ul>
            <li>Salvaguardar o ativo;</li>
            <li>Desenvolvimento do negócio;</li>
            <li>Resultado das operações.</li>
          </ul>
          <h6>Objetivos:</h6>
          <ul>
            <li>Cumprir com seu objetivo social</li>
            <li>atender às necessidades e expectativas de seus clientes;</li>
            <li>
              proporcionar um ambiente rico e saudável para as pessoas que ali
              trabalhem.
            </li>
          </ul>
          <div>
            <FaleConosco />
          </div>
        </div>
        <div className="col-lg-3 d-flex flex-column justify-content-around">
          <div>
            <CardsSociais />
          </div>
          <div>
            <NavigationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servico2;
