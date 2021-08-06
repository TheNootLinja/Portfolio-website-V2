import React from "react"
import { motion } from "framer-motion"

import BlogPost from "../BlogPost/BlogPost"

const BlogPostList = posts => {
  console.log(posts)
  return (
    <motion.div>
      {/* {posts.map(post => (
        <BlogPost post={post} key={post.id} />
      ))} */}
    </motion.div>
  )
}

export default BlogPostList
