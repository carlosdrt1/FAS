import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import FaleConosco from "../../../components/faleConosco";

const Servico5 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Recarga de cartuchos</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle">Recarga de cartuchos em equipamentos</h1>
          <p>
            As impressoras a jato de tinta, atualmente, são as mais vendidas.
            Grandes empresas as vendem a baixos custos e depois exigem valores,
            geralmente, abusivos, sobre acessórios e principalmente cartuchos
            novos.
          </p>
          <p>
            O recondicionamento de cartuchos de tinta consiste, basicamente, em
            reaproveitar cartuchos originais, enchendo-os novamente com tinta, o
            que tem sido amplamente valorizado pelo mercado da informática. Isso
            ocorre, dentre outros motivos, por possibilitar a obtenção de um
            cartucho a baixo custo, se comparado com os novos.
          </p>
          <h6>Importancia de recarregar:</h6>
          <p>
            A principal vantagem de utilizar cartuchos reciclados é uma economia
            em torno de 50% em relação aos originais. Reciclando cartuchos, o
            consumidor ainda colabora com o meio ambiente, tendo em vista que os
            componentes plásticos constituintes dos cartuchos demoram cerca de
            200 anos para se degradar.
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
