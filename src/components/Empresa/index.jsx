import { Divider } from "antd";
import { Container, Figure } from "react-bootstrap";
import worldCloud from "../../assets/worldCloud.png";

function Empresa() {
  return (
    <section id="empresa">
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Divider style={{ borderColor: "lightgray" }} />
        <h3>GRUPO ECM</h3>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <p className="empresa_text">
          A ECM entrega soluções de acordo com a necessidade do seu negócio:
          <br />
          Serviços, Manutenção, Projetos, Treinamentos e Terceirização.
          <br />
          Somos uma empresa com grande experiência no segmento, cujo objetivo é
          a completa satisfação dos nossos clientes.
          <br />
          Equipe de profissionais especializada e qualificada para atender aos
          mais diversos desafios presentes no cotidiano das pequenas, médias e
          grandes empresas.
          <br /> Atendimento rápido e de qualidade.
        </p>
        <div>
          <Figure.Image width={900} height={500} src={worldCloud} alt="" />
        </div>
        <p style={{ textAlign: "center", color: "var(--background_ecm)" }}>
          <strong>
            Nosso objetivo é oferecer as melhores soluções para o seu negócio!
          </strong>
        </p>

        <Divider style={{ borderColor: "lightgray" }} />
      </Container>
    </section>
  );
}

export default Empresa;
