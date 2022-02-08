import "./App.css";
import logo from '../src/assets/logo.png';
import hotel from '../src/assets/Hotel.png'
import { Link } from "react-router-dom";

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
        <hr className="dropdown-divider" />
        <div className="text-p"><p>Tenemos muchos años de experiencia en construcción de
          viviendas, edificios comercia, multifamiliares y construcción de
          edificios de diversos tipos y escalas a nivel nacional</p></div>
      </header>
      
        <h2 className="sub-cons">CONSTRUIMOS</h2>
        <div className="hr"></div>
        <section className="construimos">
        <div className="container">
          <div class="card-group">
            <div class="card">
              <img src={hotel} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
