import "./styles.css";
import insta from "../../assets/images/iconInsta.svg";
import whats from "../../assets/images/whatsIcon2.svg";
import mail from "../../assets/images/mailIcon.svg";
import face from "../../assets/images/faceIcon.svg";

const CardsSociais = () => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="card-top">
          <div className="card-tittle">
            <h6>Compartilhe</h6>
          </div>
        </div>
        <div className="retangle-card"></div>
        <div className="card-img">
          <img src={insta} alt="" />
          <img src={whats} alt="" />
          <img src={mail} alt="" />
          <img src={face} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardsSociais;
