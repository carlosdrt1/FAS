import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import FaleConosco from "../../../components/faleConosco";

const Servico3 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Digitalização de documentos</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle tittle-servicos">
            Digitalização de documentos
          </h1>
          <p>
            Lorem ipsum dolor sit amet. Et nesciunt illo At aperiam esse{" "}
            <em>At tenetur id veritatis quam</em>? Et consequatur commodi ut
            magni perferendis non rerum excepturi ut earum eaque est commodi
            velit ut impedit veritatis ut quia quia.{" "}
          </p>
          <p>
            Est cumque dicta{" "}
            <em>
              Qui iste et iure quia sed doloribus molestiae aut enim debitis
            </em>
            . In magnam quas odit error aut sequi veritatis sit voluptates rerum
            quo eveniet voluptatibus in enim architecto eos placeat possimus.{" "}
          </p>
          <p>
            Sed voluptatem pariatur est beatae soluta{" "}
            <strong>
              Ex voluptatem et molestiae aliquam qui ipsum deserunt qui aliquid
              nemo
            </strong>
            . A laborum ut praesentium quisquam{" "}
            <em>
              Est incidunt ut aliquam nemo et tempore nulla ea quisquam alias
            </em>
            . Et consequatur temporibus et architecto esse ut voluptatem tempora
            aut doloribus accusantium ut molestiae enim aut perferendis neque
            qui repudiandae tempora. Sed perspiciatis quam non nostrum dolorem
            cum voluptatibus porro et velit accusamus aut recusandae sunt ab
            soluta dolorem.{" "}
          </p>
          <ul>
            <li>Rem voluptatum porro non adipisci doloribus. </li>
            <li>Quo odio possimus et blanditiis dolorum. </li>
            <li>Sit nemo itaque non corporis placeat et omnis impedit. </li>
          </ul>
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

export default Servico3;
