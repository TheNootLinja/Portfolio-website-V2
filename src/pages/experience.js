import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../PageStyles/experience.styles.css"

const ExperiencePage = () => (
  <Layout>
    <Seo title="Experience" />
    <h1 className="page-title">Previous Experience</h1>
    <div className="experience-container">
      <h2 className="job-title">Solutions Developer</h2>
      <p className="work-date">March 2020 - Current</p>
      <p className="work-description">As a solutions developer, It was my job work with clients to develop custom software that fit their business needs and also help them realize features or data that they hadm’t considered being helpful to them. After that I would design, code, and present that software to the client.</p>
    </div>
    <div className="experience-container">
      <h2 className="job-title">FullStack Web Developer Developer</h2>
      <p className="work-date">Juner 2020 - Current</p>
      <p className="work-description">As a solutions developer, It was my job work with clients to develop custom software that fit their business needs and also help them realize features or data that they hadm’t considered being helpful to them. After that I would design, code, and present that software to the client.</p>
    </div>
  </Layout>
)

export default ExperiencePage
