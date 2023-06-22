import { Container } from "react-bootstrap";
import mainLogo from "../../assets/logo.png";

function Empresa() {
  return (
    <section id="empresa" style={{marginBottom: "30px"}}>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          margin: "auto 20px 0px 30px",
        }}
      >
        <img src={mainLogo} width="900" height="500" alt="logo" />
      </Container>
      <Container style={{ display: "flex" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>Quem somos</h3>
          <p>
            A ECM - Serviços e Manutenção Industrial é uma empresa com grande
            experiência no segumento, cujo objetivo é a completa SATISFAÇÃO dos
            nossos clientes.
            <br />
            Contamos com uma equipe especializada e qualificada para atender aos
            mais diversos desafios presentes no cotidiano das pequenas, médias e
            grandes empresas.
          </p>
        </div>
      </Container>
      <hr />
    </section>
  );
}

export default Empresa;
