import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";

export default function NavSessionLinks(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyle = {
    color: "aliceblue",
    fontsize: "20px",
    textDecoration: "none",
  };
  const navigate = useNavigate();
  return (
    <>
      <Nav className="me-auto" style={navStyle}>
        <Nav.Link>
          <Link to="/" style={linkStyle}>
            Inicio
          </Link>
        </Nav.Link>
        {props.isHome && (
          <>
              <Nav>
                <NavDropdown
                  id="nav-dropdown-example"
                  title={<span style={linkStyle}>Empresa</span>}
                >
                  <NavDropdown.Item href="#empresa">Quem somos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#missao">Missão</NavDropdown.Item>
                </NavDropdown>
              </Nav>

            <Nav.Link href="#clientes">
              <span style={linkStyle}>Clientes</span>
            </Nav.Link>
            <Nav.Link href="#contato">
              <span style={linkStyle}>Contato</span>
            </Nav.Link>
            <Navbar.Collapse id="navbar-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-example"
                  title={<span style={linkStyle}>Soluções</span>}
                >
                  <NavDropdown.Item href="#servicos">Serviços</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => navigate("../portifolio", { replace: true })}
                  >
                    Portifolio
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>




            </Navbar.Collapse>
          </>
        )}
      </Nav>
    </>
  );
}
