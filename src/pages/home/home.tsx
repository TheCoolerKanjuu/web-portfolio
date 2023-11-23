import React from "react";
import Landing from "./landing/landing";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import "./home.css"
import NavTimeline from "../../layouts/timeline/nav-timeline";
export const Home = () => {
    return(
        <>
            <div className="container y-mandatory">
                <NavTimeline currentLocation={"landing"}/>
                <Landing/>
                <Skills/>
                <Projects/>
            </div>
        </>
    )
}
