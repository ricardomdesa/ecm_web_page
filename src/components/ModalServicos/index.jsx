import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
            <p>* Projetos elétricos (novas instalações, alteração de layout, etc);</p>
            <p>* Manutenção em equipamentos industriais;</p>
            <p>* Infraestrutura elétrica;</p>
            <p>* Adequação de equipamentos conforme NR10 e NR12;</p>
            <p>* Produtos e Soluções em Automação Industrial;</p>
            <p>* Projetos Unifilares;</p>
            <p>* Consultoria de Projetos elétricos e eletrônicos.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default ModalServicos