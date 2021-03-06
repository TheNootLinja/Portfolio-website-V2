import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "../PageStyles/index.styles.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="index-container">
      <Seo title="Home" />
      <h1 className="intro-h1">
        Hey, I'm <span className="name-span">Nicholas Peters</span>
      </h1>
      <div className="image-container">
        <StaticImage
          src="../images/Headshot.jpg"
          alt="Headshot picture of Nicholas Peters"
          className="headshot"
        ></StaticImage>
      </div>
      <p>
        I’m a full-stack web developer from Michigan who almost definitely is
        addicted to coffee at this point. I have a background and education in
        IT and do freelance web development under my company, Popular Nerd LLC.
        <br />
        <br />I have a passion for problem solving all the way from design to
        backend server code. I love working with my clients to figure out
        tailored solutions for their exact problem and not just a one size fits
        all fix. If I am working with you on a project, big or small, that
        project is just as important to me as it is to your company. I take
        pride in everything I do and refuse to settle for anything less than 
        bringing your dream site to life.
      <div className="icon-container">
        <Link target="blank" to="https://github.com/TheNootLinja" className="icon-div"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path className="icon" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></Link>
        <Link target="blank" to="https://twitter.com/TheNootLinja" className="icon-div"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path className="icon" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></Link>
        <Link target="blank" to="https://stackexchange.com/users/22355224/thenootlinja" className="icon-div"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path className="icon-so icon" d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"/></svg></Link>
      </div>
        <div className="image-2-container">
        <StaticImage
          src="../images/Headshot.jpg"
          alt="Headshot picture of Nicholas Peters"
          className="headshot-2"
        ></StaticImage>
      </div>
      </p>
    </div>
    <div className="deco-shape" />
  </Layout>
)

export default IndexPage
