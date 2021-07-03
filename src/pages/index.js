import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import PopdownMenu from "../components/PopdownMenu/PopdownMenu"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home Page</h1>
  </Layout>
)

export default IndexPage
