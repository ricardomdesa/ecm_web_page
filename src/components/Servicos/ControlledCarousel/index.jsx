import { Card, Carousel, Stack } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

function ControlledCarousel(props) {
  const handleClick = (data) => {
    props.handleCardClick(data);
  };

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
