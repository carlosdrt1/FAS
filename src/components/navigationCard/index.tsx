import { Link } from "react-router-dom";
import "./styles.css";

const NavigationCard = () => {
  return (
    <div className="card text-center bg-light border-secondary">
      <div className="card-body">
        <h5 className="card-tittle">Navegação</h5>
        <p className="card-text">Continue navegando</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link reloadDocument={true} to="/" className="nav-link">
            Inicio
          </Link>
        </li>
        <li className="list-group-item">
          <Link reloadDocument={true} to="/contatos" className="nav-link">
            Contato
          </Link>
        </li>
        <li className="list-group-item">
          <Link reloadDocument={true} to="/links-uteis" className="nav-link">
            Links Úteis
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationCard;
