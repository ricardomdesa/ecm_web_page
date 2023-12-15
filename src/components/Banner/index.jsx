import React from "react";
import bannerShow from "../../assets/bannerShow.mp4";

function Banner() {
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <section id="banner">
      {/* <Container>
        <Divider style={{ borderColor: "white" }} /> */}
      <div style={contentStyle}>
        <video loop autoPlay muted style={{ width: "100%" }}>
          <source src={bannerShow} type="video/mp4" />
        </video>
      </div>
      {/* </Container> */}
    </section>
  );
}

export default Banner;
