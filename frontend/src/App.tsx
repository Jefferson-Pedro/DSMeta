import Header from "./componentes/Header"
import VendasCard from "./componentes/VendasCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="secao-vendas">
          <div className="div-container-card">
              <VendasCard/>
          </div>
        </section>
      </main>
      </>
      )
}

      export default App
