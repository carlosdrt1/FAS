import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import FaleConosco from "../../../components/faleConosco";

const Servico1 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Assessoria em RH</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle">Assessoria em RH</h1>
          <p>
            A principal função de uma assessoria de RH é auxiliar a empresa na
            obtenção de melhores resultados em relação à gestão de pessoas. Para
            isso, esse profissional deve ser capaz de diagnosticar problemas ou
            aspectos que podem ser otimizados no RH, além de definir as soluções
            e melhorias a serem feitas.
          </p>
          <p>
            Outro ponto importante da atuação é a análise do cenário atual e,
            frente aos objetivos apresentados pela empresa, estabelecer metas
            concretas e alcançáveis, bem como traçar caminhos para atingir os
            resultados esperados.
          </p>
          <h6>Áreas atuantes:</h6>
          <ul>
            <li>Desenvolvimento de profissionais</li>
            <li>Clima organizacional</li>
            <li>Departamento Pessoal</li>
            <li>Gestão estratégica de pessoas</li>
            <li>Recrutamento e seleção</li>
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

export default Servico1;
