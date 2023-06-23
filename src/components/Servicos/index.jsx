import { useState } from "react";
import ModalServicos from "../ModalServicos"
import Button from 'react-bootstrap/Button';
import ControlledCarousel from "./ControlledCarousel";

import arcond from "../../assets/arcond.jpg";
import caldera from "../../assets/caldera.jpg";
import civil from "../../assets/civil.jpg";
import cozinha from "../../assets/cozinha.jpg";
import eletrica from "../../assets/eletrica.jpg";
import laudo from "../../assets/laudo.jpg";
import terceiro from "../../assets/terceiro.jpg";

import { Container } from "react-bootstrap";

function Servicos() {
  const [selectedService, setselectedService] = useState(" ");
  const [modalShow, setModalShow] = useState(false);

  function handleCardClick(value) {
    setselectedService(value);
  }

  const imagesTexts = [
    { image: eletrica, text: "Elétrica" },
    { image: caldera, text: "Mecanica e Calderaria" },
    { image: arcond, text: "Refrigeração" },
    { image: civil, text: "Construção Civil" },
    { image: cozinha, text: "Cozinha Industrial" },
    { image: laudo, text: "Treinamentos e Laudos Eletricos" },
    { image: terceiro, text: "Terceirização de serviços" },
  ];

  return (
    <section id="servicos">
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px 30px 30px 30px",
        }}
      >
        <h3>Serviços</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "30px",
          }}
        >
          <p>Soluções customizadas para setores estratégicos.</p>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <Button variant="primary" onClick={() => setModalShow(true)}>
        modal 1
        </Button>
        <ModalServicos
        show={modalShow}
        onHide={() => setModalShow(false)}
        service={service}
        />
        <ControlledCarousel
          handleCardClick={handleCardClick}
          imagesTexts={imagesTexts}
        />
      </Container>
    </section>
  )
}

export default Servicos;
