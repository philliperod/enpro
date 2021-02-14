import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the Contact page</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default contact
