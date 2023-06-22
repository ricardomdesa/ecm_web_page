import { Container } from "react-bootstrap";

function Contato() {
  const linkStyle = { color: "rgb(0, 130, 199)" };
  return (
    <section id="contato">
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
                <strong>
                  Entre em contato e solicite a visita do nosso representante:
                </strong>
              </p>
              <br />
              <i class="fa fa-regular fa-phone"></i> (19) 3865-7350 <br />
              <i class="fab fa-brands fa-whatsapp"></i> (19) 98210-9681 <br />
              <i class="far fa-regular fa-envelope"></i>
              <a href="mailto:123@ecm.com.br">
                <span style={linkStyle}> abc@ecm.com.br</span>{" "}
              </a>
            </div>
            <div>
              <i class="fab fa-brands fa-instagram"></i>
              <a href="https://www.instagram.com/ecmindustrial/">
                {" "}
                <span style={linkStyle}> Instagram</span>{" "}
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
              "O nosso maior valor é a sua confiança!"
            </span>
          </Container>
        </Container>
      </div>
    </section>
  );
}
export default Contato;
