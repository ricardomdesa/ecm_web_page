import { Container } from "react-bootstrap";
import {
  BsEnvelope,
  BsInstagram,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import Whatsapp from "./Whatapp";

function Contato() {
  const linkStyle = { color: "aliceblue" };
  const [contatos, setContatos] = useState({});
  const [emails, setEmails] = useState([]);

  const readJson = () => {
    const data = require("../../data/db/db.json");
    setContatos(data.contatos);
    setEmails(data.emails);
  };

  useEffect(() => {
    readJson();
  }, []);

  return (
    <section id="contato" style={{ position: "relative", fontSize: "18px" }}>
      <div
        style={{
          backgroundColor: "var(--background_ecm)",
          color: "aliceblue",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginTop: "20px", fontWeight: 600 }}>Contato</h2>
          <p>Entre em contato e solicite a visita do nosso representante:</p>
        </Container>

        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "right",
              justifyContent: "right",
              gap: 2,
              marginBottom: "20px",
            }}
          >
            {emails.map((email, index) => {
              const mailto = `mailto: ${email}`;
              return (
                <a href={mailto} style={{ textDecoration: "None" }}>
                  <span key={index} style={linkStyle}>
                    <BsEnvelope style={linkStyle} />
                    &nbsp; {email} <br />
                  </span>
                </a>
              );
            })}
            <div>
              <br />
              <span>
                <BsTelephone />
                &nbsp;{contatos.telefone} <br />
              </span>
              <span>
                <BsWhatsapp />
                &nbsp;{contatos.whatsapp} <br />
              </span>

              <br />
            </div>
            <div>
              <BsInstagram />
              <a
                href="https://www.instagram.com/ecmindustrial/"
                style={{ textDecoration: "None" }}
              >
                <span style={linkStyle}>&nbsp;Instagram</span>{" "}
              </a>
            </div>
          </Container>
        </Container>

        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <span style={{ color: "var(--azul_ecm)" }}>
            <i>
              <strong>"O nosso maior valor é a sua confiança!"</strong>
            </i>
          </span>
          <Whatsapp number="5519982109681"/>
        </Container>
      </div>
    </section>
  );
}
export default Contato;
