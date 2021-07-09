import React from 'react'

import { StaticImage } from "gatsby-plugin-image"


import "./Project.styles.css"

function Project({project}) {
    return (
        <div className="project">
            <StaticImage src="../images/Headshot.jpg" className="project-image"/>
            <h2>{project.projName}</h2>
            <a href="/">Link To Project</a>
            {/* <ul>
                {project.projStack.map(tech => <li>{tech}</li>)}
            </ul> */}
            <p>{project.projDesc}</p>
        </div>
    )
}

export default Project
