import "../../assets/style/main.css"

function Contato(){
    return <section id="contato">
            <div class="contato">
                <div class="container-fluid text-center">
                    <h3>Contato</h3>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <p> <strong>Nosso objetivo é oferecer as melhores soluções para nossos clientes! </strong></p>
                        </div>
                        <div class="col-sm">
                            <p><strong>Solicite a visita de nosso representante:</strong></p>
                            <i class="fa fa-regular fa-phone"></i> (19) 3865-7350 <br />
                            <i class="fab fa-brands fa-whatsapp"></i> (19) 98210-9681 <br />
                            <i class="far fa-regular fa-envelope"></i>
                            <a href='mailto:123@ecm.com.br'><span class="text-link">abc@ecm.com.br</span> </a>
                        </div>
                        <div class="col-sm">
                            <p><strong>Nossas redes</strong></p>
                            <i class="fab fa-brands fa-facebook"></i> Facebook <br />
                           
                            <i class="fab fa-brands fa-linkedin"></i> Linkedin <br />

                            <i class="fab fa-brands fa-instagram"></i>
                            <a href='https://www.instagram.com/ecmindustrial/'> <span class="text-link">Instagram</span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}
export default Contato