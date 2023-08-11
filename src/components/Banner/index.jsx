import { Carousel, Divider } from "antd";
import { Container, Figure } from "react-bootstrap";
import mainLogo from "../../assets/logo.png";
import worldCloud from "../../assets/worldCloud.png";
import "./style.css";

function Banner() {
  const contentStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <section id="banner">
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <Figure.Image width={950} height={550} src={mainLogo} alt="" />
          </div>
        </div>

        <div>
          <div style={contentStyle}>
            <Figure.Image width={900} height={500} src={worldCloud} alt="" />
          </div>
          <Divider style={{ borderColor: "white" }} />
        </div>
      </Carousel>
      
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </Container>
    </section>
  );
}

export default Banner;