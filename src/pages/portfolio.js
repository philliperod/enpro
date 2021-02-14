import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Hi from the portfolio page</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default portfolio
