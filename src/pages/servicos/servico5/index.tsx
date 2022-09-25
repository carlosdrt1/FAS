import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import FaleConosco from "../../../components/faleConosco";

const Servico5 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Assessoria em Licitação</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle">Assessoria em Licitações</h1>
          <p>
            A Assessoria em Licitações e Contratos Públicos é uma excelente
            oportunidade para empresas que querem ter sucesso no mundo das
            licitações.
          </p>
          <p>
            A assessoria na licitação tem o intuito de buscar a expansão das
            opções de mercado de nossos clientes, ocupando-se de todos os
            aspectos jurídico/burocráticos do processo licitatório e evitando
            que detalhes menores sejam encarados como empecilhos que possam
            dificultar o acesso a este mercado, proporcionando ao empresário que
            se foque somente nos aspectos comerciais do negócio.
            <h6>Vantagens:</h6>
            <ul>
              <li>Redução do esforço destinado às licitações;</li>
              <li>
                Uma consultoria em licitações aumenta suas chances de vencer;
              </li>
              <li>Facilidade na elaboração de recursos administrativos;</li>
              <li>Checklist e conferência de documentação;</li>
              <li>Visão profissional sobre a participação.</li>
            </ul>
          </p>
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

export default Servico5;
