import { Container, Figure } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Divider } from "antd";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const readJson = () => {
    const data = require("../../data/db/db.json");
    setClientes(data.clientes);
  };
  useEffect(() => {
    readJson();
  }, []);

  return (
    <section id="clientes" style={{ marginBottom: "30px" }}>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Nossos Clientes</h3>

        <div class="container-fluid">
          <div class="row justify-content-md-center align-items-center">
            {clientes.map((cliente, index) => {
              const imagem = require(`../../assets/clientes/${cliente}`);
              return (
                <div
                  key={index}
                  class="col-sm-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 140,
                  }}
                >
                  <Figure.Image
                    width={140}
                    height={80}
                    alt=""
                    src={imagem}
                    style={{ display: "block", marginBottom: "80" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      <Divider style={{ borderColor: "white" }} />
      </Container>
    </section>
  );
}

export default Clientes;
