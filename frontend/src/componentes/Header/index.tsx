import logo from '../../assets/img/logo.svg'
import './stylesHeder.css'
function Header() {
  return(
    <header>
    <div className="header-logo-container">
      <img src={logo} alt="LogoDSMeta"/>
      <h1>DSMeta</h1>
      <p>Desenvolvido por 
        <a href="https://github.com/Jefferson-Pedro"> @jefferson.pedro25</a>
      </p> 
    </div>
  </header>
  )
}

export default Header
