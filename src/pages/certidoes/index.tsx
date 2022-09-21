import { Link } from "react-router-dom";
import CardsSociais from "../../components/cardsCompartilhe";
import NavigationCard from "../../components/navigationCard";
import "./styles.css";

const Certidoes = () => {
  return (
    <div className="container">
      <div className="navigation-items">
        <Link to="/" className="nav-link" reloadDocument={true}>
          Início&nbsp;
        </Link>
        <p> &#62; Certidões</p>
      </div>
      <h1 className="tittle">Certidões</h1>
      <div className="row">
        <div className="col-lg-9">
          <p>
            Lorem ipsum dolor sit amet. Qui libero repellat id deserunt quia At
            internos sint rem iste quisquam non sequi nesciunt qui vitae ducimus
            aut necessitatibus sunt. Hic molestias doloribus ut eaque fugit a
            enim eaque. Aut iste officiis dolor dolorum 33 soluta eveniet ad
            assumenda ratione. Aut laborum inventore aut perspiciatis quasi eum
            quasi veniam in corporis aperiam est impedit enim.{" "}
          </p>
          <ul>
            <li>
              Hic eius velit 33 odio neque qui enim galisum ut voluptatem
              perspiciatis.{" "}
            </li>
            <li>Eos omnis dolor et beatae beatae eum officia recusandae. </li>
            <li>
              Aut expedita ducimus ex molestias perspiciatis qui harum animi?{" "}
            </li>
            <li>
              Nam laudantium ducimus est nisi laudantium qui voluptatibus omnis
              est sint ipsum.{" "}
            </li>
            <li>
              Et internos dolores est commodi voluptatem est illum incidunt!{" "}
            </li>
          </ul>
          <p>
            Et aliquam recusandae sed itaque quidem At porro dolores est
            laboriosam magni. Qui mollitia velit est aliquam possimus et dolorem
            nulla est dolores aperiam nam totam voluptatem ut quos quaerat!{" "}
          </p>
          <p>
            Est nulla aspernatur est quisquam commodi aut officia dolores a
            laboriosam nihil est deserunt officia et iusto sapiente. Non galisum
            fugit 33 laborum similique vel consequatur optio et nisi? Qui minima
            galisum aut iste nulla nam officiis consectetur aut ipsam internos
            et dolorem totam. Sed illo quaerat aut explicabo quibusdam est
            suscipit reiciendis.{" "}
          </p>
        </div>
        <div className="col-lg-3">
        <div>
            <CardsSociais />
          </div>
          <div>
            <NavigationCard />
          </div></div>
      </div>
      <div className="row certidoes-container">
        <div className="col-lg-4 col-md-6">
          <h5>Falencia Concordata</h5>
          <iframe
            height="350px"
            width="320px"
            title="falencia concordata"
            src="https://drive.google.com/file/d/1lpKA23XqTYO6TvZEvUr8zB5XJu4hEyYY/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>Debitos Municipais</h5>
          <iframe
            height="350px"
            width="320px"
            title="debitos municipais"
            src="https://drive.google.com/file/d/1SIctkjvYs0kriJJ8JM39kXSK4Ye_qpXf/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>Debitos trabalhistas</h5>
          <iframe
            height="350px"
            width="320px"
            title="debitos trabalhistas"
            src="https://drive.google.com/file/d/1Pfiz6gBYS5gO4_cbXZWAOM3H98WuzOwa/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>Debitos federais</h5>
          <iframe
            height="350px"
            width="320px"
            title="debitos federais"
            src="https://drive.google.com/file/d/1tuWR4gbFQ2BDoE8PekFbu0zQ5xBcqGYH/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>FGTS</h5>
          <iframe
            height="350px"
            width="320px"
            title="FGTS"
            src="https://drive.google.com/file/d/1cJFAHRQ2n3sXPPQf7CYLMfXA-xZQJKY8/preview"
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h5>Debitos estaduais</h5>
          <iframe
            height="350px"
            width="320px"
            title="debitos estaduais"
            src="https://drive.google.com/file/d/1Z9pYonJRUGTCS76sbGapCoFyKKgh69Ut/preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Certidoes;
