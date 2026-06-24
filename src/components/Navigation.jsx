import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Navigation.scss'

function Navigation() {
  return (
    <div className="site-navigation">
      <div className="container">
        <div className="site-navigation-container">
          <Link to="/" className="site-navigation-logo">
            <figure className="site-navigation-logo-figure">
              <img src="https://salonmariaromero.es/wp-content/uploads/2024/09/Diseno-sin-titulo-2024-09-26T135536.081.png" alt="Salón María Romero" />
            </figure>
          </Link>
          <nav>
            <ul className="site-navigation-menu">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/sobre-mi">Sobre mí</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
          <ul className="site-navigation-social">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100024020946103" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mariiaromero.nails/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation
