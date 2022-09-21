import { Link } from "react-router-dom";
import CardsSociais from "../../../components/cardsCompartilhe";
import NavigationCard from "../../../components/navigationCard";
import "./styles.css";
import FaleConosco from "../../../components/faleConosco";

const Servico4 = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link reloadDocument={true} to="/" className="nav-link">
          Início&nbsp;
        </Link>
        <p>&#62; Servicos&nbsp;</p>
        <p>&#62; Consultoria em publicidade</p>
      </div>

      <div className="row">
        <div className="col-lg-9">
          <h1 className="tittle tittle-servicos">Consultoria em publicidade</h1>
          <p>
            Lorem ipsum dolor sit amet. Ex autem quia qui voluptates consequatur
            voluptatem repudiandae? Et excepturi sunt rem sunt quia qui veniam
            laboriosam non labore reiciendis ut deleniti voluptatem eum
            voluptatum mollitia a eveniet quam. Qui culpa debitis et dicta
            voluptas ab dolore enim sed accusamus sunt ex aspernatur aperiam vel
            reprehenderit porro. In inventore praesentium et rerum expedita ab
            sint galisum eos atque odio aut officiis soluta et totam nulla.{" "}
          </p>
          <ul>
            <li>Aut ipsum quaerat quo placeat repellendus? </li>
            <li>Est molestiae velit qui eius natus! </li>
            <li>
              Quo praesentium debitis sed corrupti voluptates ea unde
              cupiditate!{" "}
            </li>
          </ul>
          <p>
            Qui molestias tempore est quibusdam totam adipisci excepturi qui
            aliquam pariatur non nostrum perspiciatis et eveniet cupiditate et
            enim quia! Ut accusamus tenetur aut galisum pariatur id neque optio.
            Et repudiandae commodi et quam saepe sit placeat facilis et repellat
            dolorem ut tempore quam. Ut porro corporis qui aliquam voluptate in
            internos modi.{" "}
          </p>
          <p>
            Qui obcaecati temporibus qui enim voluptatum aut amet suscipit et
            similique voluptatibus ut magni ducimus non Quis dolorem! Aut
            dignissimos voluptate ex molestias quae ab laborum vitae non
            corporis magni ut iste quis.{" "}
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

export default Servico4;
