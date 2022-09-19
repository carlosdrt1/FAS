import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import Image from "../../../assets/images/servico1.svg";
import FaleConosco from "../../../components/faleConosco";

const Servico1 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Acessoria empresarial</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <div className="col-lg-9">
            <img src={Image} alt="" className="col-lg-12" />
          </div>
          <h1 className="tittle tittle-servicos">Acessoria empresarial</h1>
          <p>
            Lorem ipsum dolor sit amet. Et voluptatem cupiditate est
            reprehenderit voluptates et pariatur corrupti est placeat. Aut
            maxime illum aut omnis dolorem ut perspiciatis rerum?{" "}
          </p>
          <ul>
            <li>Eos nulla corporis et iusto pariatur et adipisci deleniti! </li>
            <li>
              Et cupiditate sint ut laudantium soluta in quia eos voluptates
              maiores.{" "}
            </li>
            <li>
              Sit laboriosam galisum et iusto reiciendis 33 omnis recusandae quo
              molestias cumque.{" "}
            </li>
            <li>Ea fugit quidem ut ducimus consequatur et iusto maiores. </li>
          </ul>
          <h2>Est libero nemo ut doloribus enim sed repellat galisum? </h2>
          <p>
            Non sunt molestiae ea officiis dolor et corrupti debitis ea beatae
            assumenda ut odio ipsum. Et repellat ipsam et quibusdam nostrum et
            itaque accusamus a aliquid rerum est corporis velit est labore
            quidem qui deserunt fugit. Vel error quia aut itaque repellendus ut
            voluptatum illum. Sit dignissimos assumenda aut accusamus
            voluptatibus et repudiandae tenetur 33 vitae laudantium sit amet
            praesentium.{" "}
          </p>
          <h3>Est rerum molestiae qui iusto quis id incidunt autem. </h3>
          <p>
            Non facere veritatis qui quia enim aut saepe alias. Non natus
            consequatur et esse nulla aut iure nostrum ut quos ducimus nam
            fugiat quidem aut ratione unde hic architecto quae. At temporibus
            fugiat qui molestiae repellendus et distinctio alias.{" "}
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
        <div>
            <FaleConosco/>
        </div>
      </div>
    </div>
  );
};

export default Servico1;
