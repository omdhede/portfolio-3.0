"use client"

import React from "react";
import {projectsData} from "@/lib/projects";
import Project from "@/components/project";


export default function Projects() {
    return (
        <>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </>

    )
}