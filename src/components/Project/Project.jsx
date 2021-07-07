import React from 'react'

import "./Project.styles.css"

function Project({project}) {
    return (
        <div className="project">
            <h2>{project.projName}</h2>
            <ul>
                {project.projStack.map(tech => <li>{tech}</li>)}
            </ul>
        </div>
    )
}

export default Project
