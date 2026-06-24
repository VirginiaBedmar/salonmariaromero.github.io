import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import './App.responsive.scss';
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Servicios from "./pages/Servicios";
import SobreMi from "./pages/SobreMi";
import Contacto from "./pages/Contacto";
import Privacidad from "./pages/Privacidad";
import AvisoLegal from "./pages/AvisoLegal";
import NotFound from "./pages/NotFound";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route element={<Layout/>}>
                <Route path="/servicios" element={<Servicios/>} />
                <Route path="/sobre-mi" element={<SobreMi/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/politica-privacidad" element={<Privacidad/>} />
                <Route path="/aviso-legal" element={<AvisoLegal/>} />
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
    )
};