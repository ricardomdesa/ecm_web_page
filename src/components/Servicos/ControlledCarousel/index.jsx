import { Card, Carousel, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel(props) {
  return (
    <>
      <Carousel style={{ height: 500 }} variant="dark">
        {props.imagesTexts.map((data, index, array) => (
          <Carousel.Item key={index}>
            <Stack style={{ justifyContent: "center", alignItems: "center" }}>
              <Card
                onClick={() => {
                  props.handleCardClick(data.text);
                }}
              >
                <Figure.Image
                  width={500}
                  height={200}
                  alt="171x180"
                  src={data.image}
                  style={{ display: "block" }}
                />
                <Card.Text
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(239, 174, 51)",
                  }}
                >
                  {data.text}
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
