import { useState } from "react";
import "../../assets/style/main.css"
import ModalServicos from "../ModalServicos"
import Button from 'react-bootstrap/Button';
import ControlledCarousel from "./ControlledCarousel"


function Servicos(){
    const [modalShow, setModalShow] = useState(false);
    return <section id="servicos">
        <div class="container-fluid servicos text-center">
            <h3>Serviços</h3>
            <p>Soluções customizadas para setores estratégicos.</p>
        </div>
        <ControlledCarousel />
        <Button variant="primary" onClick={() => setModalShow(true)}>
        modal 1
        </Button>
        <ModalServicos
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        <div class="carrosel-servico">
        </div>
    </section>
}

export default Servicos