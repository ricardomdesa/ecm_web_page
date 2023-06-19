import mainLogo from "../../assets/logo.png"
import "../../assets/style/main.css"

function Empresa() {
  return (
    <section id="empresa">
        <div class="container-fluid empresa text-center">
          <img src={mainLogo} width="900" height="500" alt="logo" />
        </div>
        <div class="container-fluid empresa text-center">
          <h3>Quem somos</h3>
          <p>
            A ECM - Serviços e Manutenção Industrial é uma empresa com grande
            experiência no segumento, cujo objetivo é a completa SATISFAÇÃO dos
            nossos clientes.
            <br />
            Contamos com uma equipe especializada e qualificada para atender aos
            mais diversos desafios presentes no cotidiano das pequenas, médias e
            grandes empresas.
          </p>
        </div>
        <hr />
      </section>
  );
}

export default Empresa;
