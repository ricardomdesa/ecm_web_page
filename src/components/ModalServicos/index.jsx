import Modal from "react-bootstrap/Modal";

function ModalServicos(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
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
    </Modal>
  );
}

export default ModalServicos;
