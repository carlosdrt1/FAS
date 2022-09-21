import "./styles.css";
import Logo from "../../assets/images/logo.png";
import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black navbar-dark" id="navbar">
      <Link reloadDocument={true} to="/" className="navbar-brand">
        <img src={Logo} alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#items"
        aria-controls="items"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-center navbar-fas"
        id="items"
      >
        <ul className="navbar-nav" id="itens">
          <li className="nav-item">
            <Link reloadDocument={true} to="/" className="nav-link">
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link reloadDocument={true} className="nav-link" to="/sobre-nos">
              Sobre nós
            </Link>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle btn-dropdown"
                data-bs-toggle="dropdown"
              >
                Serviços
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link reloadDocument={true} to="/servicos/1" className="dropdown-item">
                    Acessoria em RH
                  </Link>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <Link reloadDocument={true} to="/servicos/2" className="dropdown-item">
                    Acessoria em controle interno
                  </Link>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <Link reloadDocument={true} to="/servicos/3" className="dropdown-item">
                    Digitalização de documentos
                  </Link>
                </li>
                <div className="dropdown-divider"></div>
                <li>
                  <Link reloadDocument={true} to="/servicos/4" className="dropdown-item">
                    Consultoria em publicidade
                  </Link>
                </li>
                <div className="dropdown-divider"></div>
                <li>
                  <Link reloadDocument={true} to="/servicos/5" className="dropdown-item">
                    Recarga de cartuchos em equipamentos de informática
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link reloadDocument={true} className="nav-link" to="/links-uteis">
              Links Úteis
            </Link>
          </li>
          <li className="nav-item">
            <Link reloadDocument={true} className="nav-link" to="/certidoes">
              Certidões
            </Link>
          </li>
          <div className="retangle"></div>
        </ul>
        <a
          href="https://wa.me/5588996499995"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <button className="btn whats-btn">
            <span className="whats">Whatsapp</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.512 11.9815C14.265 11.8575 13.047 11.2575 12.82 11.1755C12.593 11.0925 12.428 11.0515 12.263 11.2995C12.098 11.5465 11.623 12.1055 11.478 12.2705C11.334 12.4355 11.189 12.4555 10.942 12.3315C10.2121 12.0409 9.53832 11.6254 8.951 11.1035C8.40932 10.6028 7.94493 10.0245 7.573 9.38753C7.429 9.13953 7.558 9.00553 7.682 8.88253C7.793 8.77153 7.93 8.59353 8.053 8.44853C8.15487 8.32335 8.23838 8.18429 8.301 8.03553C8.33395 7.96718 8.34929 7.89166 8.34562 7.81587C8.34196 7.74007 8.3194 7.66639 8.28 7.60153C8.218 7.47753 7.723 6.25853 7.517 5.76253C7.316 5.28053 7.112 5.34553 6.959 5.33753C6.815 5.33053 6.65 5.32853 6.485 5.32853C6.35949 5.33203 6.23605 5.36147 6.12247 5.41499C6.00888 5.46852 5.9076 5.54497 5.825 5.63953C5.54502 5.90467 5.32334 6.22521 5.17407 6.58074C5.0248 6.93627 4.95121 7.319 4.958 7.70453C5.0383 8.63877 5.38968 9.52922 5.969 10.2665C7.03092 11.8586 8.48863 13.1471 10.199 14.0055C10.6604 14.2037 11.1317 14.378 11.611 14.5275C12.1163 14.681 12.6505 14.7142 13.171 14.6245C13.5157 14.5547 13.8422 14.4141 14.1298 14.2117C14.4174 14.0093 14.6599 13.7494 14.842 13.4485C15.0044 13.0785 15.0545 12.6688 14.986 12.2705C14.925 12.1665 14.76 12.1055 14.512 11.9815V11.9815ZM17.004 2.90253C15.3039 1.20289 13.0442 0.178943 10.6454 0.0213385C8.24662 -0.136266 5.8723 0.583207 3.96448 2.04581C2.05667 3.50841 0.745358 5.61448 0.274694 7.9719C-0.195971 10.3293 0.206082 12.7775 1.406 14.8605L0 19.9955L5.254 18.6185C6.70716 19.4098 8.33538 19.8244 9.99 19.8245H9.994C11.9541 19.8235 13.8699 19.2416 15.4994 18.1522C17.1289 17.0629 18.399 15.515 19.1491 13.7041C19.8993 11.8932 20.0959 9.90067 19.7141 7.97812C19.3323 6.05557 18.3892 4.28932 17.004 2.90252V2.90253ZM14.371 16.8915C13.0591 17.7138 11.5423 18.1501 9.994 18.1505H9.99C8.5149 18.1504 7.06699 17.7536 5.798 17.0015L5.497 16.8235L2.379 17.6415L3.211 14.6015L3.016 14.2895C2.15055 12.9094 1.71378 11.3036 1.76094 9.67518C1.80809 8.0468 2.33705 6.46897 3.28092 5.1412C4.22479 3.81344 5.54119 2.79538 7.06365 2.21575C8.58611 1.63612 10.2463 1.52096 11.8342 1.88483C13.4221 2.2487 14.8664 3.07526 15.9846 4.25998C17.1027 5.44471 17.8445 6.93439 18.116 8.54067C18.3876 10.1469 18.1767 11.7977 17.5101 13.2841C16.8435 14.7705 15.7511 16.0259 14.371 16.8915"
                fill="white"
              />
            </svg>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
