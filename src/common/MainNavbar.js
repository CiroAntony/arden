import React from 'react';
import '../common/MainNavbar.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function MainNavbar() {
  return (
    <header className='main-header'>
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
  </header>
  
  )
}
