import { Card, Carousel, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

import eletrica from "../../../assets/eletrica.jpg";
import caldera from "../../../assets/caldera.jpg";
import arcond from "../../../assets/arcond.jpg";
import civil from "../../../assets/civil.jpg";
import cozinha from "../../../assets/cozinha.jpg";
import laudo from "../../../assets/laudo.jpg";
import terceiro from "../../../assets/terceiro.jpg";

function ControlledCarousel() {
  const handleClick = (data) => {
    props.handleCardClick(data);
  };
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
      <Carousel style={{ height: 500 }} variant="dark" slide="false">
        {props.imagesTexts.map((data, index, array) => (
          <Carousel.Item onClick={handleClick(array[index].text)}>
            <Stack
              direction="horizontal"
              className="justify-content-center align-items-center"
            >
              <Card>
                <Figure.Image
                  className="d-block"
                  width={500}
                  height={200}
                  alt="171x180"
                  src={data.image}
                />
                <div
                  className="p-2 justify-content-center align-items-center"
                  style={{ backgroundColor: "rgb(239, 174, 51)" }}
                >
                  {data.text}
                </div>
              </Card>
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ControlledCarousel;
