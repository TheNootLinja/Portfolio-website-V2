import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import "./PopdownMenu.styles.css"

function PopdownMenu({ clickFunction }) {
  return (
    <motion.div
      className="PopdownMenu"
      key="menu"
      initial={{ y: "-10rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-10rem", opacity: 0 }}
      transition={{ type: "spring", default: { duration: 0.4 } }}
    >
      <div className="link-container">
        <Link to="/blog" onClick={clickFunction}>
          Blog
        </Link>
        <Link to="/projects" onClick={clickFunction}>
          Projects
        </Link>
        <Link to="/experience" onClick={clickFunction}>
          Experience
        </Link>
        <Link to="/contact" onClick={clickFunction}>
          Contact Info
        </Link>
      </div>
    </motion.div>
  )
}

export default PopdownMenu
