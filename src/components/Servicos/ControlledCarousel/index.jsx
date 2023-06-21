import { Carousel, Card, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import "../../../assets/style/main.css";

import eletrica from "../../../assets/eletrica.jpg";
import caldera from "../../../assets/caldera.jpg";
import arcond from "../../../assets/arcond.jpg";
import civil from "../../../assets/civil.jpg";
import cozinha from "../../../assets/cozinha.jpg";
import laudo from "../../../assets/laudo.jpg";
import terceiro from "../../../assets/terceiro.jpg";

function ControlledCarousel() {
  const imagesTexts = [
    { image: eletrica, text: "Elétrica" },
    { image: caldera, text: "Mecanica e Calderaria" },
    { image: arcond, text: "Refrigeração" },
    { image: civil, text: "Construção Civil" },
    { image: cozinha, text: "Cozinha Industrial" },
    { image: laudo, text: "Treinamentos e Laudos Elétricos" },
    { image: terceiro, text: "Terceirização de serviços" },
  ];

  return (
    <>
      <Carousel style={{ height: 500 }}>
        {imagesTexts.map((_, index, array) => (
          <Carousel.Item style={{ height: 500 }}>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              {array[index - 1] && (
                <Card>
                  <Figure.Image
                    className="d-block"
                    width={300}
                    height={200}
                    alt="171x180"
                    src={
                      array[index - 1]
                        ? array[index - 1].image
                        : array[index].image
                    }
                  />
                  <Card.Text>
                    {array[index - 1]
                      ? array[index - 1].text
                      : array[index].text}
                  </Card.Text>
                </Card>
              )}
              <Card>
                <Figure.Image
                  className="d-block"
                  width={300}
                  height={200}
                  alt="171x180"
                  src={array[index].image}
                />
                <Card.Text>{array[index].text}</Card.Text>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Figure.Image
                  className="d-block"
                  width={300}
                  height={200}
                  alt="171x180"
                  src={
                    array[index + 1] ? array[index + 1].image : array[0].image
                  }
                />
                <Card.Text>
                  {array[index + 1] ? array[index + 1].text : array[0].text}
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
