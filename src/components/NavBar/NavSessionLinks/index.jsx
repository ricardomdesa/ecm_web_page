import Nav from "react-bootstrap/Nav";

export default function NavSessionLinks() {
  const navStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 16,
  };
  const linkStyle = { color: "aliceblue", fontsize: "20px" };
  return (
    <>
      <Nav className="me-auto justify-content-center" style={navStyle}>
        <Nav.Link href="#empresa">
          <span style={linkStyle}>Empresa</span>
        </Nav.Link>
        <Nav.Link href="#servicos">
          <span style={linkStyle}>Serviços</span>
        </Nav.Link>
        <Nav.Link href="#clientes">
          <span style={linkStyle}>Clientes</span>
        </Nav.Link>
        <Nav.Link href="#contato">
          <span style={linkStyle}>Contato</span>
        </Nav.Link>
      </Nav>
    </>
  );
}
