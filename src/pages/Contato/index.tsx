import { Link } from "react-router-dom";
import CardsSociais from "../../components/cardsCompartilhe";
import Form from "../../components/Form";
import NavigationCard from "../../components/navigationCard"; 
import "./styles.css";

const Contato = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p> &#62; Contato</p>
      </div>
      <h1 className="tittle">Contato</h1>
      <div className="row">
        <div className="col-lg-9">
          <Form />
        </div>
        <div className="col-lg-3">
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

export default Contato;
