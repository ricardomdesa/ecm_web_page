import { Card, Carousel, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel(props) {
  return (
    <>
      <Carousel
        style={{
          height: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="dark"
        fade="false"
      >
        {props.services.map((data, index) => (
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
                  src={data.img_servico}
                  style={{ display: "block", marginBottom: "0" }}
                />
                <Card.Text
                  style={{
                    textAlign: "center",
                    backgroundColor: "var(--amarelo_ecm)",
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
