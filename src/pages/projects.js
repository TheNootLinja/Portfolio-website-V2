import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Project from "../components/Project/Project"

const projectArr = [
  {
    projName: "React Task Tracker",
    projStack: ["React"],
    projDesc: "A task tracker I built with React.",
    projLink: "www.google.com",
  },
  {
    projName: "Survey Flunkie",
    projStack: ["React"],
    projDesc: "A survey form built in html, css, and javascript.",
    projLink: "www.google.com",
  },
  {
    projName: "Gatsby Blog",
    projStack: ["Gatsby"],
    projDesc: "A markdown blog I built using Gatsby.",
    projLink: "www.google.com",
  }
]

const ProjectsPage = () => (
  <Layout>
    <Seo title="Projects" />
    <h1 className="page-title">Projects Page</h1>
    {projectArr.map(project => 
    <Project project={project} key={project.projName} />
    )
    }
  </Layout>
)

export default ProjectsPage
