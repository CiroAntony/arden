import logo from '../assets/logo.png';
import hotel from '../assets/Hotel.png';
import multifamiliar from '../assets/Multifamiliares.png';
import vivienda from '../assets/Vivienda.png';
import galeria from '../assets/Galerias.png';
import arden from '../assets/arden-footer.png';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../components/Home.css'

function App() {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={logo} alt="" /><span className="LogoName">ARDEN</span><p className="sublogo">EMPRESA CONSTRUCTORA</p></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item" id="tab-index">
                  <a className="nav-link active" aria-current="page" href="/">INICIO</a>
                </li>
                <li className="nav-item" id="tab-conocenos">
                  <Link className="nav-link active" aria-current="page" to="/nosotros">NOSOTROS</Link>
                </li>
                <li className="nav-item dropdown" id="tab-obras">
                  <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SERVICIOS
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/">CONSTRUCCIÓN DE HOTELES</a></li>
                    <li><a className="dropdown-item" href="/">CONSTRUCCIÓN DE EDIFICIOS MULTIFAMILIARES</a></li>
                    <li><a className="dropdown-item" href="/">CONSTRUCCIÓN DE VIVIENDAS</a></li>
                    <li><a className="dropdown-item" href="/">GALERÍAS COMERCIALES</a></li>
                  </ul>
                </li>
                <li className="nav-item" id="tab-galeria">
                  <a className="nav-link active" aria-current="page" href="/">CONTACTO</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="text-banner"><h1>Construimos tu proyecto de vida</h1></div>
        <div className="hr-banner"></div>
        <div className="text-p"><p>Tenemos muchos años de experiencia en construcción de
          viviendas, edificios comercia, multifamiliares y construcción de
          edificios de diversos tipos y escalas a nivel nacional</p></div>
      </header>

      <h2 className="sub-cons">CONSTRUIMOS</h2>
      <div className="hr"></div>
      <section className="cards">
        <div className="container">
          <div class="card-group">
            <div class="card">
              <img src={hotel} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="h5 card-title">Hoteles</h5>
                <div className="hr1"></div>
                <p class="card-text">Realizamos sofisticados hoteles en
                  las ciudades del Perú, emplazados
                  como hitos en su contexto, son la
                  mejor opción para descansar.</p>
              </div>
            </div>
            <div class="card">
              <img src={multifamiliar} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="h5 card-title">Multifamiliares</h5>
                <div className="hr1"></div>
                <p class="card-text">Modernos edificios de departa-
                  mentos con normativa aplicable y
                  los requerimientos de seguridad y
                  estructuras antisísmicas.</p>
              </div>
            </div>
            <div class="card">
              <img src={vivienda} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="h5 card-title">Viviendas</h5>
                <div className="hr1"></div>
                <p class="card-text">Residencias tipo unifamiliares de
                  diferentes tipologías y escalas con
                  espacios amplios y modernos, y
                  de calidad arquitectónica.</p>
              </div>
            </div>
            <div class="card">
              <img src={galeria} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="h5 card-title">Galerías comerciales</h5>
                <div className="hr1"></div>
                <p class="card-text">Analizamos las potencialidades de
                  tu terreno y el público objetivo,
                  para así poder definir el proyecto
                  comercial más conveniente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ubicacion">
        <div className="direccion">
          <h3>ARDEN Perú</h3>

          <dl>
            <dt>LIMA</dt>
            <dd>Calle Ayacucho 202 - Santa Patricia - La Molina <br />
              (511) 7158699/7158698</dd>
            <dt>PUCALLPA</dt>
            <dd>Jr. Ucayali 131 - Coronel Portillo <br />
              (061) 458699/458698</dd>
            <dt>HUANCAYO</dt>
            <dd>Av. Salaverry 140, San Jerónimo de Tunán <br />
              (064) 869945/869845</dd>
          </dl>
        </div>
        <div className="g-maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d39326.230841445664!2d-77.0243459274352!3d-12.067123769255124!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1644353437926!5m2!1ses!2spe" allowfullscreen="" loading="lazy" align="right"></iframe>
        </div>
      </section>

      <footer className="main-footer">
        <img src={arden} alt="" className="footer-logo" />
      
      <ul className="m1">
        <dd className="li-footer">Inicio</dd>
        <dd className="li-footer">Empresa</dd>
        <dd className="li-footer">Servicios</dd>
        <dd className="li-footer">Equipos</dd>
        <dd className="li-footer">Clientes</dd>
      </ul>

      <ul className="m2">
        <dd className="li-footer">Nuestros Servicios</dd>
        <dd className="li-footer">Proyectos Ejecutados</dd>
        <dd className="li-footer">Trabaja con nosotros</dd>
        <dd className="li-footer">Libro de Reclamaciones</dd>
        <dd className="li-footer">Protección al consumidor</dd>
      </ul>
      <ul className="group-icons">
        <a className="icons" href="/"><FontAwesomeIcon icon={faFacebook} /></a>
        <a className="icons" href="/"><FontAwesomeIcon icon={faYoutube} /></a>
        <a className="icons" href="/"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a className="icons" href="/"><FontAwesomeIcon icon={faInstagram} /></a>
        </ul>
      </footer>
    </div>
  );
}

export default App;
