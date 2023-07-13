import React from "react";

import NavContact from "../components/NavContact";

import Portifolio from "../components/Portifolio";
import Footer from "../components/Footer";

import styles from "../HomePage/index.module.css";
import NavBar from "../components/NavBar";

function PortifolioPage() {
  return (
    <div className={styles.Layout}>
      <section className={styles.Layout__Header}>
        <header>
          <NavContact />
          <NavBar isHome={false} />
        </header>
      </section>

      <section className={styles.Layout__Body}>
        <section>
          <Portifolio />
        </section>

        <Footer />
      </section>
    </div>
  );
}
export default PortifolioPage;
