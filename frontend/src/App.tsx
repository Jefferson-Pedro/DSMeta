import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componentes/Header"
import VendasCard from "./componentes/VendasCard"

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="secao-vendas">
          <div className="div-container-card">
            <VendasCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
