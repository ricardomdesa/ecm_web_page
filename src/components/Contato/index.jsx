import { Container } from "react-bootstrap";
import { BsEnvelope, BsInstagram, BsPhone, BsWhatsapp } from "react-icons/bs";

function Contato() {
  const linkStyle = { color: "rgb(0, 130, 199)" };
  return (
    <section id="contato" style={{ position: "relative" }}>
      <div
        style={{
          backgroundColor: "rgb(26, 34, 53",
          color: "aliceblue",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <h3>Contato</h3>
        </Container>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 40,
          }}
        >
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              marginBottom: "20px",
            }}
          >
            <div>
              <br />
              <p>
                Entre em contato e solicite a visita do nosso representante:
              </p>
              <br />
              <span>
                <BsPhone />
                (19) 3865-7350 <br />
              </span>
              <span>
                <BsWhatsapp />
                (19) 98210-9681 <br />
              </span>
              <a href="mailto:123@ecm.com.br">
                <span>
                  <BsEnvelope style={{color: "white"}}/>
                  <u style={linkStyle}> abc@ecm.com.br</u>
                </span>{" "}
              </a>
            </div>
            <div>
              <BsInstagram />
              <a href="https://www.instagram.com/ecmindustrial/">
                <span style={linkStyle}>
                  <u> Instagram</u>
                </span>{" "}
              </a>
            </div>
          </Container>
          <Container
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "rgb(0, 130, 199)" }}>
              <i>
                <strong>"O nosso maior valor é a sua confiança!"</strong>
              </i>
            </span>
          </Container>
        </Container>
      </div>
    </section>
  );
}
export default Contato;
