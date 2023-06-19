import eletrica from "../../assets/eletrica.jpg"
import caldera from "../../assets/caldera.jpg"
import arcond from "../../assets/arcond.jpg"
import civil from "../../assets/civil.jpg"
import cozinha from "../../assets/cozinha.jpg"
import laudo from "../../assets/laudo.jpg"
import terceiro from "../../assets/terceiro.jpg"
import { Helmet } from "react-helmet";

import "../../assets/style/main.css"


function Servicos(){
    return <section id="servicos">
        <div class="container-fluid servicos text-center">
            <h3>Serviços</h3>
            <p>Soluções customizadas para setores estratégicos.</p>
        </div>
        <div class="carrosel-servico">
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <img class="box" src={eletrica} alt="eletrica" srcset="" />
                    <div class="legenda">
                        <p>Elétrica</p>
                    </div>
                </div>
                <div class="item">
                    <img class="box" src={caldera} alt="caldera" srcset="" />
                    <div class="legenda">
                        <p>Calderaria</p>
                    </div>
                </div>
                <div class="item"> 
                    <img class="box" src={arcond} alt="arcond" srcset="" /> 
                    <div class="legenda">
                        <p>Refrigeração</p>
                    </div>
                </div>
                <div class="item">
                    <img class="box" src={civil} alt="civil" srcset="" />
                    <div class="legenda">
                        <p>Construção</p>
                    </div>
                </div>
                <div class="item">
                    <img class="box" src={cozinha} alt="cozinha" srcset="" />
                    <div class="legenda">
                        <p>Cozinha</p>
                    </div>
                </div>
                <div class="item">
                    <img class="box" src={laudo} alt="laudo" srcset="" />
                    <div class="legenda">
                        <p>Laudo</p>
                    </div>
                </div>
                <div class="item">
                    <img class="box" src={terceiro} alt="terceiro" srcset="" />
                    <div class="legenda">
                        <p>Terceirização</p>
                    </div>
                </div>
            </div>
        </div>

        <Helmet>
            <script src="./style/js/owl/jquery.min.js"></script>
            <script src="./style/js/owl/owl.carousel.min.js"></script>
            <script src="./style/js/owl/setup.js"></script>
        </Helmet>
    </section>
}

export default Servicos