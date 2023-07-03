import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { BsEnvelope, BsTelephone, BsWhatsapp } from "react-icons/bs";
import "./style.css";

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
    fontSize: "18px",
  };
  const [contatos, setContatos] = useState({});

  const readJson = () => {
    const data = require("../../data/db/db.json");
    setContatos(data.contatos);
  };

  useEffect(() => {
    readJson();
  }, []);
  const linkTxt = `https://wa.me/${contatos.whatsapp_link}?text=`
  return (
    <Nav style={navStyle} activeKey="/home">
      <div class="nav-contact-class">
        <Nav.Item>
          <a
            style={{
              textDecoration: "None",
              color: "aliceblue",
              fontSize: "18px",
            }}
            href="mailto:ecm@ecmindustrial.com.br"
          >
            <BsEnvelope />
            &nbsp;ecm@ecmindustrial.com.br
          </a>
        </Nav.Item>
        &nbsp;&nbsp;&nbsp;
        <Nav.Item style={itemStyle}>
          <BsTelephone />
          &nbsp;{contatos.telefone}
        </Nav.Item>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div style={{ display: "flex" }}>
        <Nav.Item style={itemStyle} onClick={() => window.open(linkTxt, "_blank")}>
          <BsWhatsapp />
          &nbsp;{contatos.whatsapp}
        </Nav.Item>
      </div>
    </Nav>
  );
}
