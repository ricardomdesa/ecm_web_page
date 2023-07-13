import { Container, Card, CardGroup, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Portifolio() {
  const [portifolio, setPortifolio] = useState([]);
  const readJson = () => {
    const data = require("../../data/db/db.json");
    setPortifolio(data.portifolio);
  };
  useEffect(() => {
    readJson();
  }, []);

  return (
    <section id="portifolio" style={{ marginBottom: "30px" }}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <br></br>
        <h3>NOSSOS SERVIÇOS</h3>

        <div>
          <CardGroup>
            <Row xs={1} md={2} className="g-4">
              {portifolio.map((portifolio, index) => {
                const imagem = require(`../../assets/portifolioServico/${portifolio}`);
                return (
                  <Col>
                    <Card border="warning" style={{ marginBottom: 10 }}>
                      <Card.Img src={imagem} variant="top" />
                      <Card.Body>
                        {/* <Card.Text>TEXTO</Card.Text> */}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </CardGroup>
        </div>
        <br></br>
      </Container>
    </section>
  );
}
export default Portifolio;
