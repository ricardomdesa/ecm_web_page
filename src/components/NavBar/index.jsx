import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/logo_crop.png";
import NavSessionLinks from "./NavSessionLinks";

function NavBar(props) {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    alignItems: "center",
  };
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "var(--background_ecm)" }}>
        <Container style={containerStyle} fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src={mainLogo} width="100" height="60" alt="logo"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FiMenu style={{ color: "white" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavSessionLinks isHome={props.isHome} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
