import { Link } from "react-router-dom";
import CardsSociais from "../../components/cardsCompartilhe";
import NavigationCard from "../../components/navigationCard";
import "./styles.css";

const SobreNos = () => {
  return (
    <div className="container">
      <div className="navgation-items">
        <Link to="/" className="nav-link">
          Início
        </Link>
        <p>&#62; Sobre Nós</p>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle">Sobre nós</h1>
          <p>
            Lorem ipsum dolor sit amet. Nam ipsam animi ut consequatur ipsa non
            fugit rerum ad odit molestias aut repellat quibusdam et quia
            obcaecati aut ipsum quisquam. Et dolorum odit vel eaque impedit eum
            fugit rerum ut quis pariatur et quia quisquam non galisum autem est
            libero sint. Qui maiores omnis non obcaecati soluta est corporis
            vero quo esse repellat et nihil dolores aut corporis magni. Non
            omnis sed voluptatem nesciunt hic adipisci veritatis sed dolores
            quia.
          </p>
          <p>
            Et blanditiis dolores qui quas impedit a consectetur eligendi quo
            galisum ipsum et quaerat natus aut neque temporibus. Sit enim
            consectetur est sunt commodi sed quis quibusdam aut dignissimos
            perspiciatis et galisum minus. Et dicta suscipit et vero quos sed
            quae ullam aut dolore temporibus et magni voluptatem in repudiandae
            error eum nostrum temporibus!
          </p>
          <p>
            Est soluta dicta est velit incidunt eos galisum magnam ut distinctio
            voluptatibus. Sed animi distinctio ea sapiente velit est omnis
            provident ut iste inventore At possimus porro. Est possimus non
            ipsum voluptatem aut dolorem maiores. Vel vero internos et deserunt
            facere qui aspernatur consequatur.
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
      </div>
    </div>
  );
};

export default SobreNos;
