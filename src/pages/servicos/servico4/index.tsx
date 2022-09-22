import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import FaleConosco from "../../../components/faleConosco";

const Servico4 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Consultoria em publicidade</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle">Consultoria em publicidade</h1>
          <p>
            A consultoria para agências de publicidade é um trabalho que tem
            apontado direcionamentos eficientes em comunicação e gestão,
            combinações do futuro para qualquer agência que deseja permanecer
            ativa no mundo VUCA (Volatilidade, incerteza, complexidade e
            ambiguidade).
          </p>
          <p>
            O profissional consultor fará a elaboração de um diagnóstico para
            compreender os fatores que estão interferindo nos objetivos da
            empresa que, nesse caso, são as metas vendas.
          </p>
          <p>
            De posse dessas informações, será desenvolvido um plano de marketing
            com ações para solucionar os problemas identificados e atingir os
            objetivos propostos.
          </p>
          <p>
            A consultoria de marketing pode ser útil também para as empresas que
            querem ganhar visibilidade no mercado, que desejam ser reconhecidas
            ou que querem firmar sua identidade e posicionamento.
          </p>
          <h6>Como o diagnóstico é feito?:</h6>
          <ul>
            <li>
              conhecimento dos valores, missão e objetivos, em curto, médio e
              longo prazo
            </li>
            <li>mapeamento da presença online da marca</li>
            <li>
              confirmação dos objetivos pós-análise dos dados e diagnóstico
            </li>
            <li>indicação do plano estratégico adequado para as melhorias.</li>
          </ul>
          <h6>Demandas a serem atendidas:</h6>
          <ul>
            <li>Ouvir</li>
            <li>Propor novas estratégias</li>
            <li>Enxergar sob a óptica do cliente da agência</li>
            <li>
              Enxergar sob a óptica do cliente da empresa que contrata a
              agência
            </li>
            <li>Ordenar informações</li>
            <li>Solução tomada a partir da integração dessas perspectivas</li>
            <li>Mensurar resultados.</li>
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

export default Servico4;
