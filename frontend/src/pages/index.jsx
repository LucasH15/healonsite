import * as React from "react"
import { GlobalStyles, Typography } from "@mui/material"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <GlobalStyles styles={{
        body: {
          "background-color": "#E3E2D9"
        }
      }} />
      <Typography variant='h1'>{intl.formatMessage({id: "home"})}</Typography>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
