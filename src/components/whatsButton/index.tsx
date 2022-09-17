import "./styles.css";
import Icon from "../../assets/images/whatsIcon.svg";

const WhatsButton = () => {
  return (
    <div className="btn-whatsapp">
      <a href="https://wa.me/5588996499995" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-content">
        <img src={Icon} alt="" /> Contate-nos
      </a>
    </div>
  );
};

export default WhatsButton;
