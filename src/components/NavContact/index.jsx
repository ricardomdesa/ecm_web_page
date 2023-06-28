import Nav from "react-bootstrap/Nav";
import { BsEnvelope, BsPhone, BsWhatsapp } from "react-icons/bs";
import "./style.css";

export default function NavContact() {
  const navStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "rgb(26, 34, 53)",
  };
  const linkStyle = { color: "aliceblue" };
  const itemStyle = { color: "aliceblue", marginTop: "5px", marginBottom: "5px"};

  return (
    <Nav style={navStyle} activeKey="/home">
      <div class="nav-contact-class">
        <Nav.Item>
          <Nav.Link href="mailto:123@ecm.com.br" style={linkStyle}>
            <BsEnvelope />
            &nbsp; abc@ecm.com.br
          </Nav.Link>
        </Nav.Item>
        &nbsp;&nbsp;&nbsp;
        <Nav.Item style={itemStyle}>
          <BsPhone />
          &nbsp; (19) 3865-7350
        </Nav.Item>
        &nbsp;&nbsp;&nbsp;
      </div>
      <Nav.Item style={itemStyle}>
        <BsWhatsapp />
        &nbsp; (19) 98210-9681
      </Nav.Item>
    </Nav>
  );
}
