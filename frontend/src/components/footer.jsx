import React from "react"
import { styled } from "@mui/material"

const Copyright = styled('p')`
  text-align: center;
`

const MuiFooter = styled('footer')`
  margin-top: auto;
`

const Footer = () => {
  const date = new Date();

  return (
    <MuiFooter>
      <Copyright>© {date.getFullYear()} par Heal on site</Copyright>
    </MuiFooter>
  )
}

export default Footer
