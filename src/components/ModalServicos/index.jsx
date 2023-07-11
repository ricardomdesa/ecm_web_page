import Modal from "react-bootstrap/Modal";
import {Figure} from "react-bootstrap";

function ModalServicos(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <div
      style={{
        // background:"lightblue",
        // backgroundImage: `url("https://img.freepik.com/fotos-gratis/um-eletricista-trabalha-em-uma-mesa-telefonica-com-um-cabo-eletrico-de-conexao_169016-16570.jpg?size=626&ext=jpg&uid=R106816963&ga=GA1.2.347986672.1686846170")`,
        // opacity: 0.6
      }}
      > 

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.service.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <ul>
          {props.service.conteudos.map((text, idx) => (
            <li key={idx}>{text}</li>
            ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>

      {props.service.imgModal.map((data, index) => {
        const imageModal = require(`../../assets/servicos/${data}`)
        return (
          <div key={index}>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              >            
              <Figure.Image
                width={200}
                height={100}
                alt=""
                src={imageModal}
                style={{ display: "block", marginBottom: "80" }}
                />
          </div>
          </div>
        )})}
      </Modal.Footer>
        </div>
    </Modal>
  );
}

export default ModalServicos;
