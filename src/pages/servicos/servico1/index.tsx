import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import FaleConosco from "../../../components/faleConosco";

const Servico1 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Acessoria em RH</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle tittle-servicos">Acessoria em RH</h1>
          <p>
            Lorem ipsum dolor sit amet. Ea voluptas repudiandae{" "}
            <em>Ut modi qui vero nihil a distinctio sapiente</em> non odit
            veniam. Sit impedit voluptas quo impedit aliasaut corporis aut
            voluptatem omnis. Quo voluptatem inventore et facilis consequatur
            est quia aperiam ad ducimus suscipit.{" "}
          </p>
          <blockquote cite="https://www.loremipzum.com">
            Non quia voluptas ut tempora reprehenderit qui magnam consequatur 33
            exercitationem unde ut adipisci ipsam aut iure reprehenderit.{" "}
          </blockquote>
          <p>
            Et laudantium sint{" "}
            <strong>Et expedita est explicabo corporis qui Quis unde</strong>{" "}
            est ratione nihil est quod adipisci At facilis dignissimos. Ea dolor
            architecto est nesciunt veritatis 33 iste voluptatibus aut
            repellendus repudiandae ab obcaecati exercitationem At doloribus
            necessitatibus ut autem aliquam?{" "}
          </p>
          <ul>
            <li>Id nostrum accusamus est enim ipsa qui nostrum nihil. </li>
            <li>
              Et rerum aliquam qui nulla dolorum est galisum commodi et nisi
              maiores.{" "}
            </li>
            <li>
              Sit sint distinctio aut quia perspiciatis aut quia maiores.{" "}
            </li>
            <li>
              Quo rerum alias aut sint autem qui itaque sunt sit voluptatem
              obcaecati.{" "}
            </li>
          </ul>
          <p>
            Ab suscipit repellendus{" "}
            <strong>A deleniti in voluptas tempore</strong>. Qui distinctio quod
            cum saepe voluptas ad dolores quis aut voluptatibus tempora qui
            ducimus quia sit consequatur nemo. Non quas aliquid{" "}
            <em>Sed numquam</em> ad provident nulla! Ut deleniti soluta qui
            voluptatibus expedita aut quisquam fuga id dolor dolores et enim
            nisi est eaque vero.{" "}
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
          <FaleConosco />
        </div>
      </div>
    </div>
  );
};

export default Servico1;
