import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

export default () => {
    return (
        <section id="not-found">
            <div className="container not-found-content">
                <h1 className="not-found-code">404</h1>
                <h2 className="not-found-title">Página no encontrada</h2>
                <p className="not-found-text">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                <Link to="/" className="not-found-link">Volver al inicio</Link>
            </div>
        </section>
    );
};
