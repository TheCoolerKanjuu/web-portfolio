import {Route, Routes, useLocation} from "react-router-dom";
import {Home} from "../../pages/home/home";
import {ContactMe} from "../../pages/contact-me/contact-me";
import {Portfolio} from "../../pages/portfolio/portfolio";
import "./animated-routes.css"
import React from "react";

import {AnimatePresence} from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact-me" element={<ContactMe/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
            </Routes>
        </AnimatePresence>
    )
}