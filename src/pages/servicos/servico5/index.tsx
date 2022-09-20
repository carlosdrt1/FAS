import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import FaleConosco from "../../../components/faleConosco";

const Servico5 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Recarga de cartuchos</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle tittle-servicos">
            Recarga de cartuchos em equipamentos
          </h1>
          <p>
            Lorem ipsum dolor sit amet. Aut consequatur consectetur sed nemo
            dolorem vel galisum obcaecati! Hic quam doloremque vel totam ipsum
            quo neque ipsa. Est earum placeat cum placeat numquam est tempore
            quos et nihil quam ab maiores harum nam perferendis voluptate.{" "}
          </p>
          <p>
            Qui voluptatem doloremque sit asperiores velit et quas eligendi et
            beatae quod ut nisi explicabo et explicabo porro. Et excepturi
            expedita et expedita ipsam ut dolorem consequatur.{" "}
          </p>
          <p>
            Sed nulla aspernatur eum dignissimos velit qui dolorum quas ut
            facere animi. Et tempora sunt est fugiat necessitatibus sit
            molestiae ipsa in aliquid eligendi et dolor omnis. Et molestiae
            galisum qui deserunt quam est quia reiciendis.{" "}
          </p>
          <ul>
            <li>
              In dolores dolores voluptates quis non perferendis fuga ea
              nesciunt deserunt!{" "}
            </li>
            <li>Est quia rerum ea eaque galisum ut itaque voluptatem. </li>
            <li>
              Ut assumenda autem hic amet voluptatem est earum magnam hic quos
              galisum.{" "}
            </li>
            <li>Rem quod dignissimos non adipisci laudantium. </li>
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

export default Servico5;
