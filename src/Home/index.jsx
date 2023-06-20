import Empresa from "../components/Empresa";
import Servicos from "../components/Servicos";
import NavBar from "../components/NavBar";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Empresa />
      <Servicos />
      <Contato />
      <Footer />
    </>
  );
}

export default Home;
