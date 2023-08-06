import { Container, Figure } from "react-bootstrap";
import mainLogo from "../../assets/logo.png";
import { Divider, Carousel } from "antd";


function Empresa() {
  const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: "gray",
  };
  return (
    <section id="empresa">
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Figure.Image
          style={{ display: "flex" }}
          src={mainLogo}
          width="900"
          height="500"
          alt="logo"
          fluid
        />
      </Container>

      <Container>
          <Carousel 
          autoplay

          >
            <div>
              <Figure.Image
                style={contentStyle}
                src={mainLogo}
                width={900}
                height={500}
                alt=""
              />
            </div>
            <div>
              <Figure.Image
                style={contentStyle}
                src={mainLogo}
                width={900}
                height={500}
                alt=""
              />
            </div>
          </Carousel>
      </Container>

     
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Quem somos</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <p className="empresa_text">
            A ECM - Serviços e Manutenção Industrial é uma empresa com grande
            experiência no segmento, cujo objetivo é a completa satisfação dos
            clientes.
            <br />
            Contamos com uma equipe especializada e qualificada para atender aos
            mais diversos desafios presentes no cotidiano das pequenas, médias e
            grandes empresas.
          </p>
          <br />
          <p style={{ textAlign: "center", color: "var(--background_ecm)" }}>
            <strong>
              Nosso objetivo é oferecer as melhores soluções para nossos
              clientes!
            </strong>
          </p>
        </div>
        <Divider style={{ borderColor: "lightgray" }} />
      </Container>
    </section>
  );
}

export default Empresa;
