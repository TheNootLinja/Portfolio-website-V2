import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../PageStyles/index.styles.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="index-container">
      <Seo title="Home" />
      <h1>
        Hey, I'm <span className="name-span">Nicholas Peters</span>
      </h1>
      <div className="image-container">
        <StaticImage src="../images/Headshot.jpg" className="headshot"></StaticImage>
      </div>
      <p>I’m a full-stack web developer from Michigan who almost definitely is addicted to coffee 
        at this point. I have a background and education in IT and do freelance web development 
        under my company, Popular Nerd LLC.

      I have a passion for problem solving all the way from design to backend server code. I love working with my clients to figure out tailored solutions for their exact problem and not just a one size fits all fix. If I am working with you on a project, big or small, that project is just as important to me as it is to your company. I take pride in everything I do and refuse to settle for anything less than the best I can create.
      </p>
    </div>
  </Layout>
)

export default IndexPage
