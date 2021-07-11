import React from "react"
import { Link } from "gatsby"

const BlogPost = ({ post }) => (
    <div>
        <Link to={post.frontmatter.slug}>
            {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
    </div>
)

export default BlogPost