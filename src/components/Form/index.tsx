import "./styles.css";

const Form = () => {
  return (
    <form action="https://formspree.io/f/mlevbezn" method="POST">
      <div className="form-container container shadow">
        <div className="row form-content-container">
          <div className="mb-3 col-lg-6">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              name="nome"
              type="text"
              className="form-control"
              id="name"
              placeholder="Nome"
              required
            />
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="Email" className="form-label">
              E-mail
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="nome@exemplo.com"
              required
            />
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="Telefone" className="form-label">
              Telefone
            </label>
            <input
              name="telefone"
              type="text"
              className="form-control phone-ddd-mask"
              id="telefone"
              placeholder="(xx)xxxxxxxx"
              required
              maxLength={14}
            />
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="assunto" className="form-label">
              Assunto (opcional)
            </label>
            <input
              name="assunto"
              type="text"
              className="form-control"
              id="assunto"
              placeholder="Assunto"
            />
          </div>
          <div className="mb-3 col-lg-12">
            <label htmlFor="mensagem" className="form-label">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              className="form-control"
              placeholder="Mensagem"
              id="mensagem"
              cols={40}
              rows={10}
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn-form">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
