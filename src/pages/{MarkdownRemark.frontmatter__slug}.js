import React from "react"
import { graphql, Link } from "gatsby"

import "../PageStyles/individualblog.styles.css"

import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <div className="blog-post-container">
        <div className="blog-post">
            <Link to="/blog">Back to blogs</Link>
            <h1 className="blog-post-title">{frontmatter.title}</h1>
            <h2 className="blog-post-date">{frontmatter.date}</h2>
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
        </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`
