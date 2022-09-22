import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import FaleConosco from "../../../components/faleConosco";

const Servico3 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Digitalização de documentos</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle">Digitalização de documentos</h1>
          <p>
            A digitalização de documentos pressupõe transformar documentos
            físicos em arquivos digitais, para serem gerenciados em ambiente
            virtual.
          </p>
          <p>
            O documento é posto no scanner e após o processo o documento fica
            disponível na nuvem, de maneira que apenas o dono do documento e
            pessoas que ele permitir podem acessa-lo ou edita-lo. Além da
            redução de custo com armazenamento, papel e etc.
          </p>
          <h6>Vantagens:</h6>
          <ul>
            <li>Acesso facilitado a qualquer momento</li>
            <li>É possível editar online</li>
            <li>Menores chances de perder os documentos.</li>
            <li>Perceptível redução de custos</li>
            <li>Sua empresa focada na sustentabilidade</li>
            <li>Você controla quem pode acessar as informações</li>
            <li>Você economiza espaço</li>
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

export default Servico3;
