import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./Header.styles.css"

const Header = ({ clickFunction }) => (
  <header
    className="Header"
    style={{
      height: `55px`,
      width: `100%`,
      background: `#2A2730`,
    }}
  >
    <div>
      <Link to="/">
        <StaticImage
          className="StaticImage"
          src="../../images/Logo.svg"
          alt="Site logo"
        />
      </Link>
    </div>
    <div className="hb-container">
      <svg
        svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="icon-menu"
        onClick={clickFunction}
      >
        <path
          className="secondary"
          fillRule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      </svg>
    </div>
  </header>
)

export default Header
