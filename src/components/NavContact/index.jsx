import Nav from "react-bootstrap/Nav";
import { BsEnvelope, BsTelephone, BsWhatsapp } from "react-icons/bs";
import "./style.css";
import { useEffect, useState } from "react";

export default function NavContact() {
  const navStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--background_ecm)",
  };
  const linkStyle = { color: "aliceblue", fontSize: "18px" };
  const itemStyle = {
    color: "aliceblue",
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "18px"
  };
  const [contatos, setContatos] = useState({});

  const readJson = () => {
    const data = require("../../data/db/db.json");
    setContatos(data.contatos);
  };

  useEffect(() => {
    readJson();
  }, []);

  return (
    <Nav style={navStyle} activeKey="/home">
      <div class="nav-contact-class">
        <Nav.Item>
          <Nav.Link href="mailto:ecm@ecmindustrial.com.br" style={linkStyle}>
            <BsEnvelope />
            &nbsp;ecm@ecmindustrial.com.br
          </Nav.Link>
        </Nav.Item>
        &nbsp;&nbsp;&nbsp;
        <Nav.Item style={itemStyle}>
          <BsTelephone />
          &nbsp;{contatos.telefone}
        </Nav.Item>
        &nbsp;&nbsp;&nbsp;
      </div>
      <Nav.Item style={itemStyle}>
        <BsWhatsapp />
        &nbsp;{contatos.whatsapp}
      </Nav.Item>
    </Nav>
  );
}
