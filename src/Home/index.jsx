import Empresa from "../components/Empresa";
import Servicos from "../components/Servicos";
import NavBar from "../components/NavBar";
import Contato from "../components/Contato";
import Footer from "../components/Footer";
import NavContact from "../components/NavContact";

import styles from "./index.module.css";
import "../assets/style/main.css";


function Home() {
  return (
      <div className={styles.Layout}>
        <section className={styles.Layout__Header}>
          <header>
            <NavContact />
          </header>
        </section>

        <section className={styles.Layout__Body}>
          <NavBar />
          <Empresa />
          <Servicos />
          <Contato />
        </section>

        <section className={styles.Layout__Footer}>
          <Footer />
        </section>
      </div>
  );
}

export default Home;
