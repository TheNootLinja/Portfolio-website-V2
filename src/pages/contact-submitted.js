import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../PageStyles/contact.styles.css"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Me" />
    <h1 className="page-title">Contact Me</h1>
    <p className="content contact-content">
      Have a project you’d like my help with or a job you think I would be
      perfect for? Fill out the form below or send me an email at the address
      below and I will get back to you as soon as possible.
    </p>
    <div className="email-container">
      <p className="content email-label">Business Email:</p>
      <p className="content email">nicholaspeters@popularnerd.tech</p>
      <p>Talk to you soon!</p>
    </div>
  </Layout>
)

export default ContactPage
