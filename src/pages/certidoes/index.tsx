import { Link } from "react-router-dom";
import CardsSociais from "../../components/cardsCompartilhe";
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
          <a href="https://wa.me/5588996499995" target="_blank" rel="noopener noreferrer">
            <button className="btn">Contate-nos</button>
            </a>
        </div>
        <div className="col-lg-3 navigation-certidoes">
          <div>
            <CardsSociais />
          </div>
          <div>
            <NavigationCard />
          </div>
        </div>
      </div>
      <div className="row certidoes-container">
        <div className="col-lg-4 col-md-6">
          <h5>Debitos federais</h5>
          <iframe
            height="350px"
            width="320px"
            title="debitos federais"
            src="https://drive.google.com/file/d/1tuWR4gbFQ2BDoE8PekFbu0zQ5xBcqGYH/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>Debitos estaduais</h5>
          <iframe
            height="350px"
            width="320px"
            title="debitos estaduais"
            src="https://drive.google.com/file/d/1Z9pYonJRUGTCS76sbGapCoFyKKgh69Ut/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>Debitos Municipais</h5>
          <iframe
            height="350px"
            width="320px"
            title="debitos municipais"
            src="https://drive.google.com/file/d/1SIctkjvYs0kriJJ8JM39kXSK4Ye_qpXf/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>Debitos trabalhistas</h5>
          <iframe
            height="350px"
            width="320px"
            title="debitos trabalhistas"
            src="https://drive.google.com/file/d/1Pfiz6gBYS5gO4_cbXZWAOM3H98WuzOwa/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>FGTS</h5>
          <iframe
            height="350px"
            width="320px"
            title="FGTS"
            src="https://drive.google.com/file/d/1cJFAHRQ2n3sXPPQf7CYLMfXA-xZQJKY8/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>Falencia Concordata</h5>
          <iframe
            height="350px"
            width="320px"
            title="falencia concordata"
            src="https://drive.google.com/file/d/1lpKA23XqTYO6TvZEvUr8zB5XJu4hEyYY/preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Certidoes;
