import { useState } from "react";
import { Button, Collapse, NavBar, Nav, Container } from "react-bootstrap";

export default function CollapseMenu() {
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
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <NavBar
          expand="lg"
          style={{ backgroundColor: "var(--background_ecm)" }}
        >
          <Container style={containerStyle}>
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
        </NavBar>
      </Collapse>
    </>
  );
}
