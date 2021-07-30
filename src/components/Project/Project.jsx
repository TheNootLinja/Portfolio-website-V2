import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'


import "./Project.styles.css"

function Project({project}) {
    return (
        <motion.div
            initial={{ x: "-200px", opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{ duration: 0.5}}
            className="project"
        >
            <StaticImage src="../images/Headshot.jpg" className="project-image"/>
            <h2>{project.projName}</h2>
            <a href="/">Link To Project</a>
            <p>{project.projDesc}</p>
        </motion.div>
    )
}

export default Project
