import { Divider } from "antd";
import { Container } from "react-bootstrap";

function Missao() {
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <section id="missao">

      <Container style={contentStyle}>
          <h3>Missão Visão e Valores</h3>
      

        <div>
          <p> MISSÃO ECM </p>
          <p style={{ textAlign: "center", color: "var(--background_ecm)" }}>
          </p>
        </div>

        <div>
          <p> VISÃO ECM </p>
          <p style={{ textAlign: "center", color: "var(--background_ecm)" }}>
          </p>
        </div>

        <div>
          <p> VALORES ECM </p>
          <p style={{ textAlign: "center", color: "var(--background_ecm)" }}>
          </p>
        </div>

        <Divider style={{ borderColor: "lightgray" }} />
        </Container>
    </section>
  );
}

export default Missao;
