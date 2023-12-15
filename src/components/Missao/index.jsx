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
        <h3>MISSÃO, VISÃO E VALORES ECM</h3>

        <div>
          <p> MISSÃO </p>
          <p
            style={{ textAlign: "center", color: "var(--background_ecm)" }}
          ></p>
        </div>

        <div>
          <p> VISÃO </p>
          <p
            style={{ textAlign: "center", color: "var(--background_ecm)" }}
          ></p>
        </div>

        <div>
          <p> VALORES </p>
          <p
            style={{ textAlign: "center", color: "var(--background_ecm)" }}
          ></p>
        </div>

        <Divider style={{ borderColor: "lightgray" }} />
      </Container>
    </section>
  );
}

export default Missao;
