import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="site-footer-wave-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z" />
        </svg>
      </div>
      <div className="container">
        <div className="site-footer-grid">
          <div className="site-footer-col">
            <Link to="/" className="site-footer-logo">
              <img src="assets/images/wp-assets/Diseno-sin-titulo-2024-09-26T171759.158.png" alt="Salón María Romero" />
            </Link>
          </div>
          <div className="site-footer-col">
            <h3 className="site-footer-title">Menu</h3>
            <ul className="site-footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/sobre-mi">Sobre mi</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div className="site-footer-col">
            <h3 className="site-footer-title">Contacto</h3>
            <ul className="site-footer-links">
              <li>
                <a href="tel:+34603439373">
                  +34 603 439 373
                </a>
              </li>
              <li>
                <a href="mailto:Mariiaromeeo07@gmail.com">
                  mariiaromeeo07@gmail.com
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=+34603439373" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="site-footer-col">
            <h3 className="site-footer-title">Redes Sociales</h3>
            <div className="site-footer-social">
              <a href="https://www.facebook.com/profile.php?id=100024020946103" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/mariiaromero.nails/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <div className="site-footer-bottom-links">
            <Link to="/privacidad">Política de privacidad</Link>
            <Link to="/aviso-legal">Aviso Legal</Link>
            <Link to="/accesibilidad">Declaracion Accesibilidad</Link>
          </div>
          <p className="site-footer-copyright">
            &copy; 2024 Salón de Belleza MR &bull; Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
