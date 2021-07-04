import React from "react"
import { Link } from "gatsby"

import "./PopdownMenu.styles.css"

function PopdownMenu({ clickFunction }) {
  return (
    <div className="PopdownMenu">
      <div className="link-container">
        <Link to='/blog' onClick={clickFunction}>Blog</Link>
        <Link to='/projects' onClick={clickFunction}>Projects</Link>
        <Link to='/experience' onClick={clickFunction}>Experience</Link>
        <Link to='/contact' onClick={clickFunction}>Contact Info</Link>
      </div>
    </div>
  )
}

export default PopdownMenu
