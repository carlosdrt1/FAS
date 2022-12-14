import WhatsButton from "../../components/whatsButton";
import "./styles.css";
import card1 from "../../assets/images/card1.svg";
import card2 from "../../assets/images/card2.svg";
import card3 from "../../assets/images/card3.svg";
import card4 from "../../assets/images/card4.svg";
import card5 from "../../assets/images/card5.svg";
import card6 from "../../assets/images/card6.svg";
import Acopiara from "../../assets/images/LogoAcopiara.png";
import Iguatu from "../../assets/images/LogoIguatu.png";
import Irapuan from "../../assets/images/LogoIrapuan.png";
import Barbalha from "../../assets/images/LogoBarbalha.png";
import PiquetCarneiro from "../../assets/images/logoPiquetCarneiro.png";
import Saboeiro from "../../assets/images/LogoSaboeiro.png";
import Solonópole from "../../assets/images/LogoSolonopolis.png";
import CamaraPiquet from "../../assets/images/LogoCamaraPiquet.png";

import imagem from "../../assets/images/faleConosco.svg";
import { Link } from "react-router-dom";
import Form from "../../components/Form";

const Home = () => {
  return (
    <>
      <div id="#home">
        <div className="home-container">
          <div className="home-content-container">
            <h3>Parceiros do seu crescimento</h3>
            <p>A ajuda que vc precisa</p>
            <Link reloadDocument={true} to="/sobre-nos">
              <button className="btn-home">
                <p> Saiba como</p>
              </button>
            </Link>
          </div>
          <WhatsButton />
        </div>
        <div className="servicos-cards">
          <div>
            <h1 className="tittle tittle-servicos-home">Serviços</h1>
          </div>
          <div className="container card-container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="card position-static bg-light shadow"
                  id="card-home"
                >
                  <img src={card1} alt="" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-tittle">Assessoria em RH</h5>
                    <p>
                      A Assessoria e Consultoria em Recursos Humanos auxilia na
                      construção de um melhor relacionamento entre colaboradores
                      e gestores, além da implementação de mudanças alinhadas à
                      estratégia do negócio.
                    </p>
                    <Link
                      reloadDocument={true}
                      to="/servicos/assessoria-rh"
                      className="btn"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="card position-static bg-light shadow"
                  id="card-home"
                >
                  <img src={card2} alt="" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-tittle">Digitalização de documentos</h5>
                    <p>
                      A digitalização de documentos transforma documentos
                      físicos em arquivos digitais, para serem gerenciados em
                      ambiente virtual.
                    </p>
                    <Link
                      reloadDocument={true}
                      to="/servicos/digitalizacao"
                      className="btn"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="card position-static bg-light shadow"
                  id="card-home"
                >
                  <img src={card3} alt="" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-tittle">Consultoria em publicidade</h5>
                    <p>
                      A consultoria para agências de publicidade é um trabalho
                      que tem apontado direcionamentos eficientes em comunicação
                      e gestão.
                    </p>
                    <Link
                      reloadDocument={true}
                      to="/servicos/consultoria-publicidade"
                      className="btn"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="card position-static bg-light shadow"
                  id="card-home"
                >
                  <img src={card4} alt="" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-tittle">
                      Assessoria em controle interno
                    </h5>
                    <p>
                      Tem como finalidade atuar nas áreas de controle, risco,
                      transparência e integridade da gestão, como também de
                      auxiliar na interlocução sobre assuntos relacionados a
                      ética, ouvidoria e correição.
                    </p>
                    <Link
                      reloadDocument={true}
                      to="/servicos/assessoria-controle"
                      className="btn"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="card position-static bg-light shadow"
                  id="card-home"
                >
                  <img src={card5} alt="" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-tittle">Assessoria em Licitações</h5>
                    <p>
                      Assessoramento em todas as etapas do processo licitatório,
                      desde a captação de editais, até o fechamento do contrato,
                      minimizando assim, os riscos de preterimento.
                    </p>
                    <Link
                      reloadDocument={true}
                      to="/servicos/assessoria-licitacao"
                      className="btn"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="card position-static bg-light shadow"
                  id="card-home"
                >
                  <img src={card6} alt="" className="card-img-top" />
                  <div className="card-body text-center">
                    <h5 className="card-tittle">Agencias de publicidade</h5>
                    <p>
                      Planejar, criar, executar e divulgar campanhas de
                      propaganda e marketing.
                    </p>
                    <Link
                      reloadDocument={true}
                      to="/servicos/consultoria-publicidade"
                      className="btn"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid fale-conosco bg-black">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-6 text-white fale-conosco-text align-self-center">
                <h5>Precisando emitir alguma certidão negativa de débitos?</h5>
                <p>
                  Conheça nossas certidões que oferecemos.
                  <br />
                  Clique no botão abaixo e procure a de sua escolha dentre as
                  quais ofertamos.
                </p>
                <Link reloadDocument={true} to="/certidoes">
                  <button className="btn">Certidões &#62;</button>
                </Link>
              </div>
              <img src={imagem} alt="" className="col-lg-6" />
            </div>
          </div>
        </div>
        <div className="nossos-clientes">
          <h2 className="text-center tittle tittle-form">Nossos clientes</h2>
          <div
            id="carouselClientes"
            className="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="clientes-items">
                  <div className="top-items">
                    <a
                      href="https://iguatu.ce.gov.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Iguatu} alt="" />
                    </a>
                    <a
                      href="https://camaraacopiara.ce.gov.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Acopiara} alt="" />
                    </a>
                  </div>
                  <a
                    href="https://www.camarasolonopole.ce.gov.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Solonópole} alt="" />
                  </a>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="clientes-items">
                  <div className="top-items">
                    <a
                      href="https://saboeiro.ce.gov.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Saboeiro} alt="" />
                    </a>
                    <a
                      href="https://www.irapuanpinheiro.ce.gov.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Irapuan} alt="" />
                    </a>
                  </div>
                  <a
                    href="https://www.camaradebarbalha.ce.gov.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Barbalha} alt="" />
                  </a>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="clientes-items">
                  <a
                    href="https://www.piquetcarneiro.ce.gov.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={PiquetCarneiro} alt="" />
                  </a>
                  <a
                    href="https://camarapiquetcarneiro.ce.gov.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={CamaraPiquet} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselClientes"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselClientes"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="form-container-home container">
          <h2 className="tittle tittle-form">Entre em contato</h2>
          <Form />
        </div>
        <div className="container-fluid map-container">
          <iframe
            width="100%"
            height="300px"
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.278953287401!2d-39.45452918569084!3d-6.09307596146696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a2d229c91ad8c3%3A0x8e7ec802c8d67873!2sAv.%20Jos%C3%A9%20Marques%20Filho%2C%2097%20-%20Centro%2C%20Acopiara%20-%20CE%2C%2063560-000!5e0!3m2!1spt-BR!2sbr!4v1663595795330!5m2!1spt-BR!2sbr"
            loading={"lazy"}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
