function NavBar() {
    return <>
        <nav class="contato">
            <nav class="container nav-container">
                <nav class="row">
                    <nav class="container-fluid text-left">
                        <p>Entre em contato e solicite visita do nosso representante:</p>
                    </nav>
                    <nav class="col-sm">
                        <i class="far fa-regular fa-envelope"></i>
                        <a href='mailto:123@ecm.com.br'> abc@ecm.com.br</a>
                    </nav>
                    <nav class="col-sm">
                        <i class="fa fa-regular fa-phone"></i> (19) 3865-7350 &nbsp;&nbsp;
                        <i class="fab fa-brands fa-whatsapp"></i> (19) 98210-9681
                    </nav>
                    <nav class="col-sm">
                        <i class="fab fa-brands fa-instagram"></i>
                        <a href='https://www.instagram.com/ecmindustrial/'>Instagram</a>
                    </nav>
                </nav>
            </nav>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light" >
            <a class="navbar-brand" href="#">
                {/* <img src="media/logo.png" width="100" height="80"> */}
            </a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#empresa">Empresa</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#servicos">Serviços</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#contato">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
        <hr></hr>
    </>
}

export default NavBar