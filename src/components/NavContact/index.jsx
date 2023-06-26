import Nav from "react-bootstrap/Nav";
import './style.css'

export default function NavContact() {
  const navStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "rgb(26, 34, 53)",
  };
  const linkStyle = { color: "aliceblue" };

  return (
    <Nav style={navStyle} activeKey="/home">
        <div class="nav-contact-class">
      <Nav.Item>
        <Nav.Link
          className="far fa-regular fa-envelope"
          href="mailto:123@ecm.com.br"
          style={linkStyle}
        >
          &nbsp; abc@ecm.com.br
        </Nav.Link>
      </Nav.Item>
        </div>
        <Nav.Item style={linkStyle} className="fa fa-regular fa-phone">
          &nbsp; (19) 3865-7350
        </Nav.Item>
        <div className="nav-contact-class">
        <Nav.Item style={linkStyle} className="fa fa-brands fa-whatsapp">
          &nbsp; (19) 98210-9681
        </Nav.Item>
        </div>
    </Nav>
  );
}
