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
                Entre em contato e solicite a visita do nosso representante:
              </p>
              <br />
              <i class="fa fa-regular fa-phone"></i> (19) 3865-7350 <br />
              <i class="fab fa-brands fa-whatsapp"></i> (19) 98210-9681 <br />
              <i class="far fa-regular fa-envelope"></i>
              <a href="mailto:123@ecm.com.br">
                <span style={linkStyle}><u> abc@ecm.com.br</u></span>{" "}
              </a>
              
            </div>
            <div>
              <i class="fab fa-brands fa-instagram"></i>
              <a href="https://www.instagram.com/ecmindustrial/">
                
                <span style={linkStyle}><u> Instagram</u></span>{" "}
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
              <i><strong>"O nosso maior valor é a sua confiança!"</strong></i>
            </span>
          </Container>
        </Container>
      </div>
    </section>
  );
}
export default Contato;
