import * as React from "react"
import { Typography } from "@mui/material"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <Typography variant="h1">À propos</Typography>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>À propos</title>
