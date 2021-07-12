import React from "react"
import { Link } from "gatsby"

import "./BlogPost.styles.css"

const BlogPost = ({ post }) => (
    <div className="blogpost">
        <Link to={post.frontmatter.slug}>
            <h2 className="blogpost-title">{post.frontmatter.title}</h2>
            <p className="blogpost-date">{post.frontmatter.date}</p>
            <p>{post.excerpt}</p>
        </Link>
    </div>
)

export default BlogPost