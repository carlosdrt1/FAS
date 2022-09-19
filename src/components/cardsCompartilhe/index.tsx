import "./styles.css";
import insta from "../../assets/images/iconInsta.svg";
import whats from "../../assets/images/whatsIcon2.svg";
import mail from "../../assets/images/mailIcon.svg";
import face from "../../assets/images/faceIcon.svg";

const CardsSociais = () => {
  return (
    <div className="card text-center bg-light border-secondary">
      <div className="card-body">
        <div className="card-top">
          <div className="card-tittle">
            <h6>Compartilhe</h6>
          </div>
        </div>
        <div className="retangle-card"></div>
        <div className="card-img">
          <a href="">
            <img src={insta} alt="" />
          </a>
          <a href="">
            <img src={whats} alt="" />
          </a>
          <a href="">
            <img src={mail} alt="" />
          </a>
          <a href="">
            <img src={face} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardsSociais;
