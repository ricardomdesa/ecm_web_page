import { Card, Carousel, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

import "bootstrap/dist/css/bootstrap.min.css";

import arcond from "../../../assets/arcond.jpg";
import caldera from "../../../assets/caldera.jpg";
import civil from "../../../assets/civil.jpg";
import cozinha from "../../../assets/cozinha.jpg";
import eletrica from "../../../assets/eletrica.jpg";
import laudo from "../../../assets/laudo.jpg";
import terceiro from "../../../assets/terceiro.jpg";

const getImage = (ids) => {
  switch (ids) {
    case "eletrica":
      return eletrica;
    case "mecanica":
      return caldera;
    case "refrigeracao":
      return arcond;
    case "construcao":
      return civil;
    case "cozinha":
      return cozinha;
    case "laudos":
      return laudo;
    case "terceirizacao":
      return terceiro;
    default:
      break;
  }
};

function ControlledCarousel(props) {
  return (
    <>
      <Carousel style={{ height: 500 }} variant="dark">
        {props.services.map((data, index, array) => (
          <Carousel.Item key={index}>
            <Stack style={{ justifyContent: "center", alignItems: "center" }}>
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
                  style={{ display: "block" }}
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
