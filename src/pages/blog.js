import * as React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogPost from "../components/BlogPost/BlogPost"
import BlogPostList from "../components/BlogPostList/BlogPostList"

const variants = {
  initial: {
    x: "-300px",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "afterChildren",
      staggerChildren: 0.5,
    },
  },
}

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <BlogPost key={edge.node.id} post={edge.node} variants={variants} />
    ))

  return (
    <Layout>
      <Seo title="Blog" />
      <h1 className="page-title">Blog Page</h1>
      {/* <motion.div>{Posts}</motion.div> */}
      <BlogPostList posts={Posts} />
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`
