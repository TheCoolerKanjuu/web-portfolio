import React from "react";
import Landing from "./landing/landing";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import "./home.css"
export const Home = () => {
    return(
        <>
            <div className="container y-mandatory">
                <Landing/>
                <Skills/>
                <Projects/>
            </div>
        </>
    )
}
