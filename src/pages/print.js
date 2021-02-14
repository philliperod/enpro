import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const print = () => (
  <Layout>
    <SEO title="Print" />
    <h1>Hi from the Print page</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default print
