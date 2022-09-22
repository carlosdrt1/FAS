import "./styles.css";
import insta from "../../assets/images/iconInsta.svg";
import whats from "../../assets/images/whatsIcon2.svg";
import mail from "../../assets/images/mailIcon.svg";
import face from "../../assets/images/faceIcon.svg";

const CardsSociais = () => {
  return (
    <div className="card text-center bg-light border-secondary" id="compartilhe">
      <div className="card-body">
        <div className="card-top">
          <div className="card-tittle">
            <h6>Contate-nos</h6>
          </div>
        </div>
        <div className="retangle-card"></div>
        <div className="card-img">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="" />
          </a>
          <a
            href="https://wa.me/5588996499995"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whats} alt="" />
          </a>
          <a
            href="https://gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={face} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardsSociais;
