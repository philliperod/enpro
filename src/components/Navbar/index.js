import React from "react"
import { Link } from "gatsby"
import { NavBackground, NavLinks, Links, Ref } from "./navbarElements"

const Navbar = () => {
  return (
    <NavBackground>
      <NavLinks>
        <Links>
          <Ref>
            <Link
              to="/"
              style={{
                background: `#1f2937`,
                color: `white`,
                textDecoration: `none`,
                padding: `1rem`,
              }}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              style={{
                background: `#1f2937`,
                color: `white`,
                textDecoration: `none`,
                padding: `1rem`,
              }}
            >
              Portfolio
            </Link>
            <Link
              to="/print"
              style={{
                background: `#1f2937`,
                color: `white`,
                textDecoration: `none`,
                padding: `1rem`,
              }}
            >
              Prints
            </Link>
            <Link
              to="/about"
              style={{
                background: `#1f2937`,
                color: `white`,
                textDecoration: `none`,
                padding: `1rem`,
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              style={{
                background: `#1f2937`,
                color: `white`,
                textDecoration: `none`,
                padding: `1rem`,
              }}
            >
              Contact
            </Link>
          </Ref>
        </Links>
      </NavLinks>
    </NavBackground>
  )
}

export default Navbar
