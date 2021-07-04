import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../PageStyles/contact.styles.css"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Me" />
    <h1 className="page-title">Contact Me</h1>
    <p className="content contact-content">Have a project you’d like my help with or a job you think I would be 
        perfect for? Fill out the form below or send me an email at the address 
        below and I will get back to you as soon as possible.</p>
    <div className="email-container">
        <p className="content email-label">Business Email:</p>
        <p className="content email">nicholaspeters@popularnerd.tech</p>
    </div>
    <form action="" className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email"/>
        <label htmlFor="company">Company</label>
        <input type="text" name="company"/>
        <label htmlFor="description">Description of Project or Job</label>
        <textarea name="" id="description" cols="30" rows="10"></textarea>
        <div className="button-container">
            <button>Submit</button>
        </div>
    </form>
  </Layout>
)

export default ContactPage