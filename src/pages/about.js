import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const about = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the About page</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default about
