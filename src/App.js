import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import './App.responsive.scss';
import Home from "./pages/home/Home";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
};