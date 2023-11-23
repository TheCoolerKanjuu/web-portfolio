import React from "react";
import Landing from "./landing/landing";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import "./home.css"
import NavTimeline from "../../layouts/timeline/nav-timeline";
import {motion, useScroll, useSpring} from "framer-motion"
export const Home = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return(
            <motion.div className="container y-mandatory" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <Landing/>
                <Skills/>
                <Projects/>
                <NavTimeline currentLocation={"landing"}/>
            </motion.div>
    )
}
