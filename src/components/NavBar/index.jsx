import mainLogo from "../../assets/logo.png";
import "../../assets/style/main.css";

function NavBar() {
  return (
    <>
      <nav class="nav-contato">
        <nav class="container nav-container">
          <nav class="row">
            <nav class="col-sm">
              <i class="far fa-regular fa-envelope"></i>
              <a href="mailto:123@ecm.com.br"> abc@ecm.com.br</a>
            </nav>
            <nav class="col-sm">
              <i class="fa fa-regular fa-phone"></i> (19) 3865-7350 &nbsp;&nbsp;
              <i class="fab fa-brands fa-whatsapp"></i> (19) 98210-9681
            </nav>
            <nav class="col-sm">
              <i class="fab fa-brands fa-instagram"></i>
              <a href="https://www.instagram.com/ecmindustrial/">Instagram</a>
            </nav>
          </nav>
        </nav>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src={mainLogo} width="100" height="80" alt="logo"></img>
        </a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#empresa">
                <span class="text-style">Empresa</span>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#servicos">
                <span class="text-style">Serviços</span>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#contato">
                <span class="text-style">Contato</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
