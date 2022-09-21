import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import FaleConosco from "../../../components/faleConosco";

const Servico2 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Acessoria em controle interno</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle tittle-servicos">
            Acessoria em controle interno
          </h1>
          <p>
            Lorem ipsum dolor sit amet. In iusto aut debitis assumenda ab
            dolorem maxime? Ut galisum tempora non iure sequi rem voluptate
            dolorem et harum soluta et numquam beatae.{" "}
          </p>
          <ol>
            <li>
              Quo atque quod rem quidem laboriosam ut dolor quos est explicabo
              aspernatur.{" "}
            </li>
            <li>
              Qui esse quia ut optio nobis in velit provident ab cumque
              molestiae.{" "}
            </li>
            <li>
              Nam veniam atque et atque veritatis non laudantium voluptatum.{" "}
            </li>
          </ol>
          <p>
            Ab provident molestias non quia consequatur aut facere voluptatem et
            debitis officiis At quae soluta. Qui quia provident{" "}
            <em>Ea voluptatibus hic enim voluptas et consequatur omnis</em> et
            dolorum nulla hic odit delectus et explicabo impedit? Ea laudantium
            amet non vitae laudantium id accusantium nihil. Ut ipsum odio vel
            mollitia perferendis At totam omnis qui blanditiis saepe 33
            voluptatem assumenda hic laborum dolores.{" "}
          </p>
          <p>
            Qui pariatur saepe ut cupiditate expedita ut sint dolor ut doloribus
            doloremque aut corrupti dolorem et harum voluptate. Aut porro
            voluptas <em>Aut odio cum aliquid magnam</em>. Est deleniti itaque
            nam itaque reprehenderit sed eaque deleniti in quia natus ea magnam
            voluptatem. Et asperiores nihil ex quidem soluta et delectus placeat
            At magnam vero qui amet voluptatem cum Quis minus.{" "}
          </p>
          <dl>
            <dt>
              <dfn>Aut dicta ipsam qui facere ullam. </dfn>
            </dt>
            <dd>
              Aut nemo doloribus non provident reiciendis et animi veniam ut
              quos accusantium.{" "}
            </dd>
            <dt>
              <dfn>Eum nihil sint ex ducimus facilis. </dfn>
            </dt>
            <dd>Aut dolore obcaecati qui ipsa sapiente. </dd>
          </dl>
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
