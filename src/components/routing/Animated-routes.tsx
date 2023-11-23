import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "../../pages/home/home";
import {ContactMe} from "../../pages/contact-me/contact-me";
import {Portfolio} from "../../pages/portfolio/portfolio";
import "./animated-routes.css"
import React from "react";

import {AnimatePresence} from 'framer-motion'
import NavArrows from "../navigation/nav-arrows";

export default function AnimatedRoutes() {
    const location = useLocation()

    return (
        <>
            <AnimatePresence>
                <NavArrows/>
            </AnimatePresence>
            <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contact-me" element={<ContactMe/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/" element={<Navigate to="/home"/>}/>
            </Routes>
        </AnimatePresence>
        </>

    )
}