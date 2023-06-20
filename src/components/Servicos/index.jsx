import "../../assets/style/main.css"
import ControlledCarousel from "./ControlledCarousel"


function Servicos(){
    return <section id="servicos">
        <div class="container-fluid servicos text-center">
            <h3>Serviços</h3>
            <p>Soluções customizadas para setores estratégicos.</p>
        </div>
        <ControlledCarousel />
        <div class="carrosel-servico">
        </div>
    </section>
}

export default Servicos