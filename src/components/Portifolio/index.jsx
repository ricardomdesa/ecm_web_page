import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import "./style.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Portifolio() {
  const [portifolio, setPortifolio] = useState([]);
  const readJson = () => {
    const data = require("../../data/db/db.json");
    setPortifolio(data.portifolio);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
        <h3 style={{ margin: "20px 0 30px 0" }}>SERVIÇOS REALIZADOS</h3>

        <Container>
          <Carousel
            class="arrowStyle"
            responsive={responsive}
            infinite
            autoPlay
            shouldResetAutoplay
          >
            {portifolio.map((portifolio) => {
              const imagem = require(`../../assets/portifolioServico/${portifolio}`);
              return (
                <div style={{ margin: "10px" }}>
                  <Card.Img
                    src={imagem}
                    variant="top"
                    alt=""
                    style={{
                      borderColor: "rgb(239,174,051)",
                      borderRadius: "10px",
                      borderStyle: "solid",
                    }}
                  />
                  {/* <Card.Text style={{
                    display: "flex",
                    justifyContent: "center",
                   }}
                   >
                    <p> legenda </p>
                  </Card.Text> */}
                </div>
              );
            })}
          </Carousel>
        </Container>
        <br></br>
      </Container>
    </section>
  );
}
export default Portifolio;
