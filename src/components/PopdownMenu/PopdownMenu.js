import React from "react"
import { Link } from "gatsby"

import "./PopdownMenu.styles.css"

function PopdownMenu() {
  return (
    <div className="PopdownMenu">
      <div className="link-container">
        <Link>Blog</Link>
        <Link>Projects</Link>
        <Link>Experience</Link>
        <Link>Contact Info</Link>
      </div>
    </div>
  )
}

export default PopdownMenu
