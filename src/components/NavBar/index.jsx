import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import mainLogo from "../../assets/logo_crop.png";

function NavBar() {
  const navStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 16,
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    alignItems: "center",
  };
  const linkStyle = { color: "aliceblue", fontsize: "20px" };
  const removeTxtDecoration = { textDecoration: "None" };

  return (
    <>
      
      <Navbar expand="lg" style={{ backgroundColor: "rgb(26, 34, 53" }}>
        <Container style={containerStyle}>
          <Navbar.Brand href="#home">
            <img src={mainLogo} width="100" height="60" alt="logo"></img>
          </Navbar.Brand>
          <Nav className="me-auto justify-content-center" style={navStyle}>
            <Nav.Link href="#empresa">
              <span style={linkStyle}>
                <u style={removeTxtDecoration}>Empresa</u>
              </span>
            </Nav.Link>
            <Nav.Link href="#servicos">
              <span style={linkStyle}>
                <u style={removeTxtDecoration}>Serviços</u>
              </span>
            </Nav.Link>
            <Nav.Link href="#contato">
              <span style={linkStyle}>
                <u style={removeTxtDecoration}>Contato</u>
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
