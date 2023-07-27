import Empresa from "../components/Empresa";
import Servicos from "../components/Servicos";
import Clientes from "../components/Clientes";
import NavBar from "../components/NavBar";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import NavContact from "../components/NavContact";

import styles from "./index.module.css";
import "../assets/style/main.css";

function HomePage() {
  return (
    <div className={styles.Layout}>
      <section className={styles.Layout__Header}>
        <header>
          <NavContact />
        </header>
      </section>

      <section className={styles.Layout__Body}>
        <NavBar isHome={true} />
        <Empresa />
        <Servicos />
        <Clientes />
        <Contato />
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
