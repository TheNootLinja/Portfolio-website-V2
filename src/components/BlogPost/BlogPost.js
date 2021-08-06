import React from "react"
import { Link } from "gatsby"
import { motion } from 'framer-motion'


import "./BlogPost.styles.css"

const BlogPost = ({ post, variants }) => (
    <motion.div 
        className="blogpost"
        initial="initial"
        animate="animate"
        variants={variants}
        exit={{ y: "-300px", opacity: 0}} 
    >
        <Link to={post.frontmatter.slug}>
            <h2 className="blogpost-title">{post.frontmatter.title}</h2>
            <p className="blogpost-date">{post.frontmatter.date}</p>
            <p>{post.excerpt}</p>
        </Link>
    </motion.div>
)

export default BlogPost