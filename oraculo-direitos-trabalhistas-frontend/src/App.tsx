import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <footer className="footer">
        <div className="container">
          Informação geral, sem valor de orientação jurídica. Conteúdo ilustrativo nesta versão de protótipo.
        </div>
      </footer>
    </>
  )
}
