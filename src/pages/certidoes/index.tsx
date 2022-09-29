import { Link } from "react-router-dom";
import view from "../../assets/images/view.svg";
import Download from "../../assets/images/download.svg";
import CardsSociais from "../../components/cardsCompartilhe";
import FaleConosco from "../../components/faleConosco";
import NavigationCard from "../../components/navigationCard";
import "./styles.css";

const Certidoes = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link to="/" className="nav-link" reloadDocument={true}>
          Início&nbsp;
        </Link>
        <p> &#62; Certidões</p>
      </div>
      <h1 className="tittle">Certidões</h1>
      <div className="row">
        <div className="col-lg-9 text-certidoes">
          <p>
            Certidão é o documento que confirma não haver pendências financeiras
            ou processuais em nome da Pessoa Jurídica ou Física, também serve
            para bem. Normalmente, as certidões negativas são requeridas em
            processos de licitação, de concorrência, de cadastro ou homologações
            perante a fornecedores, bancos e empréstimos.
          </p>
          <p>Dentre as principais trabalhamos com essas 6:</p>
          <ul>
            <li>Debitos Federais</li>
            <li>Debitos Estaduais</li>
            <li>Debitos Municipais</li>
            <li>Debitos Trabalhistas</li>
            <li>FGTS</li>
            <li>Falencia Concordata</li>
          </ul>
          <FaleConosco />
        </div>
        <div className="col-lg-3 col-md-6 navigation-certidoes">
          <div>
            <CardsSociais />
          </div>
          <div>
            <NavigationCard />
          </div>
        </div>
      </div>
      <ol className="list-group shadow">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div>Débitos Federais</div>
          </div>
          <div className="align-self-center">
            <a href="https://drive.google.com/file/d/1tuWR4gbFQ2BDoE8PekFbu0zQ5xBcqGYH/view" target="_blank" rel="noopener noreferrer">
              <img src={Download} alt="" />
            </a>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div>Debitos Estaduais</div>
          </div>
          <div className="align-self-center">
            <a href="https://drive.google.com/file/d/1Z9pYonJRUGTCS76sbGapCoFyKKgh69Ut/view" target="_blank" rel="noopener noreferrer">
              <img src={Download} alt="" />
            </a>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div>Debitos Municipais</div>
          </div>
          <div className="align-self-center">
            <a href="https://drive.google.com/file/d/1SIctkjvYs0kriJJ8JM39kXSK4Ye_qpXf/view" target="_blank" rel="noopener noreferrer">
              <img src={Download} alt="" />
            </a>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div>Debitos Trabalhistas</div>
          </div>
          <div className="align-self-center">
            <a href="https://drive.google.com/file/d/1Pfiz6gBYS5gO4_cbXZWAOM3H98WuzOwa/view" target="_blank" rel="noopener noreferrer">
              <img src={Download} alt="" />
            </a>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div>FGTS</div>
          </div>
          <div className="align-self-center">
            <a href="https://drive.google.com/file/d/1cJFAHRQ2n3sXPPQf7CYLMfXA-xZQJKY8/view" target="_blank" rel="noopener noreferrer">
              <img src={Download} alt="" />
            </a>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div>Falencia Concordata</div>
          </div>
          <div className="align-self-center download">
            <a href="https://drive.google.com/file/d/1lpKA23XqTYO6TvZEvUr8zB5XJu4hEyYY/view" target="_blank" rel="noopener noreferrer">
              <img src={Download} alt="" />
            </a>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Certidoes;
