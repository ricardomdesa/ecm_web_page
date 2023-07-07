import { Container, Figure } from "react-bootstrap";
import { useEffect, useState } from "react";

function Clientes() {
  const imagem1 = require("../../assets/clientes/dayco.png")

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


      <div class="row justify-content-md-center" >
      {clientes.map((cliente, index) => {
        const imagem = require(`../../assets/clientes/${cliente}`)
        return (
        <div key={index} class="col col-sm-3">
          <img src={imagem} width={140} height={80}></img>
        </div>
        )  
      }
      )
    }
      </div>


      </Container>

      <hr />
    </section>
  );
}

export default Clientes;
