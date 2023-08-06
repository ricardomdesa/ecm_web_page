import Modal from "react-bootstrap/Modal";

function ModalServicos(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        style={
          {
            // background:"lightblue",
            // backgroundImage: `url("https://img.freepik.com/fotos-gratis/um-eletricista-trabalha-em-uma-mesa-telefonica-com-um-cabo-eletrico-de-conexao_169016-16570.jpg?size=626&ext=jpg&uid=R106816963&ga=GA1.2.347986672.1686846170")`,
            // opacity: 0.6
          }
        }
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
      </div>
    </Modal>
  );
}

export default ModalServicos;
