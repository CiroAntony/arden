import React from 'react';
import '../components/Nosotros.css';
import MainNavbar from '../common/MainNavbar';
import empresa from '../assets/Nosotros_empresa.jpg'

export default function Nosotros() {
  return (
    <div>
      <MainNavbar/>
      <section className='banner'>
        <h1 className='nosotros'>Nosotros</h1>
      </section>
      <div className='sub-empresa'>
      <h2>LA EMPRESA</h2>
      <div className='descripcion'>
        <img className='descrip-img' src={empresa} alt="" />
        <p>Somos una constructora peruana, fundada por experimentados y
dinámicos profesionales.<br></br><br></br>
Nuestros proyectos, construidos bajo estrictos estándares de calidad,
seguridad y medio ambiente, nos posicionan como una empresa que
crece rápidamente a nivel nacional, con profesionales altamente
especializados; siendo respaldada por nuestra continuidad y
crecimiento en el tiempo, además de la confiabilidad y lealtad de
nuestros clientes.<br></br><br></br>
Formamos consorcios con importantes empresas constructoras para
desarrollar proyectos particulares y también hemos establecido
relaciones de más largo plazo para proyectos específicos</p>
      </div>
      </div>
      
    </div>
  )
}

