import React from "react";
import { Divider } from "antd";
import { Container } from "react-bootstrap";
import bannerShow from "../../assets/bannerShow.mp4";
import "./style.css";

function Banner() {
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <section id="banner">
      
      <Container>
      <Divider style={{ borderColor: "white" }} />
        <div style={contentStyle} >
          <video loop autoPlay muted className="video">
            <source src={bannerShow} type="video/mp4" />
          </video>
        </div>
      </Container>
    </section>
  );
}

export default Banner;