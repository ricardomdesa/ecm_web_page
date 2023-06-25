import { Card, Carousel, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

import "bootstrap/dist/css/bootstrap.min.css";

const getImage = (ids) => {
  switch (ids) {
    case "eletrica":
      return require("../../../assets/eletrica.jpg");
    case "mecanica":
      return require("../../../assets/caldera.jpg");
    case "refrigeracao":
      return require("../../../assets/arcond.jpg");
    case "construcao":
      return require("../../../assets/civil.jpg");
    case "cozinha":
      return require("../../../assets/cozinha.jpg");
    case "laudos":
      return require("../../../assets/laudo.jpg");
    case "terceirizacao":
      return require("../../../assets/terceiro.jpg");
    default:
      break;
  }
};

function ControlledCarousel(props) {
  return (
    <>
      <Carousel style={{ height: 500 }} variant="dark" fade="false">
        {props.services.map((data, index) => (
          <Carousel.Item key={index}>
            <Stack style={{ ustifyContent: "center", alignItems: "center" }}>
              <Card
                onClick={() => {
                  props.handleCardClick(data.id);
                }}
              >
                <Figure.Image
                  width={500}
                  height={200}
                  alt=""
                  src={getImage(data.id)}
                  style={{ display: "block", marginBottom: "0" }}
                />
                <Card.Text
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(239, 174, 51)",
                  }}
                >
                  {data.title}
                </Card.Text>
              </Card>
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ControlledCarousel;
