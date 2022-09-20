import { Link } from "react-router-dom";

const Certidoes = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p> &#62; Certidões</p>
      </div>
    </div>
  );
};

export default Certidoes;
