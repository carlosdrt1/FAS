import WhatsButton from "../../components/whatsButton";
import "./styles.css";
import card1 from "../../assets/images/card1.svg";
import card2 from "../../assets/images/card2.svg";
import card3 from "../../assets/images/card3.svg";
import imagem from "../../assets/images/faleConosco.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <h3>Parceiros do seu crescimento</h3>
          <p>A ajuda que vc precisa</p>
          <Link to="/sobre-nos">
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
            <div className="col-lg-4">
              <div className="card position-static bg-light shadow">
                <img src={card1} alt="" className="card-img-top" />
                <div className="card-body text-center">
                  <h4 className="card-tittle">Acessoria empresarial</h4>
                  <p>
                    Dentre as distintas formas de assessoria empresarial,
                    oferecemos soluções técnicas para os nossos clientes.
                  </p>
                  <Link to="/servicos/1" className="btn">
                    Saiba mais
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card position-static bg-light shadow">
                <img src={card2} alt="" className="card-img-top" />
                <div className="card-body text-center">
                  <h4 className="card-tittle">Certificado Digital</h4>
                  <p>
                    Certificado digital é uma identidade virtual da pessoa ou da
                    empresa e funciona como uma assinatura digital com validade
                    (...)
                  </p>
                  <Link to="/servicos/2" className="btn">
                    Saiba mais
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card position-static bg-light shadow">
                <img src={card3} alt="" className="card-img-top" />
                <div className="card-body text-center">
                  <h4 className="card-tittle">
                    Escrituração contábil, fiscal e trabalhista
                  </h4>
                  <p>
                    Atendemos as necessidades das organizações, nas de
                    escrituração contábil, fiscal e trabalhista. Fale Conosco e
                    saiba mais.
                  </p>
                  <Link to="/servicos/3" className="btn">
                    Saiba mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-fluid fale-conosco">
        <div className="row">
          <div className="col-lg-6 text">
            <h4 className="tittle-h3">
              O mundo está mais dinâmico, e sua contabilidade, também?
            </h4>
            <p>
              Todas as decisões influenciam nos lucros da sua empresa. Vamos
              conversar sobre como promover mudanças positivas nela. Será um
              prazer atender você.
            </p>
            <button className="btn">Fale conosco</button>
          </div>
          <img src={imagem} alt="" className="col-lg-6 collapse-md" />
        </div>
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
    </>
  );
};

export default Home;
