import React from "react";
import Landing from "./landing/landing";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import "./home.css"
import NavTimeline from "../../layouts/timeline/nav-timeline";
import {motion} from "framer-motion"
export const Home = () => {
    return(
            <motion.div className="container y-mandatory" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <Landing/>
                <Skills/>
                <Projects/>
                <NavTimeline/>
            </motion.div>
    )
}
