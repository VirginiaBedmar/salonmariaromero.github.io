import React from 'react';
import './Home.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default () => {
    return (
        <div id="home">
            <header className="full-height">
                <div className="header-navigation">
                    <div className="container">
                        <div className="header-navigation-container">
                            <a href="/">
                                <figure className="logo">
                                    <img src="assets/images/logo-green.png" alt="Salón María Romero"/>
                                </figure>
                            </a>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="/">Inicio</a>
                                    </li>
                                    <li>
                                        <a href="/servicios">Servicios</a>
                                    </li>
                                    <li>
                                        <a href="/sobre-mi">Sobre mí</a>
                                    </li>
                                    <li>
                                        <a href="/contacto">Contacto</a>
                                    </li>
                                </ul>
                            </nav>
                            <ul className="social-links">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100024020946103">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/mariiaromero.nails/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-content">
                    <div className="container">
                        <div className="header-content-container">
                            <div>
                                <h3>Revitaliza tus uñas</h3>
                                <p>
                                    Vibrantes, elegantes y llenas de vida. Nuestros diseños de uñas están pensados para cada ocasión, haciendo que tus manos sean siempre el centro de atención.
                                </p>
                                <a href="/servicios">Consultar servicios</a>
                            </div>
                            <figure>
                                <img src="assets/images/jasmine-flowers-white.png" alt="Jasmine Flowers White"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="full-height">

                </section>
            </main>
        </div>
    )
};