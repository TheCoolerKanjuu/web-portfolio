import React from "react";
import Landing from "./landing/landing";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import "./home.css"
import NavTimeline from "../../layouts/timeline/nav-timeline";
import Waves from "./components/waves/waves";
export const Home = () => {
    return(
        <>
            <div className="container y-mandatory">
                <Waves/>
                <Landing/>
                <Skills/>
                <Projects/>
                <NavTimeline currentLocation={"landing"}/>
            </div>
        </>
    )
}
