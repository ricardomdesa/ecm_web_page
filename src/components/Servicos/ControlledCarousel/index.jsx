import { Carousel } from "antd";
import { Card, Figure } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GiClick } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

function ControlledCarousel(props) {
  const ref = useRef();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          marginTop: "30px",
        }}
      >
        <BsChevronLeft size={40} onClick={() => ref.current.prev()} />

        <div style={{ width: "400px", height: "300px" }}>
          <Carousel
            autoplay
            dots={false}
            pauseOnHover={true}
            pauseOnDotsHover={true}
            draggable
            ref={ref}
            prevArrow={true}
            style={{ paddingBottom: "40px" }}
          >
            {props.services.map((data, index) => (
              <div key={index}>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                        fontSize: 22,
                      }}
                    >
                      {data.title}
                      <GiClick style={{ marginLeft: 20 }} />
                    </Card.Text>
                  </Card>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <BsChevronRight size={40} onClick={() => ref.current.next()} />
      </div>
    </>
  );
}

export default ControlledCarousel;
