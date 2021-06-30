import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="Header"
    style={{
      height: `55px`,
      width: `100%`,
      background: `#2A2730`
    }}
  >
    <div>
      <StaticImage src="../../images/Logo.svg" alt="A dinosaur" />
    </div>
  </header>
)

export default Header;
