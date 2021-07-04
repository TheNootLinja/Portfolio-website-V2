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
      <h2 className="job-title">Principle Services</h2>
      <p className="work-date">March 2020 - Current</p>
      <p className="work-description">As a solutions developer, It was my job work 
      with clients to develop custom software that fit their business needs and also 
      help them realize features or data that they hadm’t considered being helpful to 
      them. After that I would design, code, and present that software to the client.</p>
    </div>
    <div className="experience-container">
      <h2 className="job-title">FullStack Web Developer Developer</h2>
      <h2 className="job-title">Popular Nerd LLC</h2>
      <p className="work-date">Juner 2020 - Current</p>
      <p className="work-description">My work as a fullstack web developer has been done 
      under my company, Popular Nerd LLC. I have worked with clients to build websites and 
      webapps that help their business accomplish goals they have set out to achieve and pride 
      myself on helping through every step along the way. As a web developer, it is my job to make 
      sure any client I work with understands how what I am doing will help their business and 
      what needs to be done to accomplish the goals that they have set.</p>
    </div>
  </Layout>
)

export default ExperiencePage
