import React from "react"
import styled from "styled-components";

const Copyright = styled.p`
  text-align: center;
`

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <Copyright>© {date.getFullYear()} par Heal On Site</Copyright>
    </footer>
  )
}

export default Footer
