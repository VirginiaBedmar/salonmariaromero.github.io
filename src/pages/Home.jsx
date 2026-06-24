import React from 'react';
import './Home.scss';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default () => {
    return (
        <div id="home">
            <Navigation />
            <header className="full-height">
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
            <Footer />
        </div>
    )
};