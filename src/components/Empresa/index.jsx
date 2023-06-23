import { Container, Figure } from "react-bootstrap";
import mainLogo from "../../assets/logo.png";

function Empresa() {
  return (
    <section id="empresa" style={{ marginBottom: "30px" }}>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          // margin: "auto 20px 0px 30px",
          justifyContent: "center",
        }}
      >
        <Figure.Image style={{display:"flex"}} src={mainLogo} width="900" height="500" alt="logo" fluid />
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px 30px 30px 30px",
        }}
      >
        <h3>Quem somos</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "30px",
          }}
        >
          <p style={{ textAlign: "center" }}>
            A ECM - Serviços e Manutenção Industrial é uma empresa com grande
            experiência no segumento, cujo objetivo é a completa SATISFAÇÃO dos
            nossos clientes.
            <br />
            Contamos com uma equipe especializada e qualificada para atender aos
            mais diversos desafios presentes no cotidiano das pequenas, médias e
            grandes empresas.
          </p>
          <br />
          <p><strong>Nosso objetivo é oferecer as melhores soluções para nossos clientes!</strong></p>
        </div>
      </Container>

      <hr />
    </section>
  );
}

export default Empresa;
