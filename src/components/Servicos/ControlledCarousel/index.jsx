import { Card, Carousel, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

function ControlledCarousel(props) {
  const handleClick = (data) => {
    props.handleCardClick(data);
  };

  return (
    <>
      <Carousel style={{ height: 500 }} variant="dark">
        {props.imagesTexts.map((data, index, array) => (
          <Carousel.Item onClick={handleClick(array[index].text)} key={index} style={{ height: 500 }}>
            <Stack style={{ justifyContent: "center", alignItems: "center" }}>
              <Card>
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
