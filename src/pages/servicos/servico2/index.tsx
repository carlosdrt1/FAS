import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import Image from "../../../assets/images/servico2.svg";
import FaleConosco from "../../../components/faleConosco";

const Servico2 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Certificado Digital</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <div className="col-lg-9">
            <img src={Image} alt="" className="col-lg-12" />
          </div>
          <h1 className="tittle tittle-servicos">Certificado Digital</h1>
          <p>
            Lorem ipsum dolor sit amet. Et ipsa sunt nam laudantium nisi qui
            perspiciatis vitae quo nisi magni! 33 dolore quia quo odio atque in
            adipisci velit rem excepturi asperiores. Ut magni necessitatibus qui
            fugiat quos non commodi perferendis aut illum repellat quo neque
            architecto vel quasi incidunt eos nulla ducimus.{" "}
          </p>
          <p>
            Et quia quibusdam sed autem atque quo omnis tempore aut blanditiis
            rerum. Ea internos numquam eos dignissimos repudiandae qui itaque
            modi! Ut sapiente tempora nam velit laboriosam vel veritatis aliquam
            ut voluptatum iure ut voluptas excepturi aut molestias omnis sit
            voluptatem voluptas. Qui maiores galisum nam soluta odit vel maiores
            corporis.{" "}
          </p>
          <p>
            Ut quaerat doloribus et ducimus quod sed placeat eligendi a quam
            possimus? Sit facilis obcaecati et consequuntur quibusdam ea
            dignissimos ducimus est labore explicabo aut ipsam corporis est
            aliquid non nesciunt earum.{" "}
          </p>
        </div>
        <div className="col-lg-3 d-flex flex-column justify-content-around">
          <div>
            <CardsSociais />
          </div>
          <div>
            <NavigationCard />
          </div>
        </div>
        <div>
          <FaleConosco />
        </div>
      </div>
    </div>
  );
};

export default Servico2;
