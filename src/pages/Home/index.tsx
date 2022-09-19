import WhatsButton from "../../components/whatsButton";
import "./styles.css";
import card1 from "../../assets/images/card1.svg";
import card2 from "../../assets/images/card2.svg";
import card3 from "../../assets/images/card3.svg";
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
              <div className="card position-static bg-light">
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
              <div className="card position-static bg-light">
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
              <div className="card position-static bg-light">
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
    </>
  );
};

export default Home;
