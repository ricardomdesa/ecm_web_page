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
  const removeTxtDecoration = { textDecoration: "None" };
  return (
    <>
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
    </>
  );
}
