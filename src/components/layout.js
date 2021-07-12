/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useState } from "react"

import Header from "./Header/Header"
import PopdownMenu from "./PopdownMenu/PopdownMenu"
import "./layout.css"

const Layout = ({ children }) => {
  const [isPopdown, setIsOpen] = useState(false)

  function openPopdown() {
    setIsOpen(!isPopdown)
  }

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header clickFunction={openPopdown} />
      {isPopdown && <PopdownMenu clickFunction={openPopdown} />}
      <div
        style={{
          maxWidth: 960,
          margin: "auto",
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
