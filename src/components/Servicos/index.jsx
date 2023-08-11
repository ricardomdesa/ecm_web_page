import { useEffect, useState } from "react";
import ModalServicos from "../ModalServicos";
import ControlledCarousel from "./ControlledCarousel";
import { Divider } from "antd";

import { Container } from "react-bootstrap";

function Servicos() {
  const [selectedService, setSelectedService] = useState({});
  const [services, setService] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const readJson = () => {
    const data = require("../../data/db/db.json");
    setService(data.servicos);
  };

  useEffect(() => {
    readJson();
  }, []);

  function handleCardClick(value) {
    let serv = services.filter((obj) => obj.id === value)[0];
    setSelectedService(serv);
    setModalShow(true);
  }

  return (
    <section id="servicos">
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Serviços</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <p style={{ textAlign: "center" }}>
            Soluções customizadas para setores estratégicos.
          </p>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ControlledCarousel
          handleCardClick={handleCardClick}
          services={services}
        />

        {modalShow && (
          <ModalServicos
            show={modalShow}
            onHide={() => setModalShow(false)}
            service={selectedService}
          />
        )}
      <Divider style={{ borderColor: "white" }} />
      <Divider style={{ borderColor: "lightgray" }} />
      </Container>
    </section>
  );
}

export default Servicos;
