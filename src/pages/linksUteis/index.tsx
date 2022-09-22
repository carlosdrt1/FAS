import { Link } from "react-router-dom";
import CardsSociais from "../../components/cardsCompartilhe";
import NavigationCard from "../../components/navigationCard";
import WhatsButton from "../../components/whatsButton";
import "./styles.css";

const LinksUteis = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p> &#62; Links Úteis</p>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle">Links Úteis</h1>
          <h3 className="tittle-h3">Agenda tributária</h3>
          <ul>
            <li>
              <a href="#a" className="nav-link">
                <p>Acessar agenda tributária</p>
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link">
                <p>Agenda receita federal</p>
              </a>
            </li>
          </ul>
          <h3 className="tittle-h3">Receita Federal</h3>
          <ul>
            <li>
              <a href="#a" className="nav-link">
                <p>Site do Simples Nacional</p>
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link">
                <p>Portal ECAC</p>
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link">
                <p>Formulários</p>
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link">
                <p>Atualizar CPF</p>
              </a>
            </li>
          </ul>
          <h3 className="tittle-h3">Danfe (vizualizador de NFE)</h3>
          <ul>
            <li>
              <a href="#a" className="nav-link">
                <p>Consultar DANFE pelo Fsist</p>
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link">
                <p>Site para geração do Danfe Online</p>
              </a>
            </li>
          </ul>
          <h3 className="tittle-h3">eSocial</h3>
          <ul>
            <li>
              <a href="#a" className="nav-link">
                <p>
                  Site com informações, orientações, cadastro de empregados,
                  dentre outros.
                </p>
              </a>
            </li>
          </ul>
          <h3 className="tittle-h3">PORTAL NOTAS DE SERVIÇO</h3>
          <ul>
            <li>
              <a href="#a" className="nav-link">
                <p>Tauá-CE</p>
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link">
                <p>Catarina-CE</p>
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link">
                <p>Iguatu-CE</p>
              </a>
            </li>
            <li>
              <a href="#a" className="nav-link">
                <p>Acopiara-CE</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <div>
            <CardsSociais />
          </div>
          <div>
            <NavigationCard />
          </div>
        </div>
      </div>
      <WhatsButton/>
    </div>
  );
};

export default LinksUteis;
