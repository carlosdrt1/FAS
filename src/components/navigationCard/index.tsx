import "./styles.css";

const NavigationCard = () => {
  return (
    <div className="card text-center bg-light">
      <div className="card-body">
        <h5 className="card-tittle">Navegação</h5>
        <p className="card-text">Continue navegando</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href="" className="nav-link">
            Serviços
          </a>
        </li>
        <li className="list-group-item">
          <a href="" className="nav-link">
            Contato
          </a>
        </li>
        <li className="list-group-item">
          <a href="" className="nav-link">
            Links Úteis
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationCard;
